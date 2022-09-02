(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function x(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.B=b.prototype}
function na(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.u=this.l=0;this.j=null}
function oa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
na.prototype.s=function(a){this.m=a};
function pa(a,b){a.j={X:b,ta:!0};a.h=a.l||a.u}
na.prototype["return"]=function(a){this.j={"return":a};this.h=this.u};
function z(a,b,c){a.h=c;return{value:b}}
function qa(a){a.l=0;var b=a.j.X;a.j=null;return b}
function ra(a){this.h=new na;this.i=a}
function sa(a,b){oa(a.h);var c=a.h.i;if(c)return ta(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ua(a)}
function ta(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,pa(a.h,g),ua(a)}a.h.i=null;d.call(a.h,f);return ua(a)}
function ua(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,pa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ta)throw b.X;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function va(a){this.next=function(b){oa(a.h);a.h.i?b=ta(a,a.h.i.next,b,a.h.s):(a.h.s(b),b=ua(a));return b};
this["throw"]=function(b){oa(a.h);a.h.i?b=ta(a,a.h.i["throw"],b,a.h.s):(pa(a.h,b),b=ua(a));return b};
this["return"]=function(b){return sa(a,b)};
this[Symbol.iterator]=function(){return this}}
function wa(a,b){var c=new va(new ra(b));ma&&a.prototype&&ma(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:ma?function(b,c){try{return ma(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||ma});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||xa});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ha),reject:g(this.m)}};
b.prototype.ha=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ja(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ga(g):this.o(g)}};
b.prototype.ga=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ka(h,g):this.o(g)};
b.prototype.m=function(g){this.u(2,g)};
b.prototype.o=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ia();this.F()};
b.prototype.ia=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ja=function(g){var h=this.l();g.N(h.resolve,h.reject)};
b.prototype.ka=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,q){return"function"==typeof p?function(v){try{l(p(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(p,q){l=p;m=q});
this.N(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.N=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).N(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){p[v]=w;q--;0==q&&l(p)}}
var p=[],q=0;do p.push(void 0),q++,d(k.value).N(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
function ya(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ya(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ya(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
function za(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return za(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return za(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return za(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&A(h.i,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,v:p}}return{id:l,list:m,index:-1,v:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.v?l.v.value=k:(l.v={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.v),this.h.previous.next=l.v,this.h.previous=l.v,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.v&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.v.previous.next=h.v.next,h.v.next.previous=h.v.previous,h.v.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).v};
e.prototype.get=function(h){return(h=d(this,h).v)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Aa(){}
function Ba(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a){return Object.prototype.hasOwnProperty.call(a,Da)&&a[Da]||(a[Da]=++Ea)}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ha(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ha=Fa:Ha=Ga;return Ha.apply(null,arguments)}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Na=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ia(a){return a}
;function Ja(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ka(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Ka,Error);Ka.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Na(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Oa(a,b){var c=La(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Pa(a){return Array.prototype.concat.apply([],arguments)}
function Qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Sa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ua(a){var b=Va,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Wa(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Xa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Xa(a[c]);return b}
var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var $a;var ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},bb=/&/g,cb=/</g,db=/>/g,eb=/"/g,fb=/'/g,gb=/\x00/g,hb=/[\x00&<>"']/;
function jb(a,b){return a<b?-1:a>b?1:0}
;var H;a:{var kb=B.navigator;if(kb){var lb=kb.userAgent;if(lb){H=lb;break a}}H=""}function I(a){return-1!=H.indexOf(a)}
;function mb(){}
;function nb(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function ob(a){ob[" "](a);return a}
ob[" "]=Aa;var pb=I("Opera"),qb=I("Trident")||I("MSIE"),rb=I("Edge"),sb=I("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),tb=-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge");function ub(){var a=B.document;return a?a.documentMode:void 0}
var vb;a:{var wb="",xb=function(){var a=H;if(sb)return/rv:([^\);]+)(\)|;)/.exec(a);if(rb)return/Edge\/([\d\.]+)/.exec(a);if(qb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(tb)return/WebKit\/(\S+)/.exec(a);if(pb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
xb&&(wb=xb?xb[1]:"");if(qb){var yb=ub();if(null!=yb&&yb>parseFloat(wb)){vb=String(yb);break a}}vb=wb}var zb=vb,Ab={},Bb;if(B.document&&qb){var Cb=ub();Bb=Cb?Cb:parseInt(zb,10)||void 0}else Bb=void 0;var Db=Bb;var Eb=I("Firefox")||I("FxiOS"),Fb=nb()||I("iPod"),Gb=I("iPad"),Hb=I("Safari")&&!((I("Chrome")||I("CriOS"))&&!I("Edge")||I("Coast")||I("Opera")||I("Edge")||I("Edg/")||I("OPR")||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))&&!(nb()||I("iPad")||I("iPod"));var Ib={},Jb=null;var J=window;function Kb(a,b){this.width=a;this.height=b}
r=Kb.prototype;r.clone=function(){return new Kb(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Lb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Mb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Nb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ob(a){return a?decodeURI(a):a}
function K(a){return Ob(a.match(Nb)[3]||null)}
function Pb(a){var b=a.match(Nb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Qb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Qb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Rb(a){var b=[],c;for(c in a)Qb(c,a[c],b);return b.join("&")}
var Sb=/#|$/;function Tb(a){var b=Ub;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Vb(){var a=[];Tb(function(b){a.push(b)});
return a}
var Ub={Aa:"allow-forms",Ba:"allow-modals",Ca:"allow-orientation-lock",Da:"allow-pointer-lock",Ea:"allow-popups",Fa:"allow-popups-to-escape-sandbox",Ga:"allow-presentation",Ha:"allow-same-origin",Ia:"allow-scripts",Ja:"allow-top-navigation",Ka:"allow-top-navigation-by-user-activation"},Wb=Sa(function(){return Vb()});
function Xb(){var a=Lb(),b={};G(Wb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Yb(){this.j=this.j;this.m=this.m}
Yb.prototype.j=!1;Yb.prototype.dispose=function(){this.j||(this.j=!0,this.K())};
Yb.prototype.K=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var Zb={};function $b(a){if(a!==Zb)throw Error("Bad secret");}
;function ac(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var bc;function cc(){}
function dc(a,b){$b(b);this.h=a}
x(dc,cc);dc.prototype.toString=function(){return this.h.toString()};
var ec=null===(bc=ac())||void 0===bc?void 0:bc.emptyHTML;new dc(null!==ec&&void 0!==ec?ec:"",Zb);var fc;function gc(){}
function hc(a,b){$b(b);this.h=a}
x(hc,gc);hc.prototype.toString=function(){return this.h.toString()};
var ic=null===(fc=ac())||void 0===fc?void 0:fc.emptyScript;new hc(null!==ic&&void 0!==ic?ic:"",Zb);function jc(){}
function kc(a,b){$b(b);this.h=a}
x(kc,jc);kc.prototype.toString=function(){return this.h};new kc("about:blank",Zb);new kc("about:invalid#zTSz",Zb);function lc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=mc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,nc[c])c=nc[c];else{c=String(c);if(!nc[c]){var f=/function\s+([^\(]+)/m.exec(c);nc[c]=f?f[1]:"[Anonymous]"}c=nc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function mc(a,b){b||(b={});b[oc(a)]=!0;var c=a.stack||"",d=a.Oa;d&&!b[oc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=mc(d,b));return c}
function oc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var nc={};function pc(a){this.h=a||{cookie:""}}
r=pc.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Xa;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ab(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.h.cookie};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ab(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var qc=new pc("undefined"==typeof document?null:document);var rc=(new Date).getTime();function sc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function tc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],y=e[3],N=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ea=y^v&(w^y);var ib=1518500249}else ea=v^w^y,ib=1859775393;else 60>q?(ea=v&w|y&(v|w),ib=2400959708):(ea=v^w^y,ib=3395469782);ea=((n<<5|n>>>27)&4294967295)+ea+N+ib+p[q]&4294967295;N=y;y=w;w=(v<<30|v>>>2)&4294967295;v=n;n=ea}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+N&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}p||(p=n.length);q=0;if(0==l)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var v=24;0<=v;v-=8)n[p++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,la:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function uc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),vc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=vc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function vc(a){var b=tc();b.update(a);return b.la().toLowerCase()}
;function wc(a){var b=sc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new pc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new pc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,uc(sc(d),
c,a||null)].join(" "):null}return null}
;function xc(){this.i=[];this.h=-1}
xc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
xc.prototype.get=function(a){return!!this.i[a]};
function yc(a){-1==a.h&&(a.h=Ma(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function zc(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
zc.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ac(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Bc(a){B.setTimeout(function(){throw a;},0)}
var Cc;function Dc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Lb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ha(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.V;c.V=null;e()}};
return function(e){d.next={V:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Ec(){this.i=this.h=null}
Ec.prototype.add=function(a,b){var c=Fc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ec.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Fc=new zc(function(){return new Gc},function(a){return a.reset()});
function Gc(){this.next=this.scope=this.h=null}
Gc.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Gc.prototype.reset=function(){this.next=this.scope=this.h=null};function Hc(a,b){Ic||Jc();Kc||(Ic(),Kc=!0);Lc.add(a,b)}
var Ic;function Jc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Ic=function(){a.then(Mc)}}else Ic=function(){var b=Mc;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!I("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Cc||(Cc=Dc()),Cc(b)):B.setImmediate(b)}}
var Kc=!1,Lc=new Ec;function Mc(){for(var a;a=Lc.remove();){try{a.h.call(a.scope)}catch(b){Bc(b)}Ac(Fc,a)}Kc=!1}
;function Nc(){this.i=-1}
;function Oc(){this.i=64;this.h=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(Oc,Nc);Oc.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Pc(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Oc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Pc(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Pc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Pc(this,e);f=0;break}}this.j=f;this.m+=b}};
Oc.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Pc(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Qc="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Rc(){}
Rc.prototype.next=function(){throw Qc;};
Rc.prototype.C=function(){return this};
function Sc(a){if(a instanceof Rc)return a;if("function"==typeof a.C)return a.C(!1);if(Ba(a)){var b=0,c=new Rc;c.next=function(){for(;;){if(b>=a.length)throw Qc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Tc(a,b){if(Ba(a))try{G(a,b,void 0)}catch(c){if(c!==Qc)throw c;}else{a=Sc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Qc)throw c;}}}
function Uc(a){if(Ba(a))return Qa(a);a=Sc(a);var b=[];Tc(a,function(c){b.push(c)});
return b}
;function Vc(a,b){this.j={};this.h=[];this.l=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vc)for(c=Wc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Wc(a){Xc(a);return a.h.concat()}
r=Vc.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Yc;Xc(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Yc(a,b){return a===b}
r.isEmpty=function(){return 0==this.i};
r.clear=function(){this.j={};this.l=this.i=this.h.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.l++,this.h.length>2*this.i&&Xc(this),!0):!1};
function Xc(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.l++);this.j[a]=b};
r.forEach=function(a,b){for(var c=Wc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Vc(this)};
r.C=function(a){Xc(this);var b=0,c=this.l,d=this,e=new Rc;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Qc;var f=d.h[b++];return a?f:d.j[f]};
return e};var Zc=!qb||9<=Number(Db),$c;
if($c=qb){var ad;if(Object.prototype.hasOwnProperty.call(Ab,"9"))ad=Ab["9"];else{for(var bd=0,cd=ab(String(zb)).split("."),dd=ab("9").split("."),ed=Math.max(cd.length,dd.length),fd=0;0==bd&&fd<ed;fd++){var gd=cd[fd]||"",hd=dd[fd]||"";do{var id=/(\d*)(\D*)(.*)/.exec(gd)||["","","",""],jd=/(\d*)(\D*)(.*)/.exec(hd)||["","","",""];if(0==id[0].length&&0==jd[0].length)break;bd=jb(0==id[1].length?0:parseInt(id[1],10),0==jd[1].length?0:parseInt(jd[1],10))||jb(0==id[2].length,0==jd[2].length)||jb(id[2],jd[2]);
gd=id[3];hd=jd[3]}while(0==bd)}ad=Ab["9"]=0<=bd}$c=!ad}var kd=$c,ld=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Aa,b),B.removeEventListener("test",Aa,b)}catch(c){}return a}();function md(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
md.prototype.stopPropagation=function(){this.i=!0};
md.prototype.preventDefault=function(){this.defaultPrevented=!0};function nd(a,b){md.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
F(nd,md);var od={2:"touch",3:"pen",4:"mouse"};
nd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(sb){a:{try{ob(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:od[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&this.preventDefault()};
nd.prototype.stopPropagation=function(){nd.B.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
nd.prototype.preventDefault=function(){nd.B.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,kd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var pd="closure_listenable_"+(1E6*Math.random()|0),qd=0;function rd(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.O=e;this.key=++qd;this.J=this.M=!1}
function sd(a){a.J=!0;a.listener=null;a.h=null;a.src=null;a.O=null}
;function td(a){this.src=a;this.listeners={};this.h=0}
td.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ud(a,b,d,e);-1<g?(b=a[g],c||(b.M=!1)):(b=new rd(b,this.src,f,!!d,e),b.M=c,a.push(b));return b};
td.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ud(e,b,c,d);return-1<b?(sd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function vd(a,b){var c=b.type;c in a.listeners&&Oa(a.listeners[c],b)&&(sd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ud(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.J&&f.listener==b&&f.capture==!!c&&f.O==d)return e}return-1}
;var wd="closure_lm_"+(1E6*Math.random()|0),xd={},yd=0;function zd(a,b,c,d,e){if(d&&d.once)Ad(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)zd(a,b[f],c,d,e);else c=Bd(c),a&&a[pd]?Cd(a,b,c,D(d)?!!d.capture:!!d,e):Dd(a,b,c,!1,d,e)}
function Dd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=Ed(a);h||(a[wd]=h=new td(a));c=h.add(b,c,d,g,f);if(!c.h){d=Fd();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ld||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Gd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");yd++}}
function Fd(){var a=Hd,b=Zc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ad(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ad(a,b[f],c,d,e);else c=Bd(c),a&&a[pd]?a.h.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):Dd(a,b,c,!0,d,e)}
function Id(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Id(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=Bd(c),a&&a[pd])?a.h.remove(String(b),c,d,e):a&&(a=Ed(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ud(b,c,d,e)),(c=-1<a?b[a]:null)&&Jd(c))}
function Jd(a){if("number"!==typeof a&&a&&!a.J){var b=a.src;if(b&&b[pd])vd(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Gd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);yd--;(c=Ed(b))?(vd(c,a),0==c.h&&(c.src=null,b[wd]=null)):sd(a)}}}
function Gd(a){return a in xd?xd[a]:xd[a]="on"+a}
function Kd(a,b,c,d){var e=!0;if(a=Ed(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.J&&(f=Ld(f,d),e=e&&!1!==f)}return e}
function Ld(a,b){var c=a.listener,d=a.O||a.src;a.M&&Jd(a);return c.call(d,b)}
function Hd(a,b){if(a.J)return!0;if(!Zc){var c=b||C("window.event"),d=new nd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Kd(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Kd(c[g],f,!1,d),e=e&&h}return e}return Ld(a,new nd(b,this))}
function Ed(a){a=a[wd];return a instanceof td?a:null}
var Md="__closure_events_fn_"+(1E9*Math.random()>>>0);function Bd(a){if("function"===typeof a)return a;a[Md]||(a[Md]=function(b){return a.handleEvent(b)});
return a[Md]}
;function L(){Yb.call(this);this.h=new td(this);this.F=this;this.o=null}
F(L,Yb);L.prototype[pd]=!0;L.prototype.addEventListener=function(a,b,c,d){zd(this,a,b,c,d)};
L.prototype.removeEventListener=function(a,b,c,d){Id(this,a,b,c,d)};
L.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.F;d=a.type||a;if("string"===typeof a)a=new md(a,b);else if(a instanceof md)a.target=a.target||b;else{var e=a;a=new md(d,b);Za(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.h=c[f];e=Nd(g,d,!0,a)&&e}a.i||(g=a.h=b,e=Nd(g,d,!0,a)&&e,a.i||(e=Nd(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.h=c[f],e=Nd(g,d,!1,a)&&e;return e};
L.prototype.K=function(){L.B.K.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,sd(d[e]);delete a.listeners[c];a.h--}}this.o=null};
function Cd(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Nd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.J&&g.capture==c){var h=g.listener,k=g.O||g.src;g.M&&vd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var Od=B.JSON.stringify;function M(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Aa)try{var b=this;a.call(void 0,function(c){Pd(b,2,c)},function(c){Pd(b,3,c)})}catch(c){Pd(this,3,c)}}
function Qd(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Qd.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Rd=new zc(function(){return new Qd},function(a){a.reset()});
function Sd(a,b,c){var d=Rd.get();d.i=a;d.onRejected=b;d.context=c;return d}
M.prototype.then=function(a,b,c){return Td(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
M.prototype.$goog_Thenable=!0;M.prototype.cancel=function(a){if(0==this.h){var b=new Ud(a);Hc(function(){Vd(this,b)},this)}};
function Vd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Vd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Wd(c),Xd(c,e,3,b)))}a.j=null}else Pd(a,3,b)}
function Yd(a,b){a.i||2!=a.h&&3!=a.h||Zd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Td(a,b,c,d){var e=Sd(null,null,null);e.h=new M(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ud?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Yd(a,e);return e.h}
M.prototype.F=function(a){this.h=0;Pd(this,2,a)};
M.prototype.H=function(a){this.h=0;Pd(this,3,a)};
function Pd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof M){Yd(d,Sd(e||Aa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){$d(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,Zd(a),3!=b||c instanceof Ud||ae(a,c))}}
function $d(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Zd(a){a.o||(a.o=!0,Hc(a.u,a))}
function Wd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
M.prototype.u=function(){for(var a;a=Wd(this);)Xd(this,a,this.h,this.s);this.o=!1};
function Xd(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,be(b,c,d);else try{b.j?b.i.call(b.context):be(b,c,d)}catch(e){ce.call(null,e)}Ac(Rd,b)}
function be(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ae(a,b){a.m=!0;Hc(function(){a.m&&ce.call(null,b)})}
var ce=Bc;function Ud(a){Ka.call(this,a)}
F(Ud,Ka);Ud.prototype.name="cancel";function O(a){Yb.call(this);this.s=1;this.l=[];this.o=0;this.h=[];this.i={};this.u=!!a}
F(O,Yb);r=O.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
function de(a,b,c){var d=ee;if(a=d.i[a]){var e=d.h;(a=Na(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.L(a)}}
r.L=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.h[a+1]=Aa):(c&&Oa(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.I=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];fe(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.L(c)}}return 0!=e}return!1};
function fe(a,b,c){Hc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(G(b,this.L,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.K=function(){O.B.K.call(this);this.clear();this.l.length=0};function ge(a){this.h=a}
ge.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Od(b))};
ge.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ge.prototype.remove=function(a){this.h.remove(a)};function he(a){this.h=a}
F(he,ge);function ie(a){this.data=a}
function je(a){return void 0===a||a instanceof ie?a:new ie(a)}
he.prototype.set=function(a,b){he.B.set.call(this,a,je(b))};
he.prototype.i=function(a){a=he.B.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
he.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ke(a){this.h=a}
F(ke,he);ke.prototype.set=function(a,b,c){if(b=je(b)){if(c){if(c<Date.now()){ke.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ke.B.set.call(this,a,b)};
ke.prototype.i=function(a){var b=ke.B.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ke.prototype.remove.call(this,a);else return b}};function le(){}
;function me(){}
F(me,le);me.prototype.clear=function(){var a=Uc(this.C(!0)),b=this;G(a,function(c){b.remove(c)})};function ne(a){this.h=a}
F(ne,me);r=ne.prototype;r.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeItem(a)};
r.C=function(a){var b=0,c=this.h,d=new Rc;d.next=function(){if(b>=c.length)throw Qc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.h.clear()};
r.key=function(a){return this.h.key(a)};function oe(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(oe,ne);function pe(a,b){this.i=a;this.h=null;if(qb&&!(9<=Number(Db))){qe||(qe=new Vc);this.h=qe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),qe.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(pe,me);var re={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},qe=null;function se(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return re[b]})}
r=pe.prototype;r.isAvailable=function(){return!!this.h};
r.set=function(a,b){this.h.setAttribute(se(a),b);te(this)};
r.get=function(a){a=this.h.getAttribute(se(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.h.removeAttribute(se(a));te(this)};
r.C=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Rc;d.next=function(){if(b>=c.length)throw Qc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);te(this)};
function te(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ue(a,b){this.i=a;this.h=b+"::"}
F(ue,me);ue.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ue.prototype.get=function(a){return this.i.get(this.h+a)};
ue.prototype.remove=function(a){this.i.remove(this.h+a)};
ue.prototype.C=function(a){var b=this.i.C(!0),c=this,d=new Rc;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};var ve=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",ve);function we(a){var b=arguments;1<b.length?ve[b[0]]=b[1]:1===b.length&&Object.assign(ve,b[0])}
function P(a,b){return a in ve?ve[a]:b}
;var xe=[];function ye(a){xe.forEach(function(b){return b(a)})}
function ze(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ae(b),ye(b)}}:a}
function Ae(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),we("ERRORS",b))}
function Be(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),we("ERRORS",b))}
;var Ce=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Ce});var De={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ee(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in De||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Ee.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ee.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ee.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Va=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Va);var Fe=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Fe);
function Ge(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ua(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&Wa(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function He(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in Va){var c=Va[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ie()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Va[b]}}))}
var Ie=Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Je(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Ge(a,b,c,d);if(!e){e=++Fe.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ee(h);if(!Mb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ee(h);
h.currentTarget=a;return c.call(a,h)};
g=ze(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ie()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Va[e]=[a,b,c,g,d]}}}
;function Ke(a,b){"function"===typeof a&&(a=ze(a));return window.setTimeout(a,b)}
function Le(a){"function"===typeof a&&(a=ze(a));return window.setInterval(a,250)}
;var Me=/^[\w.]*$/,Ne={q:!0,search_query:!0};function Oe(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=Pe(g[0]||""),k=Pe(g[1]||"");h in d?Array.isArray(d[h])?Ra(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(p){var l=p,m=g[0],n=String(Oe);l.args=[{key:m,value:g[1],query:a,method:Qe==n?"unchanged":n}];Ne.hasOwnProperty(m)||("ReferenceError"===l.name?Be(l):Ae(l))}}return d}
var Qe=String(Oe);function Re(a){var b=[];Ta(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Se(a){"?"==a.charAt(0)&&(a=a.substr(1));return Oe(a,"&")}
function Te(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Se(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Rb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Pe(a){return a&&a.match(Me)?a:decodeURIComponent(a.replace(/\+/g," "))}
;var Ue={};function Ve(a){return Ue[a]||(Ue[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var We={},Xe=[],ee=new O,Ye={};function Ze(){for(var a=u(Xe),b=a.next();!b.done;b=a.next())b=b.value,b()}
function $e(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ve(b)]:a.getAttribute("data-"+b):null;return c}
function af(a,b){ee.I.apply(ee,arguments)}
;function bf(a){this.i=a||{};this.j=this.h=!1;a=document.getElementById("www-widgetapi-script");if(this.h=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function Q(a,b){for(var c=[a.i,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function cf(a,b,c){df||(df={},Je(window,"message",Ha(a.l,a)));df[c]=b}
bf.prototype.l=function(a){if(a.origin==Q(this,"host")||a.origin==Q(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.j=!0;this.h||0!=a.origin.indexOf("https:")||(this.h=!0);if(a=df[b.id])a.u=!0,a.u&&(G(a.s,a.U,a),a.s.length=0),a.ea(b)}};
var df=null;function R(a){a=ef(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ff(a,b){var c=ef(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function ef(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function gf(){}
function hf(a,b){return jf(a,1,b)}
;function kf(){gf.apply(this,arguments)}
x(kf,gf);function jf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ke(a,c||0)}
function lf(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
kf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
kf.h=void 0;kf.i=function(){kf.h||(kf.h=new kf)};
kf.i();var mf=B.ytPubsubPubsubInstance||new O,nf=B.ytPubsubPubsubSubscribedKeys||{},of=B.ytPubsubPubsubTopicToKeys||{},pf=B.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.L;O.prototype.publish=O.prototype.I;O.prototype.clear=O.prototype.clear;E("ytPubsubPubsubInstance",mf);E("ytPubsubPubsubTopicToKeys",of);E("ytPubsubPubsubIsSynchronous",pf);E("ytPubsubPubsubSubscribedKeys",nf);var S=window,T=S.ytcsi&&S.ytcsi.now?S.ytcsi.now:S.performance&&S.performance.timing&&S.performance.now&&S.performance.timing.navigationStart?function(){return S.performance.timing.navigationStart+S.performance.now()}:function(){return(new Date).getTime()};var qf=ff("initial_gel_batch_timeout",1E3),rf=Math.pow(2,16)-1,sf=null,tf=0,uf=void 0,vf=0,wf=0,xf=0,yf=!0,zf=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",zf);var Af=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Af);function Bf(a){a=void 0===a?!1:a;return new M(function(b){window.clearTimeout(vf);window.clearTimeout(wf);wf=0;uf&&uf.isReady()?(Cf(b,a),zf.clear()):(Df(),b())})}
function Df(){R("web_gel_timeout_cap")&&!wf&&(wf=Ke(Bf,6E4));window.clearTimeout(vf);var a=P("LOGGING_BATCH_TIMEOUT",ff("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&yf&&(a=qf);vf=Ke(Bf,a)}
function Cf(a,b){var c=uf;b=void 0===b?!1:b;for(var d=Math.round(T()),e=zf.size,f=u(zf),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Xa({context:Ef(c.h||Ff())});h.events=k;(k=Af[g])&&Gf(h,g,k);delete Af[g];Hf(h,d);If(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();tf=Math.round(T()-d)},
onError:function(){e--;e||a()},
za:b});yf=!1}}
function Hf(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*rf/2));d++;d>rf&&(d=1);we("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;sf&&tf&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:sf,roundtripMs:String(tf)});sf=c;tf=0}}
function Gf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Jf=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Jf);function Kf(a){var b=Lf;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=rc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(N){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?J:g;try{var h=g.history.length}catch(N){h=0}e.u_his=h;e.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(e.u_h=J.screen.height,e.u_w=J.screen.width,
e.u_ah=J.screen.availHeight,e.u_aw=J.screen.availWidth,e.u_cd=J.screen.colorDepth);J.navigator&&J.navigator.plugins&&(e.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(e.u_nmime=J.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(N){}try{var m=h.outerWidth;var n=h.outerHeight}catch(N){}try{var p=h.innerWidth;var q=h.innerHeight}catch(N){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,p,q];
l=b.h.top;try{var v=(l||window).document,w="CSS1Compat"==v.compatMode?v.documentElement:v.body;var y=(new Kb(w.clientWidth,w.clientHeight)).round()}catch(N){y=new Kb(-12245933,-12245933)}v=y;y={};w=new xc;B.SVGElement&&B.document.createElementNS&&w.set(0);l=Xb();l["allow-top-navigation-by-user-activation"]&&w.set(1);l["allow-popups-to-escape-sandbox"]&&w.set(2);B.crypto&&B.crypto.subtle&&w.set(3);B.TextDecoder&&B.TextEncoder&&w.set(4);w=yc(w);y.bc=w;y.bih=v.height;y.biw=v.width;y.brdim=k.join();b=
b.i;b=(y.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,y.wgl=!!J.WebGLRenderingContext,y);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Lf=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Re(Kf(a))});var Mf="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Nf(){if(!Mf)return null;var a=Mf();return"open"in a?a:null}
;var Of={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Pf="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Qf=!1;
function Rf(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Nb)[1]||null,e=K(a);d&&e?(d=c,c=a.match(Nb),d=d.match(Nb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(c)==e&&(Number(c.match(Nb)[4]||null)||null)==(Number(a.match(Nb)[4]||null)||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in Of)e=P(Of[f]),!e||!c&&K(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!K(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!K(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!K(a))b["X-YouTube-Ad-Signals"]=Re(Kf(void 0));return b}
function Sf(a){var b=window.location.search,c=K(a),d=Ob(a.match(Nb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Se(b),f={};G(Pf,function(g){e[g]&&(f[g]=e[g])});
return Te(a,f||{},!1)}
function Tf(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Uf(a,b);var d=Vf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.S&&b.S.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=Ke(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||B))},b.timeout))}else Wf(a,b)}
function Wf(a,b){var c=b.format||"JSON";a=Uf(a,b);var d=Vf(a,b),e=!1,f=Xf(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,p=500<=k.status&&600>k.status;if(l||n||p)m=Yf(a,c,k,b.Pa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.S&&b.S.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.P&&0<b.timeout){var g=b.P;var h=Ke(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Uf(a,b){b.Ta&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.ya;d&&(d[c]&&delete d[c],a=Te(a,d||{},!0));return a}
function Vf(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Sa||K(a)&&!b.withCredentials&&K(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Se(e),Za(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):Rb(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Qf&&c&&"POST"!=b.method&&
(Qf=!0,Ae(Error("AJAX request with postData should use POST")));return e}
function Yf(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Be(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Zf(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=$f(g)})}d&&ag(e);
return e}
function ag(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===$a){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ia,createScript:Ia,createScriptURL:Ia})}catch(g){B.console&&B.console.error(g.message)}$a=e}else $a=e}(e=$a)&&e.createHTML(d);a[c]=new mb}else ag(a[b])}}
function Zf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function $f(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Xf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ze(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Nf();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Sf(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Rf(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function bg(){return"INNERTUBE_API_KEY"in ve&&"INNERTUBE_API_VERSION"in ve}
function Ff(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),ma:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:P("INNERTUBE_CONTEXT_HL",void 0),oa:P("INNERTUBE_CONTEXT_GL",void 0),qa:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ef(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&R("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(Se(P("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function cg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ma||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().La:b=wc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function dg(a){a=Object.assign({},a);delete a.Authorization;var b=wc();if(b){var c=new Oc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Jb){Jb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Ib[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Jb[k]&&(Jb[k]=h)}}}c=Ib[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function eg(a){var b=new oe;(b=b.isAvailable()?a?new ue(b,a):b:null)||(a=new pe(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new ke(a):null;this.i=document.domain||window.location.hostname}
eg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Od(b))}catch(f){return}else e=escape(b);b=this.i;qc.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
eg.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=qc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
eg.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;qc.remove(""+a,"/",void 0===b?"youtube.com":b)};var fg;function gg(){fg||(fg=new eg("yt.innertube"));return fg}
function hg(a,b,c,d){if(d)return null;d=gg().get("nextId",!0)||1;var e=gg().get("requests",!0)||{};e[d]={method:a,request:b,authState:dg(c),requestTime:Math.round(T())};gg().set("nextId",d+1,86400,!0);gg().set("requests",e,86400,!0);return d}
function ig(a){var b=gg().get("requests",!0)||{};delete b[a];gg().set("requests",b,86400,!0)}
function jg(a){var b=gg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=dg(cg(!1));Wa(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),If(a,d.method,e,{}));delete b[c]}}gg().set("requests",b,86400,!0)}}
;var kg=C("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.L;O.prototype.publish=O.prototype.I;O.prototype.clear=O.prototype.clear;E("ytPubsub2Pubsub2Instance",kg);E("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);var lg=Fb||Gb;var mg=[],ng=!1;function og(a,b){ng||(mg.push({type:"EVENT",eventType:a,payload:b}),10<mg.length&&mg.shift())}
;function U(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
x(U,Error);var pg={},qg=(pg.AUTH_INVALID="No user identifier specified.",pg.EXPLICIT_ABORT="Transaction was explicitly aborted.",pg.IDB_NOT_SUPPORTED="IndexedDB is not supported.",pg.MISSING_OBJECT_STORE="Object store not created.",pg.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",pg.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",pg.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",pg);
function V(a,b,c){b=void 0===b?{}:b;c=void 0===c?qg[a]:c;U.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,V.prototype);ng||(mg.push({type:"ERROR",payload:this}),10<mg.length&&mg.shift())}
x(V,U);function rg(a){V.call(this,"MISSING_OBJECT_STORE",{Ua:a},qg.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,rg.prototype)}
x(rg,V);function sg(a){if(!a)throw Error();throw a;}
function tg(a){return a}
function W(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
W.all=function(a){return new W(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={G:0};f.G<a.length;f={G:f.G},++f.G)ug(W.resolve(a[f.G]).then(function(g){return function(h){d[g.G]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
W.resolve=function(a){return new W(function(b,c){a instanceof W?a.then(b,c):b(a)})};
W.reject=function(a){return new W(function(b,c){c(a)})};
W.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:tg,e=null!==b&&void 0!==b?b:sg;return new W(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){vg(c,c,d,f,g)}),c.onRejected.push(function(){wg(c,c,e,f,g)})):"FULFILLED"===c.state.status?vg(c,c,d,f,g):"REJECTED"===c.state.status&&wg(c,c,e,f,g)})};
function ug(a,b){a.then(void 0,b)}
function vg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?xg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?xg(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?xg(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yg(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zg(a){return new Promise(function(b,c){yg(a,b,c)})}
function X(a){return new W(function(b,c){yg(a,b,c)})}
;function Ag(a,b){return new W(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Bg(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
r=Bg.prototype;r.add=function(a,b,c){return Cg(this,[a],"readwrite",function(d){return Dg(d,a).add(b,c)})};
r.clear=function(a){return Cg(this,[a],"readwrite",function(b){return Dg(b,a).clear()})};
r.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Cg(this,[a],"readonly",function(c){return Dg(c,a).count(b)})};
r["delete"]=function(a,b){return Cg(this,[a],"readwrite",function(c){return Dg(c,a)["delete"](b)})};
r.get=function(a,b){return Cg(this,[a],"readwrite",function(c){return Dg(c,a).get(b)})};
function Cg(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.h.transaction(b,c);d=Eg(e,d)["catch"](function(f){var g=a.h.name,h=b.join();f instanceof V||f instanceof U||("QuotaExceededError"===f.name?f=new V("QUOTA_EXCEEDED",{objectStoreNames:h,dbName:g}):Hb&&"UnknownError"===f.name?f=new V("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:h,dbName:g}):(Object.setPrototypeOf(f,U.prototype),f.args=[{name:"IdbError",Wa:f.name,dbName:g,objectStoreNames:h}]));throw f;});
Fg(a,d,b.join(),c);return d}
function Fg(a,b,c,d){Ja(a,function f(){var g,h,k=this,l,m,n;return wa(f,function(p){if(1==p.h)return g=Math.round(T()),p.l=2,z(p,b,4);2!=p.h?(h=Math.round(T()),Gg(k,!0,c,h-g),p.h=0,p.l=0):(l=qa(p),m=Math.round(T()),n=m-g,l instanceof V&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&og("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof V&&"UNKNOWN_ABORT"===l.type&&(og("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0),Gg(k,!1,c,n),p.h=0)})})}
function Gg(a,b,c,d){og("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function Hg(a){this.h=a}
r=Hg.prototype;r.add=function(a,b){return X(this.h.add(a,b))};
r.clear=function(){return X(this.h.clear()).then(function(){})};
r.count=function(a){return X(this.h.count(a))};
function Ig(a,b){return Jg(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Ig(this,a):X(this.h["delete"](a))};
r.get=function(a){return X(this.h.get(a))};
r.index=function(a){return new Kg(this.h.index(a))};
r.getName=function(){return this.h.name};
function Jg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Lg(a).then(function(d){return Ag(d,c)})}
function Mg(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=V;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Eg(a,b){var c=new Mg(a);return Ng(c,b)}
function Ng(a,b){var c=new Promise(function(d,e){ug(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Mg.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new V("EXPLICIT_ABORT");};
Mg.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function Dg(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new Hg(c),a.i.set(c,d));return d}
function Kg(a){this.h=a}
Kg.prototype.count=function(a){return X(this.h.count(a))};
Kg.prototype["delete"]=function(a){return Og(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Kg.prototype.get=function(a){return X(this.h.get(a))};
Kg.prototype.getKey=function(a){return X(this.h.getKey(a))};
function Og(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Lg(a).then(function(d){return Ag(d,c)})}
function Pg(a,b){this.request=a;this.cursor=b}
function Lg(a){return X(a).then(function(b){return null===b?null:new Pg(a,b)})}
r=Pg.prototype;r.advance=function(a){this.cursor.advance(a);return Lg(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Lg(this.request)};
r["delete"]=function(){return X(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return X(this.cursor.update(a))};function Qg(a,b,c){return Ja(this,function e(){var f,g,h,k,l,m,n,p,q,v;return wa(e,function(w){if(1==w.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.xa,m=g.upgrade,n=g.closed,q=function(){p||(p=new Bg(f.result,{closed:n}));return p},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&og("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:a});var N=q(),ea=new Mg(f.transaction);m&&m(N,y.oldVersion,y.newVersion,ea)}),h&&f.addEventListener("blocked",function(){h()}),z(w,zg(f),2);
v=w.m;k&&v.addEventListener("versionchange",function(){k(q())});
v.addEventListener("close",function(){og("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:v.version});l&&l()});
return w["return"](q())})})}
function Rg(a,b){b=void 0===b?{}:b;return Ja(this,function d(){var e,f,g;return wa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,zg(e),0)})})}
;function Sg(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Tg(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Qg(a,b,c)}
Sg.prototype["delete"]=function(a){a=void 0===a?{}:a;return Rg(this.name,a)};
Sg.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,xa:c,upgrade:this.options.upgrade},e=function(){return Ja(a,function g(){var h=this,k,l,m;return wa(g,function(n){switch(n.h){case 1:return n.l=2,z(n,Tg(h.name,h.options.version,d),4);case 4:k=n.m;if(!Eb){n.h=5;break}a:{var p=u(Object.keys(h.options.wa));for(var q=p.next();!q.done;q=p.next())if(q=q.value,!k.h.objectStoreNames.contains(q)){p=q;break a}p=void 0}l=p;if(void 0===l){n.h=5;break}if(!Eb||h.i){n.h=7;break}h.i=!0;return z(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new rg(l);
case 5:return n["return"](k);case 2:m=qa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](Tg(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Ug=new Sg({wa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Vg(a){return Ja(this,function c(){var d;return wa(c,function(e){if(1==e.h)return z(e,Ug.open(),2);d=e.m;return e["return"](Cg(d,["databases"],"readwrite",function(f){var g=Dg(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return X(g.h.put(a,void 0)).then(function(){})})}))})})}
function Wg(){return Ja(this,function b(){var c;return wa(b,function(d){if(1==d.h)return z(d,Ug.open(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Xg;
function Yg(){return Ja(this,function b(){var c,d;return wa(b,function(e){switch(e.h){case 1:var f;if(f=lg)f=/WebKit\/([0-9]+)/.exec(H),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(H),f=!(f&&602<=parseInt(f[1],10)));if(f&&!R("ytidb_allow_on_ios_safari_v8_and_v9")||rb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(e,Vg(d),4);case 4:return z(e,Wg(),5);case 5:return e["return"](!0);case 2:return qa(e),e["return"](!1)}})})}
function Zg(){if(void 0!==Xg)return Xg;ng=!0;return Xg=Yg().then(function(a){ng=!1;return a})}
;var $g;function ah(){$g||($g=new eg("yt.offline"));return $g}
;function bh(){L.call(this);this.s=this.u=this.i=!1;this.l=ch();dh(this);eh(this)}
x(bh,L);function ch(){var a=window.navigator.onLine;return void 0===a?!0:a}
function eh(a){window.addEventListener("online",function(){a.l=!0;a.i&&a.dispatchEvent("ytnetworkstatus-online");fh(a);if(a.s&&R("offline_error_handling")){var b=ah().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Ae(d)}ah().set("errors",{},2592E3,!0)}}})}
function dh(a){window.addEventListener("offline",function(){a.l=!1;a.i&&a.dispatchEvent("ytnetworkstatus-offline");fh(a)})}
function fh(a){a.u&&(Be(new U("NetworkStatusManager state did not match poll",T()-0)),a.u=!1)}
;function gh(a){a=void 0===a?{}:a;L.call(this);var b=this;this.l=this.u=0;bh.h||(bh.h=new bh);this.i=bh.h;this.i.i=!0;a.ua&&(this.i.s=!0);a.R?(this.R=a.R,Cd(this.i,"ytnetworkstatus-online",function(){hh(b,"publicytnetworkstatus-online")}),Cd(this.i,"ytnetworkstatus-offline",function(){hh(b,"publicytnetworkstatus-offline")})):(Cd(this.i,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),Cd(this.i,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
x(gh,L);function hh(a,b){a.R?a.l?(lf(a.u),a.u=hf(function(){a.s!==b&&(a.dispatchEvent(b),a.s=b,a.l=T())},a.R-(T()-a.l))):(a.dispatchEvent(b),a.s=b,a.l=T()):a.dispatchEvent(b)}
;var ih;function jh(a,b){b=void 0===b?{}:b;Zg().then(function(){ih||(ih=new gh({ua:!0}));ih.i.l!==ch()&&Be(new U("NetworkStatusManager isOnline does not match window status"));Wf(a,b)})}
function kh(a,b){b=void 0===b?{}:b;Zg().then(function(){Wf(a,b)})}
;function lh(a){var b=this;this.h=null;a?this.h=a:bg()&&(this.h=Ff());jf(function(){jg(b)},0,5E3)}
lh.prototype.isReady=function(){!this.h&&bg()&&(this.h=Ff());return!!this.h};
function If(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Be(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new U("innertube xhrclient not ready",b,c,d);Ae(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",A:c,da:"JSON",P:function(){d.P()},
ba:d.P,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
aa:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
Va:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.qa)&&(g=e);var h=a.h.sa||!1,k=cg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.ra&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var m=Te(""+g+e,l||{},!0);Zg().then(function(n){if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(R("networkless_gel")&&!n||!R("networkless_gel"))var p=hg(b,
c,k,h);if(p){var q=f.onSuccess,v=f.aa;f.onSuccess=function(w,y){ig(p);q(w,y)};
c.aa=function(w,y){ig(p);v(w,y)}}}try{R("use_fetch_for_op_xhr")?Tf(m,f):R("networkless_gel")&&d.retry?(f.method="POST",!d.za&&R("nwl_send_fast_on_unload")?kh(m,f):jh(m,f)):(f.method="POST",f.A||(f.A={}),Wf(m,f))}catch(w){if("InvalidAccessError"==w.name)p&&(ig(p),p=0),Be(Error("An extension is blocking network request."));
else throw w;}p&&jf(function(){jg(a)},0,5E3)})}
;function mh(a,b){var c=void 0===c?{}:c;var d=lh;P("ytLoggingEventsDefaultDisabled",!1)&&lh==lh&&(d=null);var e=c;e=void 0===e?{}:e;c={};c.eventTimeMs=Math.round(e.timestamp||T());c[a]=b;var f=C("_lact",window);f=null==f?-1:Math.max(Date.now()-f,0);c.context={lastActivityMs:String(e.timestamp||!isFinite(f)?-1:f)};if(R("log_sequence_info_on_gel_web")&&e.fa){f=c.context;var g=e.fa;Jf[g]=g in Jf?Jf[g]+1:0;f.sequence={index:Jf[g],groupKey:g};e.Ra&&delete Jf[e.fa]}e=e.Qa;f="";e&&(f={},e.videoId?f.videoId=
e.videoId:e.playlistId&&(f.playlistId=e.playlistId),Af[e.token]=f,f=e.token);e=zf.get(f)||[];zf.set(f,e);e.push(c);d&&(uf=new d);d=ff("web_logging_max_batch")||100;c=T();e.length>=d?Bf(!0):10<=c-xf&&(Df(),xf=c)}
;var nh=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
T:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
T:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];
function oh(a){for(var b=u(nh),c=b.next();!c.done;c=b.next())if(c=c.value,c.T[a.name])for(var d=u(c.T[a.name]),e=d.next();!e.done;e=d.next()){var f=e.value;if(e=a.message.match(f.regexp)){a.params["params.error.original"]=e[0];d=f.groups;f={};for(var g=0;g<d.length;g++)f[d[g]]=e[g+1],a.params["params.error."+d[g]]=e[g+1];a.message=c.Z(f);break}}return a}
;function ph(){this.h=[];this.i=[]}
var qh;function rh(){qh||(qh=new ph);return qh}
function sh(a){return"msg="+a.i.length+"&cb="+a.h.length}
;var th=new O;function uh(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=vh(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=vh(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=vh(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function vh(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function wh(a,b,c,d){c+="."+a;a=xh(b);d[c]=a;return c.length+a.length}
function xh(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
function yh(a,b){var c=lc(a),d=c.message||"Unknown Error",e=c.name||"UnknownError",f=c.stack||a.h||"Not available";if(f.startsWith(e+": "+d)){var g=f.split("\n");g.shift();f=g.join("\n")}g=c.lineNumber||"Not available";c=c.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0,k=0;k<a.args.length;k++){var l=a.args[k],m="params."+k;h+=m.length;if(l)if(Array.isArray(l)){var n=b,p=h;for(h=0;h<l.length&&!(l[h]&&(p+=wh(h,l[h],m,n),500<p));h++);h=p}else if("object"===typeof l)for(n in n=
void 0,p=b,l){if(l[n]){var q=n;var v=l[n],w=p;q="string"!==typeof v||"clickTrackingParams"!==q&&"trackingParams"!==q?0:(v=uh(atob(v.replace(/-/g,"+").replace(/_/g,"/"))))?wh(q+".ve",v,m,w):0;h+=q;h+=wh(n,l[n],m,p);if(500<h)break}}else b[m]=xh(l),h+=b[m].length;else b[m]=xh(l),h+=b[m].length;if(500<=h)break}else if(a.hasOwnProperty("params")&&a.params)if(l=a.params,"object"===typeof a.params)for(k in m=0,l){if(l[k]&&(n="params."+k,p=xh(l[k]),b[n]=p,m+=n.length+p.length,500<m))break}else b.params=xh(l);
navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);d={message:d,name:e,lineNumber:g,fileName:c,stack:f,params:b,sampleWeight:1};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);if(void 0!==a.sampleWeight)e=a.sampleWeight;else a:{e=rh();g=u(e.i);for(c=g.next();!c.done;c=g.next())if(c=c.value,d.message&&d.message.match(c.h)){e=c.weight;break a}e=u(e.h);for(g=e.next();!g.done;g=e.next())if(g=g.value,g.h(d)){e=g.weight;break a}e=1}d.sampleWeight=e;
return d}
;var zh=new Set,Ah=0,Bh=0,Ch=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Y(a,b,c){this.o=this.h=this.i=null;this.m=Ca(this);this.j=0;this.u=!1;this.s=[];this.l=null;this.F=c;this.H={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Pb(a.src):"https://www.youtube.com"),this.i=new bf(b),c||(b=Dh(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ca(this.h)),We[this.h.id]=this,window.postMessage){this.l=new O;Eh(this);b=Q(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Ye)Fh(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.h.width=a;this.h.height=b;return this};
r.va=function(){return this.h};
r.ea=function(a){Gh(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Hh(this,a);return this};
function Fh(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.F==c[0]&&Hh(a,d)}}
r.destroy=function(){this.h.id&&(We[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.o){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);df&&(df[this.m]=null);this.i=null;a=this.h;for(var c in Va)Va[c][0]==a&&He(c);this.o=this.h=null};
r.W=function(){return{}};
function Ih(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.U(b):a.s.push(b)}
function Gh(a,b,c){a.l.j||(c={target:a,data:c},a.l.I(b,c),af(a.F+"."+b,c))}
function Dh(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Q(a.i,"title"));(d=Q(a.i,"width"))&&c.setAttribute("width",d);(d=Q(a.i,"height"))&&c.setAttribute("height",d);var h=
a.W();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.m;window.location.href&&G(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(Sb);b:{var n=0;for(var p=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+p),!q||61==q||38==q||35==q)break b;n+=p+1}n=-1}if(0>n)l=null;else{p=l.indexOf("&",n);if(0>p||p>m)p=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
p-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=Q(a.i,"host")+("/embed/"+Q(a.i,"videoId"))+"?"+Rb(h);return c}
r.ca=function(){this.h&&this.h.contentWindow?this.U({event:"listening"}):window.clearInterval(this.j)};
function Eh(a){cf(a.i,a,a.m);a.j=Le(Ha(a.ca,a));Je(a.h,"load",Ha(function(){window.clearInterval(this.j);this.j=Le(Ha(this.ca,this))},a))}
function Hh(a,b){a.H[b]||(a.H[b]=!0,Ih(a,"addEventListener",[b]))}
r.U=function(a){a.id=this.m;a.channel="widget";a=Od(a);var b=this.i;var c=Pb(this.h.src||"");b=0==c.indexOf("https:")?[c]:b.h?[c.replace("http:","https:")]:b.j?[c]:[c,c.replace("http:","https:")];if(this.h.contentWindow)for(c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(n){if(n.name&&"SyntaxError"==n.name){if(!(n.message&&0<n.message.indexOf("target origin ''"))){var d=void 0,e=n;d=void 0===d?{}:d;d.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){if(R("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=Ah||(R("kevlar_js_fixes")?(e=oh(yh(e,f)),e.params||(e.params={}),f=rh(),e.params["params.errorServiceSignature"]=sh(f),e.params["params.serviceWorker"]="false",
e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length)):e=oh(yh(e,f)),window.yterr&&"function"===typeof window.yterr&&window.yterr(e),f=R("kevlar_js_fixes")?0===e.sampleWeight:0<=e.stack.indexOf("/YouTubeCenter.js")||0<=e.stack.indexOf("/mytube.js"),zh.has(e.message)||f))){"ERROR"===d?(th.I("handleError",e),R("record_app_crashed_web")&&0===Bh&&mh("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"}),Bh++):"WARNING"===d&&th.I("handleWarning",e);if(R("kevlar_gel_error_routing")){h=
d;g=e;a:{f=u(Ch);for(var k=f.next();!k.done;k=f.next()){var l=H;if(l&&0<=l.toLowerCase().indexOf(k.value.toLowerCase())){f=!0;break a}}f=!1}if(!f){k={stackTrace:g.stack};g.fileName&&(k.filename=g.fileName);f=g.lineNumber&&g.lineNumber.split?g.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(k.lineNumber=Number(f[0]),k.columnNumber=Number(f[1])):k.lineNumber=Number(f[0]));f={level:"ERROR_LEVEL_UNKNOWN",message:g.message,
errorClassName:g.name,sampleWeight:g.sampleWeight};"ERROR"===h?f.level="ERROR_LEVEL_ERROR":"WARNING"===h&&(f.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:k};k={pageUrl:window.location.href};P("FEXP_EXPERIMENTS")&&(k.experimentIds=P("FEXP_EXPERIMENTS"));k.kvPairs=R("kevlar_js_fixes")?[]:[{key:"client.params.errorServiceSignature",value:sh(rh())},{key:"client.params.serviceWorker",value:"false"}];if(g=g.params){l=u(Object.keys(g));for(var m=l.next();!m.done;m=l.next())m=m.value,
k.kvPairs.push({key:"client."+m,value:String(g[m])})}g=P("SERVER_NAME",void 0);l=P("SERVER_VERSION",void 0);g&&l&&(k.kvPairs.push({key:"server.name",value:g}),k.kvPairs.push({key:"server.version",value:l}));mh("clientError",{errorMetadata:k,stackTrace:h,logMessage:f});Bf()}}if(!R("suppress_error_204_logging")){g=e;f=g.params||{};d={ya:{a:"logerror",t:"jserror",type:g.name,msg:g.message.substr(0,250),line:g.lineNumber,level:d,"client.name":f.name},A:{url:P("PAGE_NAME",window.location.href),file:g.fileName},
method:"POST"};f.version&&(d["client.version"]=f.version);if(d.A){g.stack&&(d.A.stack=g.stack);g=u(Object.keys(f));for(h=g.next();!h.done;h=g.next())h=h.value,d.A["client."+h]=f[h];if(f=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,d.A[h]=f[h];f=P("SERVER_NAME",void 0);g=P("SERVER_VERSION",void 0);f&&g&&(d.A["server.name"]=f,d.A["server.version"]=g)}Wf(P("ECATCHER_REPORT_HOST","")+"/error_204",d)}zh.add(e.message);Ah++}}}}else throw n;
}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Jh(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Kh(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.D={};this.playerInfo={}}
x(Z,Y);r=Z.prototype;r.W=function(){var a=Q(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Q(this.i,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.D[c]=a[c];break;case "infoDelivery":Lh(this,a);break;case "initialDelivery":window.clearInterval(this.j);this.playerInfo={};this.D={};Mh(this,a.apiInterface);Lh(this,a);break;default:Gh(this,b,a)}};
function Lh(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function Mh(a,b){G(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Jh(c)?this[c]=function(){this.playerInfo={};
this.D={};Ih(this,c,arguments);return this}:Kh(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Ih(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(Q(this.i,"width"),10),b=parseInt(Q(this.i,"height"),10),c=Q(this.i,"host")+("/embed/"+Q(this.i,"videoId"));hb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(bb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(cb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(db,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(eb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(fb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(gb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.D.namespaces?a?this.D[a].options||[]:this.D.namespaces||[]:[]};
r.getOption=function(a,b){if(this.D.namespaces&&a&&b)return this.D[a][b]};
function Nh(a){if("iframe"!=a.tagName.toLowerCase()){var b=$e(a,"videoid");b&&(b={videoId:b,width:$e(a,"width"),height:$e(a,"height")},new Z(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return We[a]});
E("YT.scan",Ze);E("YT.subscribe",function(a,b,c){ee.subscribe(a,b,c);Ye[a]=!0;for(var d in We)Fh(We[d],a)});
E("YT.unsubscribe",function(a,b,c){de(a,b,c)});
E("YT.Player",Z);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.va;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;
Xe.push(function(a){var b=a;b||(b=document);a=Qa(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=La(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=Qa(b);G(Pa(a,b),Nh)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ze();var Oh=B.onYTReady;Oh&&Oh();var Ph=B.onYouTubeIframeAPIReady;Ph&&Ph();var Qh=B.onYouTubePlayerAPIReady;Qh&&Qh();}).call(this);
