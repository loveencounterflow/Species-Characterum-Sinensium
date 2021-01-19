(function() {
  'use strict';
  var $, $async, $drain, $show, $watch, CND, DATOM, FS, Htmlparser, PATH, SP, alert, assign, badge, cast, debug, echo, help, info, isa, jr, log, new_datom, rpr, select, type_of, urge, validate, warn, whisper, wrap_datom;

  //###########################################################################################################
  CND = require('cnd');

  rpr = CND.rpr;

  badge = 'SCS';

  log = CND.get_logger('plain', badge);

  info = CND.get_logger('info', badge);

  whisper = CND.get_logger('whisper', badge);

  alert = CND.get_logger('alert', badge);

  debug = CND.get_logger('debug', badge);

  warn = CND.get_logger('warn', badge);

  help = CND.get_logger('help', badge);

  urge = CND.get_logger('urge', badge);

  echo = CND.echo.bind(CND);

  //...........................................................................................................
  FS = require('fs');

  PATH = require('path');

  ({assign, jr} = CND);

  // { walk_cids_in_cid_range
  //   cwd_abspath
  //   cwd_relpath
  //   here_abspath
  //   _drop_extension
  //   project_abspath }       = require './helpers'
  this.types = require('./types');

  ({isa, validate, cast, type_of} = this.types);

  SP = require('steampipes');

  ({$, $async, $watch, $show, $drain} = SP.export());

  ({jr} = CND);

  require('cnd/lib/exception-handler');

  DATOM = new (require('datom')).Datom({
    dirty: false
  });

  // lets
  ({new_datom, wrap_datom, select} = DATOM.export());

  PATH = require('path');

  Htmlparser = (require('htmlparser2')).Parser;

  //-----------------------------------------------------------------------------------------------------------
  this.$trim = function() {
    return $((line, send) => {
      return send(line.trim());
    });
  };

  this.$skip_empty = function() {
    return SP.$filter((line) => {
      return line !== '';
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_A_filter_table_rows = function() {
    var within_td;
    within_td = false;
    return $((d, send) => {
      switch (d.$key) {
        case '<tr':
        case '>tr':
          send(d);
          break;
        case '<td':
          within_td = true;
          send(d);
          break;
        case '>td':
          within_td = false;
          send(d);
          break;
        case '<br':
          send(new_datom('^text', {
            text: ' '
          }));
          break;
        case '^text':
          if (within_td) {
            send(d);
          }
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_B_filter_paragraphs = function() {
    var within_entry;
    within_entry = false;
    return $((d, send) => {
      switch (d.$key) {
        case '<epithet':
        case '<de':
          within_entry = true;
          send(d);
          break;
        case '>epithet':
        case '>de':
          within_entry = false;
          send(d);
          break;
        case '^text':
          if (within_entry) {
            send(d);
          }
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_A_filter_empty_table_rows = function() {
    var collector;
    collector = null;
    return $((d, send) => {
      var i, len;
      switch (d.$key) {
        case '<tr':
          collector = [d];
          break;
        case '>tr':
          collector.push(d);
          if (collector.length > 2) {
            for (i = 0, len = collector.length; i < len; i++) {
              d = collector[i];
              send(d);
            }
          }
          collector = null;
          break;
        case '<td':
        case '^text':
        case '>td':
          collector.push(d);
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this._normalize_texts = function(texts) {
    var R;
    R = texts.join('');
    R = R.trim();
    R = R.replace(/\n/g, ' ');
    R = R.replace(/\s{2,}/g, ' ');
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_A_condense_texts = function() {
    var texts;
    texts = null;
    return $((d, send) => {
      var text;
      switch (d.$key) {
        case '<tr':
        case '>tr':
          send(d);
          break;
        case '<td':
          texts = [];
          break;
        case '>td':
          if (texts != null) {
            text = this._normalize_texts(texts);
            text = text.replace(/\[[0-9]+\]/g, '');
            if (text !== '') {
              send(new_datom('^text', {text}));
            }
          }
          texts = null;
          break;
        case '^text':
          if (texts != null) {
            texts.push(d.text);
          }
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_B_condense_texts = function() {
    var texts;
    texts = null;
    return $((d, send) => {
      var text;
      switch (d.$key) {
        case '<epithet':
        case '<de':
          texts = [];
          send(d);
          break;
        case '>epithet':
        case '>de':
          if (texts != null) {
            text = this._normalize_texts(texts);
            text = text.replace(/\[[0-9]+\]/g, '');
            if (text !== '') {
              send(new_datom('^text', {text}));
            }
          }
          texts = null;
          send(d);
          break;
        case '^text':
          if (texts != null) {
            texts.push(d.text);
          }
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_A_collect_entries = function() {
    var col, fields, titles;
    fields = null;
    titles = ['term', 'remarks', 'english', 'example'];
    col = null;
    return $((d, send) => {
      var title;
      switch (d.$key) {
        case '<tr':
          fields = {};
          col = -1;
          break;
        case '>tr':
          send(new_datom('^entry', fields));
          break;
        case '^text':
          col++;
          if ((title = titles[col]) != null) {
            fields[title] = d.text;
          }
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$source_B_collect_entries = function() {
    var fields, within_de, within_epithet;
    fields = null;
    within_epithet = false;
    within_de = false;
    return $((d, send) => {
      switch (d.$key) {
        case '<epithet':
          within_epithet = true;
          fields = {};
          break;
        case '>epithet':
          within_epithet = false;
          break;
        case '<de':
          within_de = true;
          break;
        case '>de':
          within_de = false;
          send(new_datom('^entry', fields));
          break;
        case '^text':
          if (within_epithet) {
            fields.term = d.text;
          } else if (within_de) {
            fields.german = d.text;
          }
      }
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$show = function() {
    return $watch((d) => {
      return echo(CND.gold(d.term), CND.grey(d.language), CND.blue(d.english), CND.grey(d.example));
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this._get_html_parser_handlers = function(wye) {
    var R;
    R = {
      //.......................................................................................................
      onopentag: function(name, attributes) {
        var has_attributes, key;
        key = `<${name}`;
        if (has_attributes = (Object.keys(attributes)).length > 0) {
          wye.send(new_datom(key, {attributes}));
        } else {
          wye.send(new_datom(key));
        }
        return null;
      },
      //.......................................................................................................
      ontext: function(text) {
        wye.send(new_datom('^text', {text}));
        return null;
      },
      //.......................................................................................................
      onclosetag: function(name) {
        wye.send(new_datom(`>${name}`));
        return null;
      }
    };
    //.........................................................................................................
    return R;
  };

  //-----------------------------------------------------------------------------------------------------------
  this.new_html_source = async function(path) {
    var parser, pipeline, source, wye;
    wye = SP.$pass();
    parser = new Htmlparser(this._get_html_parser_handlers(wye), {
      decodeEntities: true
    });
    pipeline = [];
    source = SP.read_from_file(path);
    pipeline.push(source);
    pipeline.push(SP.$split());
    pipeline.push($(function(line, send) {
      return parser.write(line);
    }));
    pipeline.push(wye);
    /* TAINT shouldn't have to uses await here */
    return (await SP.pull(...pipeline));
  };

  //-----------------------------------------------------------------------------------------------------------
  this.$parse_html = function() {
    var parser, pipeline, wye;
    wye = SP.$pass();
    parser = new Htmlparser(this._get_html_parser_handlers(wye), {
      decodeEntities: true
    });
    pipeline = [];
    pipeline.push($(function(line, send) {
      return parser.write(line);
    }));
    pipeline.push(wye);
    return SP.pull(...pipeline);
  };

  //-----------------------------------------------------------------------------------------------------------
  this.new_source_A = async function() {
    var path, pipeline, source;
    path = PATH.join(__dirname, '../wikipedia-latin-greek-taxonomy-vocabulary.raw.html');
    source = (await this.new_html_source(path));
    pipeline = [];
    pipeline.push(source);
    pipeline.push(this.$source_A_filter_table_rows());
    pipeline.push(this.$source_A_filter_empty_table_rows());
    pipeline.push(this.$source_A_condense_texts());
    pipeline.push(this.$source_A_collect_entries());
    return SP.pull(...pipeline);
  };

  //-----------------------------------------------------------------------------------------------------------
  this.new_source_B = async function() {
    var path, pipeline, source;
    path = PATH.join(__dirname, '../epitheta.html');
    source = (await this.new_html_source(path));
    pipeline = [];
    pipeline.push(source);
    pipeline.push(this.$source_B_filter_paragraphs());
    pipeline.push(this.$source_B_condense_texts());
    pipeline.push(this.$source_B_collect_entries());
    return SP.pull(...pipeline);
  };

  //-----------------------------------------------------------------------------------------------------------
  this.new_source_C = function() {
    /* NOTE nothing to do w/ the current project, just a demo to show the limitations of htmlparser2 */
    var pipeline, source;
    source = [
      "<!DOCTYPE html>", // ignored
      "<title>MKTS</title>",
      "<document/>", // wrongly parsed as opening tag w/out closing tag
      "<foo bar baz=42>", // correctly parsed, attribute `bar` set to empty string
      "something",
      "<br/>", // correctly parsed although strictly, self-closing tag are not allowed in HTML5
      "else",
      "</thing>", // silently ignored stray closing tag, therefore unsuitable
      "</foo>",
      "</document>" // closing tag recognized but observe there was no opening tag
    ];
    pipeline = [];
    pipeline.push(source);
    // pipeline.push SP.$split()
    pipeline.push($watch(function(d) {
      return urge(jr(d));
    }));
    pipeline.push(this.$parse_html());
    pipeline.push(SP.$pass());
    return SP.pull(...pipeline);
  };

  //-----------------------------------------------------------------------------------------------------------
  this.__FUTURE__demo = function() {
    return new Promise(async(resolve, reject) => {
      /* this is what it should look like when wyes work as intended */
      var pipeline, source;
      source = (await this.new_source_A());
      pipeline = [];
      pipeline.push(source);
      pipeline.push(SP.new_wye((await this.new_source_B())));
      pipeline.push($show());
      pipeline.push($drain(() => {
        return resolve();
      }));
      SP.pull(...pipeline);
      return null;
    });
  };

  //-----------------------------------------------------------------------------------------------------------
  this.demo = function() {
    return new Promise(async(resolve, reject) => {
      var end_source_C, pipeline_A, pipeline_B, pipeline_C, source_A, source_A_has_ended, source_B, source_B_has_ended, source_C;
      source_A = (await this.new_source_A());
      source_B = (await this.new_source_B());
      source_C = SP.new_push_source();
      source_A_has_ended = false;
      source_B_has_ended = false;
      //.........................................................................................................
      end_source_C = function() {
        if (!(source_A_has_ended && source_B_has_ended)) {
          return;
        }
        return source_C.end();
      };
      //.........................................................................................................
      pipeline_A = [];
      pipeline_A.push(source_A);
      pipeline_A.push($watch(function(d) {
        return source_C.send(d);
      }));
      pipeline_A.push($drain(function() {
        source_A_has_ended = true;
        return end_source_C();
      }));
      //.........................................................................................................
      pipeline_B = [];
      pipeline_B.push(source_B);
      pipeline_B.push($watch(function(d) {
        return source_C.send(d);
      }));
      pipeline_B.push($drain(function() {
        source_B_has_ended = true;
        return end_source_C();
      }));
      //.........................................................................................................
      pipeline_C = [];
      pipeline_C.push(source_C);
      pipeline_C.push($show());
      pipeline_C.push($drain(() => {
        return resolve();
      }));
      //.........................................................................................................
      SP.pull(...pipeline_C);
      SP.pull(...pipeline_A);
      SP.pull(...pipeline_B);
      return null;
    });
  };

  //###########################################################################################################
  if (module === require.main) {
    (async() => {
      return (await this.demo());
    })();
  }

}).call(this);
