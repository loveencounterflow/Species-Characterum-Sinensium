
'use strict'

############################################################################################################
CND                       = require 'cnd'
rpr                       = CND.rpr
badge                     = 'SCS'
log                       = CND.get_logger 'plain',     badge
info                      = CND.get_logger 'info',      badge
whisper                   = CND.get_logger 'whisper',   badge
alert                     = CND.get_logger 'alert',     badge
debug                     = CND.get_logger 'debug',     badge
warn                      = CND.get_logger 'warn',      badge
help                      = CND.get_logger 'help',      badge
urge                      = CND.get_logger 'urge',      badge
echo                      = CND.echo.bind CND
#...........................................................................................................
FS                        = require 'fs'
PATH                      = require 'path'
{ assign
  jr }                    = CND
# { walk_cids_in_cid_range
#   cwd_abspath
#   cwd_relpath
#   here_abspath
#   _drop_extension
#   project_abspath }       = require './helpers'
@types                    = require './types'
{ isa
  validate
  cast
  type_of }               = @types
SP                        = require 'steampipes'
{ $
  $async
  $watch
  $show
  $drain }                = SP.export()
{ jr, }                   = CND
require 'cnd/lib/exception-handler'
DATOM                     = new ( require 'datom' ).Datom { dirty: false, }
{ new_datom
  wrap_datom
  # lets
  select }                = DATOM.export()
PATH                      = require 'path'
Htmlparser                = ( require 'htmlparser2' ).Parser

#-----------------------------------------------------------------------------------------------------------
@$trim        = -> $ ( line, send ) => send line.trim()
@$skip_empty  = -> SP.$filter ( line ) => line isnt ''

#-----------------------------------------------------------------------------------------------------------
@$source_A_filter_table_rows = ->
  within_td = false
  return $ ( d, send ) =>
    switch d.$key
      when '<tr', '>tr'
        send d
      when '<td'
        within_td = true
        send d
      when '>td'
        within_td = false
        send d
      when '<br'
        send new_datom '^text', { text: ' ', }
      when '^text'
        send d if within_td
    return null

#-----------------------------------------------------------------------------------------------------------
@$source_B_filter_paragraphs = ->
  within_entry = false
  return $ ( d, send ) =>
    switch d.$key
      when '<epithet', '<de'
        within_entry = true
        send d
      when '>epithet', '>de'
        within_entry = false
        send d
      when '^text'
        send d if within_entry
    return null

#-----------------------------------------------------------------------------------------------------------
@$source_A_filter_empty_table_rows = ->
  collector = null
  return $ ( d, send ) =>
    switch d.$key
      when '<tr'
        collector = [ d, ]
      when '>tr'
        collector.push d
        if collector.length > 2
          send d for d in collector
        collector = null
      when '<td', '^text', '>td'
        collector.push d
    return null

#-----------------------------------------------------------------------------------------------------------
@_normalize_texts = ( texts ) ->
  R = texts.join ''
  R = R.trim()
  R = R.replace /\n/g, ' '
  R = R.replace /\s{2,}/g, ' '
  return R

#-----------------------------------------------------------------------------------------------------------
@$source_A_condense_texts = ->
  texts = null
  return $ ( d, send ) =>
    switch d.$key
      when '<tr', '>tr'
        send d
      when '<td'
        texts = []
      when '>td'
        if texts?
          text = @_normalize_texts texts
          text = text.replace /\[[0-9]+\]/g, ''
          send new_datom '^text', { text, } if text isnt ''
        texts = null
      when '^text'
        if texts?
          texts.push d.text
    return null

#-----------------------------------------------------------------------------------------------------------
@$source_B_condense_texts = ->
  texts = null
  return $ ( d, send ) =>
    switch d.$key
      when '<epithet', '<de'
        texts = []
        send d
      when '>epithet', '>de'
        if texts?
          text = @_normalize_texts texts
          text = text.replace /\[[0-9]+\]/g, ''
          send new_datom '^text', { text, } if text isnt ''
        texts = null
        send d
      when '^text'
        if texts?
          texts.push d.text
    return null

#-----------------------------------------------------------------------------------------------------------
@$source_A_collect_entries = ->
  fields    = null
  titles    = [ 'term', 'remarks', 'english', 'example', ]
  col       = null
  return $ ( d, send ) =>
    switch d.$key
      when '<tr'
        fields  = {}
        col     = -1
      when '>tr'
        send new_datom '^entry', fields
      when '^text'
        col++
        if ( title = titles[ col ] )?
          fields[ title ] = d.text
    return null

#-----------------------------------------------------------------------------------------------------------
@$source_B_collect_entries = ->
  fields          = null
  within_epithet  = false
  within_de       = false
  return $ ( d, send ) =>
    switch d.$key
      when '<epithet'
        within_epithet  = true
        fields          = {}
      when '>epithet'
        within_epithet = false
      when '<de'
        within_de = true
      when '>de'
        within_de = false
        send new_datom '^entry', fields
      when '^text'
        if within_epithet
          fields.term = d.text
        else if within_de
          fields.german = d.text
    return null

#-----------------------------------------------------------------------------------------------------------
@$show = -> $watch ( d ) =>
  echo ( CND.gold d.term ), ( CND.grey d.language ), ( CND.blue d.english ), ( CND.grey d.example )

#-----------------------------------------------------------------------------------------------------------
@_get_html_parser_handlers = ( wye ) ->
  R =
    #.......................................................................................................
    onopentag: ( name, attributes ) ->
      key = "<#{name}"
      if has_attributes  = ( Object.keys attributes ).length > 0
        wye.send new_datom key, { attributes, }
      else
        wye.send new_datom key
      return null
    #.......................................................................................................
    ontext: ( text ) ->
      wye.send new_datom '^text', { text, }
      return null
    #.......................................................................................................
    onclosetag: ( name ) ->
      wye.send new_datom ">#{name}"
      return null
  #.........................................................................................................
  return R

#-----------------------------------------------------------------------------------------------------------
@new_html_source = ( path ) ->
  wye         = SP.$pass()
  parser      = new Htmlparser ( @_get_html_parser_handlers wye ), { decodeEntities: true, }
  pipeline    = []
  source      = SP.read_from_file path
  pipeline.push source
  pipeline.push SP.$split()
  pipeline.push $ ( line, send ) -> parser.write line
  pipeline.push wye
  ### TAINT shouldn't have to uses await here ###
  return await SP.pull pipeline...

#-----------------------------------------------------------------------------------------------------------
@$parse_html = ->
  wye         = SP.$pass()
  parser      = new Htmlparser ( @_get_html_parser_handlers wye ), { decodeEntities: true, }
  pipeline    = []
  pipeline.push $ ( line, send ) -> parser.write line
  pipeline.push wye
  return SP.pull pipeline...

#-----------------------------------------------------------------------------------------------------------
@new_source_A = ->
  path        = PATH.join __dirname, '../wikipedia-latin-greek-taxonomy-vocabulary.raw.html'
  source      = await @new_html_source path
  pipeline    = []
  pipeline.push source
  pipeline.push @$source_A_filter_table_rows()
  pipeline.push @$source_A_filter_empty_table_rows()
  pipeline.push @$source_A_condense_texts()
  pipeline.push @$source_A_collect_entries()
  return SP.pull pipeline...

#-----------------------------------------------------------------------------------------------------------
@new_source_B = ->
  path        = PATH.join __dirname, '../epitheta.html'
  source      = await @new_html_source path
  pipeline    = []
  pipeline.push source
  pipeline.push @$source_B_filter_paragraphs()
  pipeline.push @$source_B_condense_texts()
  pipeline.push @$source_B_collect_entries()
  return SP.pull pipeline...

#-----------------------------------------------------------------------------------------------------------
@new_source_C = ->
  ### NOTE nothing to do w/ the current project, just a demo to show the limitations of htmlparser2 ###
  source      = [
    "<!DOCTYPE html>"       # ignored
    "<title>MKTS</title>"
    "<document/>"           # wrongly parsed as opening tag w/out closing tag
    "<foo bar baz=42>"      # correctly parsed, attribute `bar` set to empty string
    "something"
    "<br/>"                 # correctly parsed although strictly, self-closing tag are not allowed in HTML5
    "else"
    "</thing>"              # silently ignored stray closing tag, therefore unsuitable
    "</foo>"
    "</document>"           # closing tag recognized but observe there was no opening tag
    ]
  pipeline    = []
  pipeline.push source
  # pipeline.push SP.$split()
  pipeline.push $watch ( d ) -> urge jr d
  pipeline.push @$parse_html()
  pipeline.push SP.$pass()
  return SP.pull pipeline...

#-----------------------------------------------------------------------------------------------------------
@__FUTURE__demo = -> new Promise ( resolve, reject ) =>
  ### this is what it should look like when wyes work as intended ###
  source      = await @new_source_A()
  pipeline    = []
  pipeline.push source
  pipeline.push SP.new_wye await @new_source_B()
  pipeline.push $show()
  pipeline.push $drain => resolve()
  SP.pull pipeline...
  return null

#-----------------------------------------------------------------------------------------------------------
@demo = -> new Promise ( resolve, reject ) =>
  source_A            = await @new_source_A()
  source_B            = await @new_source_B()
  source_C            = SP.new_push_source()
  source_A_has_ended  = false
  source_B_has_ended  = false
  #.........................................................................................................
  end_source_C = ->
    return unless source_A_has_ended and source_B_has_ended
    source_C.end()
  #.........................................................................................................
  pipeline_A    = []
  pipeline_A.push source_A
  pipeline_A.push $watch ( d ) -> source_C.send d
  pipeline_A.push $drain -> source_A_has_ended = true; end_source_C()
  #.........................................................................................................
  pipeline_B    = []
  pipeline_B.push source_B
  pipeline_B.push $watch ( d ) -> source_C.send d
  pipeline_B.push $drain -> source_B_has_ended = true; end_source_C()
  #.........................................................................................................
  pipeline_C    = []
  pipeline_C.push source_C
  pipeline_C.push $show()
  pipeline_C.push $drain => resolve()
  #.........................................................................................................
  SP.pull pipeline_C...
  SP.pull pipeline_A...
  SP.pull pipeline_B...
  return null



############################################################################################################
if module is require.main then do =>
  await @demo()






