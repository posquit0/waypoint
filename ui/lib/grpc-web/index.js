/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ca(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);
function ea(a,b){if(b){var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}ea("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
ea("Promise",function(a){function b(e){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.b=function(e){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(e)};var f=da.setTimeout;c.prototype.c=function(e){f(e,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var e=this.a;this.a=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(e){this.c(function(){throw e;})};b.prototype.f=function(){function e(l){return function(m){k||(k=!0,l.call(h,m))}}var h=this,k=!1;return{resolve:e(this.m),reject:e(this.g)}};b.prototype.m=function(e){if(e===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.o(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.l(e):this.h(e)}};
b.prototype.l=function(e){var h=void 0;try{h=e.then}catch(k){this.g(k);return}"function"==typeof h?this.u(h,e):this.h(e)};b.prototype.g=function(e){this.i(2,e)};b.prototype.h=function(e){this.i(1,e)};b.prototype.i=function(e,h){if(0!=this.b)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.b);this.b=e;this.c=h;this.j()};b.prototype.j=function(){if(null!=this.a){for(var e=0;e<this.a.length;++e)g.b(this.a[e]);this.a=null}};var g=new c;b.prototype.o=function(e){var h=this.f();
e.w(h.resolve,h.reject)};b.prototype.u=function(e,h){var k=this.f();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(n,v){return"function"==typeof n?function(x){try{l(n(x))}catch(F){m(F)}}:v}var l,m,p=new b(function(n,v){l=n;m=v});this.w(k(e,l),k(h,m));return p};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.w=function(e,h){function k(){switch(l.b){case 1:e(l.c);break;case 2:h(l.c);break;default:throw Error("Unexpected state: "+
l.b);}}var l=this;null==this.a?g.b(k):this.a.push(k)};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=fa(e),m=l.next();!m.done;m=l.next())d(m.value).w(h,k)})};b.all=function(e){var h=fa(e),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(F){n[x]=F;v--;0==v&&l(n)}}var n=[],v=0;do n.push(void 0),v++,d(k.value).w(p(n.length-1),m),k=h.next();while(!k.done)})};return b});var ha=ha||{},q=this||self;
function r(a,b){a=a.split(".");b=b||q;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function t(){}
function ia(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function u(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=la:w=ma;return w.apply(null,arguments)}var na=Date.now||function(){return+new Date};
function y(a,b){function c(){}c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a};function oa(){this.a={}}oa.prototype.get=function(a){return this.a[a]};oa.prototype.f=function(){return Object.keys(this.a)};function z(a,b,c,d){this.f=a;this.c=b;this.b=c;this.a=d}z.prototype.getRequestMessage=function(){return this.f};z.prototype.getMethodDescriptor=function(){return this.c};z.prototype.getMetadata=function(){return this.b};z.prototype.getCallOptions=function(){return this.a};function A(a,b,c,d){c=void 0===c?{}:c;this.c=a;this.a=c;this.b=b;this.f=void 0===d?null:d}A.prototype.getResponseMessage=function(){return this.c};A.prototype.getMetadata=function(){return this.a};A.prototype.getMethodDescriptor=function(){return this.b};A.prototype.getStatus=function(){return this.f};function pa(a,b,c,d,f,g){this.name=a;this.a=f;this.b=g}function qa(a,b,c){c=void 0===c?{}:c;var d=void 0===d?new oa:d;return new z(b,a,c,d)};function ra(a,b,c,d){return d instanceof pa?d:new pa(a,c,d.b||b.constructor,d.f,d.a,d.c)};function sa(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}y(B,Error);B.prototype.name="CustomError";function ta(a,b){a=a.split("%s");for(var c="",d=a.length-1,f=0;f<d;f++)c+=a[f]+(f<b.length?b[f]:"%s");B.call(this,c+a[d])}y(ta,B);ta.prototype.name="AssertionError";function ua(a,b){throw new ta("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function va(){this.j=null;this.i=[];this.l=0;this.b=wa;this.f=this.a=this.h=0;this.c=null;this.g=0}
function xa(a,b){function c(l){l==ya?e.h=l:l==C?e.h=l:za(e,h,k,"invalid frame byte");e.b=Aa;e.a=0;e.f=0}function d(l){e.f++;e.a=(e.a<<8)+l;4==e.f&&(e.b=Ba,e.g=0,"undefined"!==typeof Uint8Array?e.c=new Uint8Array(e.a):e.c=Array(e.a),0==e.a&&g())}function f(l){e.c[e.g++]=l;e.g==e.a&&g()}function g(){var l={};l[e.h]=e.c;e.i.push(l);e.b=wa}var e=a,h,k=0;for(b instanceof Uint8Array||b instanceof Array?h=b:h=new Uint8Array(b);k<h.length;){switch(e.b){case Ca:za(e,h,k,"stream already broken");break;case wa:c(h[k]);
break;case Aa:d(h[k]);break;case Ba:f(h[k]);break;default:throw Error("unexpected parser state: "+e.b);}e.l++;k++}a=e.i;e.i=[];return 0<a.length?a:null}var wa=0,Aa=1,Ba=2,Ca=3,ya=0,C=128;function za(a,b,c,d){a.b=Ca;a.j="The stream is broken @"+a.l+"/"+c+". Error: "+d+". With input:\n"+b;throw Error(a.j);};function Da(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}};var Ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function Fa(a){a:{var b=Ga;for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a)){b=f;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var Ha=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function D(a,b){return-1!=a.indexOf(b)}function Ia(a,b){return a<b?-1:a>b?1:0};var E;a:{var Ja=q.navigator;if(Ja){var Ka=Ja.userAgent;if(Ka){E=Ka;break a}}E=""};function La(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ma(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}var Na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var g=0;g<Na.length;g++)c=Na[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Pa(a){var b=1;a=a.split(":");for(var c=[];0<b&&a.length;)c.push(a.shift()),b--;a.length&&c.push(a.join(":"));return c};function Qa(a){Qa[" "](a);return a}Qa[" "]=t;function Ra(a,b){var c=Sa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ta=D(E,"Opera"),G=D(E,"Trident")||D(E,"MSIE"),Ua=D(E,"Edge"),Va=D(E,"Gecko")&&!(D(E.toLowerCase(),"webkit")&&!D(E,"Edge"))&&!(D(E,"Trident")||D(E,"MSIE"))&&!D(E,"Edge"),Wa=D(E.toLowerCase(),"webkit")&&!D(E,"Edge");function Xa(){var a=q.document;return a?a.documentMode:void 0}var H;
a:{var Ya="",Za=function(){var a=E;if(Va)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ua)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wa)return/WebKit\/(\S+)/.exec(a);if(Ta)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Za&&(Ya=Za?Za[1]:"");if(G){var $a=Xa();if(null!=$a&&$a>parseFloat(Ya)){H=String($a);break a}}H=Ya}var Sa={};
function ab(a){return Ra(a,function(){for(var b=0,c=Ha(String(H)).split("."),d=Ha(String(a)).split("."),f=Math.max(c.length,d.length),g=0;0==b&&g<f;g++){var e=c[g]||"",h=d[g]||"";do{e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==e[0].length&&0==h[0].length)break;b=Ia(0==e[1].length?0:parseInt(e[1],10),0==h[1].length?0:parseInt(h[1],10))||Ia(0==e[2].length,0==h[2].length)||Ia(e[2],h[2]);e=e[3];h=h[3]}while(0==b)}return 0<=b})}var bb;
if(q.document&&G){var cb=Xa();bb=cb?cb:parseInt(H,10)||void 0}else bb=void 0;var db=bb;function eb(){0!=fb&&(Object.prototype.hasOwnProperty.call(this,ja)&&this[ja]||(this[ja]=++ka));this.F=this.F}var fb=0;eb.prototype.F=!1;var gb=Object.freeze||function(a){return a};var hb;(hb=!G)||(hb=9<=Number(db));var ib=hb,jb=G&&!ab("9"),kb=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{q.addEventListener("test",t,b),q.removeEventListener("test",t,b)}catch(c){}return a}();function I(a,b){this.type=a;this.a=this.target=b;this.defaultPrevented=!1}I.prototype.b=function(){this.defaultPrevented=!0};function J(a,b){I.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Va){a:{try{Qa(b.nodeName);var f=!0;break a}catch(g){}f=!1}f||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:lb[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b()}}y(J,I);var lb=gb({2:"touch",3:"pen",4:"mouse"});J.prototype.b=function(){J.S.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,jb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var K="closure_listenable_"+(1E6*Math.random()|0),mb=0;function nb(a,b,c,d,f){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.A=f;this.key=++mb;this.s=this.v=!1}function ob(a){a.s=!0;a.listener=null;a.proxy=null;a.src=null;a.A=null};function L(a){this.src=a;this.a={};this.b=0}L.prototype.add=function(a,b,c,d,f){var g=a.toString();a=this.a[g];a||(a=this.a[g]=[],this.b++);var e=pb(a,b,d,f);-1<e?(b=a[e],c||(b.v=!1)):(b=new nb(b,this.src,g,!!d,f),b.v=c,a.push(b));return b};function qb(a,b){var c=b.type;if(c in a.a){var d=a.a[c],f=Ea(d,b),g;(g=0<=f)&&Array.prototype.splice.call(d,f,1);g&&(ob(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}
function pb(a,b,c,d){for(var f=0;f<a.length;++f){var g=a[f];if(!g.s&&g.listener==b&&g.capture==!!c&&g.A==d)return f}return-1};var rb="closure_lm_"+(1E6*Math.random()|0),sb={},tb=0;function M(a,b,c,d,f){if(d&&d.once)ub(a,b,c,d,f);else if(Array.isArray(b))for(var g=0;g<b.length;g++)M(a,b[g],c,d,f);else c=vb(c),a&&a[K]?a.f.add(String(b),c,!1,u(d)?!!d.capture:!!d,f):wb(a,b,c,!1,d,f)}
function wb(a,b,c,d,f,g){if(!b)throw Error("Invalid event type");var e=u(f)?!!f.capture:!!f,h=xb(a);h||(a[rb]=h=new L(a));c=h.add(b,c,d,e,g);if(!c.proxy){d=yb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)kb||(f=e),void 0===f&&(f=!1),a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(zb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");tb++}}
function yb(){var a=Ab,b=ib?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ub(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)ub(a,b[g],c,d,f);else c=vb(c),a&&a[K]?a.f.add(String(b),c,!0,u(d)?!!d.capture:!!d,f):wb(a,b,c,!0,d,f)}
function Bb(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)Bb(a,b[g],c,d,f);else(d=u(d)?!!d.capture:!!d,c=vb(c),a&&a[K])?(a=a.f,b=String(b).toString(),b in a.a&&(g=a.a[b],c=pb(g,c,d,f),-1<c&&(ob(g[c]),Array.prototype.splice.call(g,c,1),0==g.length&&(delete a.a[b],a.b--)))):a&&(a=xb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=pb(b,c,d,f)),(c=-1<a?b[a]:null)&&Cb(c))}
function Cb(a){if("number"!==typeof a&&a&&!a.s){var b=a.src;if(b&&b[K])qb(b.f,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(zb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);tb--;(c=xb(b))?(qb(c,a),0==c.b&&(c.src=null,b[rb]=null)):ob(a)}}}function zb(a){return a in sb?sb[a]:sb[a]="on"+a}
function Eb(a,b,c,d){var f=!0;if(a=xb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.capture==c&&!g.s&&(g=Fb(g,d),f=f&&!1!==g)}return f}function Fb(a,b){var c=a.listener,d=a.A||a.src;a.v&&Cb(a);return c.call(d,b)}
function Ab(a,b){if(a.s)return!0;if(!ib){var c=b||r("window.event");b=new J(c,this);var d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(e){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=b.a;f;f=f.parentNode)c.push(f);a=a.type;for(f=c.length-1;0<=f;f--){b.a=c[f];var g=Eb(c[f],a,!0,b);d=d&&g}for(f=0;f<c.length;f++)b.a=c[f],g=Eb(c[f],a,!1,b),d=d&&g}return d}return Fb(a,new J(b,this))}
function xb(a){a=a[rb];return a instanceof L?a:null}var Gb="__closure_events_fn_"+(1E9*Math.random()>>>0);function vb(a){if("function"==ia(a))return a;a[Gb]||(a[Gb]=function(b){return a.handleEvent(b)});return a[Gb]};function N(){eb.call(this);this.f=new L(this);this.N=this}y(N,eb);N.prototype[K]=!0;N.prototype.addEventListener=function(a,b,c,d){M(this,a,b,c,d)};N.prototype.removeEventListener=function(a,b,c,d){Bb(this,a,b,c,d)};function O(a,b){a=a.N;var c=b.type||b;if("string"===typeof b)b=new I(b,a);else if(b instanceof I)b.target=b.target||a;else{var d=b;b=new I(c,a);Oa(b,d)}a=b.a=a;Hb(a,c,!0,b);Hb(a,c,!1,b)}
function Hb(a,b,c,d){if(b=a.f.a[String(b)]){b=b.concat();for(var f=!0,g=0;g<b.length;++g){var e=b[g];if(e&&!e.s&&e.capture==c){var h=e.listener,k=e.A||e.src;e.v&&qb(a.f,e);f=!1!==h.call(k,d)&&f}}}};function Ib(a,b,c){if("function"==ia(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:q.setTimeout(a,b||0)};function Jb(a,b,c){this.reset(a,b,c,void 0,void 0)}Jb.prototype.a=null;var Kb=0;Jb.prototype.reset=function(a,b,c,d,f){"number"==typeof f||Kb++;d||na();delete this.a};function Lb(a){this.f=a;this.b=this.c=this.a=null}function Mb(a,b){this.name=a;this.value=b}Mb.prototype.toString=function(){return this.name};var Nb=new Mb("SEVERE",1E3),Ob=new Mb("CONFIG",700),Pb=new Mb("FINE",500);function Qb(a){if(a.c)return a.c;if(a.a)return Qb(a.a);ua("Root logger has no level set.");return null}Lb.prototype.log=function(a,b,c){if(a.value>=Qb(this).value)for("function"==ia(b)&&(b=b()),a=new Jb(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Rb={},Sb=null;
function Tb(a){Sb||(Sb=new Lb(""),Rb[""]=Sb,Sb.c=Ob);var b;if(!(b=Rb[a])){b=new Lb(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Tb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Rb[a]=b}return b};function P(a,b){a&&a.log(Pb,b,void 0)};function Ub(){}Ub.prototype.a=null;function Vb(a){var b;(b=a.a)||(b={},Wb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var Xb;function Yb(){}y(Yb,Ub);function Zb(a){return(a=Wb(a))?new ActiveXObject(a):new XMLHttpRequest}function Wb(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}Xb=new Yb;function Q(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&$b(this,a)}Q.prototype.f=function(){ac(this);return this.a.concat()};function ac(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var f={};for(c=b=0;b<a.a.length;)d=a.a[b],R(f,d)||(a.a[c++]=d,f[d]=1),b++;a.a.length=c}}
Q.prototype.get=function(a,b){return R(this.b,a)?this.b[a]:b};Q.prototype.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};function $b(a,b){if(b instanceof Q)for(var c=b.f(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])}Q.prototype.forEach=function(a,b){for(var c=this.f(),d=0;d<c.length;d++){var f=c[d],g=this.get(f);a.call(b,g,f,this)}};function R(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var bc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function S(a){N.call(this);this.headers=new Q;this.D=a||null;this.c=!1;this.C=this.a=null;this.J=this.o="";this.g=0;this.i="";this.h=this.I=this.m=this.G=!1;this.l=0;this.u=null;this.j=cc;this.B=this.H=!1}y(S,N);var cc="",dc=S.prototype,ec=Tb("goog.net.XhrIo");dc.b=ec;var fc=/^https?$/i,gc=["POST","PUT"];
function hc(a,b,c){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.o+"; newUri="+b);a.o=b;a.i="";a.g=0;a.J="POST";a.G=!1;a.c=!0;a.a=a.D?Zb(a.D):Zb(Xb);a.C=a.D?Vb(a.D):Vb(Xb);a.a.onreadystatechange=w(a.K,a);try{P(a.b,T(a,"Opening Xhr")),a.I=!0,a.a.open("POST",String(b),!0),a.I=!1}catch(g){P(a.b,T(a,"Error opening Xhr: "+g.message));ic(a,g);return}b=c||"";c=new Q(a.headers);var d=Fa(c.f()),f=q.FormData&&b instanceof q.FormData;!(0<=Ea(gc,"POST"))||d||f||c.set("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8");c.forEach(function(g,e){this.a.setRequestHeader(e,g)},a);a.j&&(a.a.responseType=a.j);"withCredentials"in a.a&&a.a.withCredentials!==a.H&&(a.a.withCredentials=a.H);try{jc(a),0<a.l&&(a.B=kc(a.a),P(a.b,T(a,"Will abort after "+a.l+"ms if incomplete, xhr2 "+a.B)),a.B?(a.a.timeout=a.l,a.a.ontimeout=w(a.L,a)):a.u=Ib(a.L,a.l,a)),P(a.b,T(a,"Sending request")),a.m=!0,a.a.send(b),a.m=!1}catch(g){P(a.b,T(a,"Send error: "+g.message)),ic(a,g)}}
function kc(a){return G&&ab(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Ga(a){return"content-type"==a.toLowerCase()}S.prototype.L=function(){"undefined"!=typeof ha&&this.a&&(this.i="Timed out after "+this.l+"ms, aborting",this.g=8,P(this.b,T(this,this.i)),O(this,"timeout"),this.abort(8))};function ic(a,b){a.c=!1;a.a&&(a.h=!0,a.a.abort(),a.h=!1);a.i=b;a.g=5;lc(a);mc(a)}function lc(a){a.G||(a.G=!0,O(a,"complete"),O(a,"error"))}
S.prototype.abort=function(a){this.a&&this.c&&(P(this.b,T(this,"Aborting")),this.c=!1,this.h=!0,this.a.abort(),this.h=!1,this.g=a||7,O(this,"complete"),O(this,"abort"),mc(this))};S.prototype.K=function(){this.F||(this.I||this.m||this.h?nc(this):this.O())};S.prototype.O=function(){nc(this)};
function nc(a){if(a.c&&"undefined"!=typeof ha)if(a.C[1]&&4==U(a)&&2==a.getStatus())P(a.b,T(a,"Local request error detected and ignored"));else if(a.m&&4==U(a))Ib(a.K,0,a);else if(O(a,"readystatechange"),4==U(a)){P(a.b,T(a,"Request complete"));a.c=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var f;if(f=0===b){var g=String(a.o).match(bc)[1]||null;if(!g&&q.self&&q.self.location){var e=q.self.location.protocol;
g=e.substr(0,e.length-1)}f=!fc.test(g?g.toLowerCase():"")}d=f}if(d)O(a,"complete"),O(a,"success");else{a.g=6;try{var h=2<U(a)?a.a.statusText:""}catch(k){P(a.b,"Can not get status: "+k.message),h=""}a.i=h+" ["+a.getStatus()+"]";lc(a)}}finally{mc(a)}}}function mc(a){if(a.a){jc(a);var b=a.a,c=a.C[0]?t:null;a.a=null;a.C=null;O(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.b)&&a.log(Nb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}
function jc(a){a.a&&a.B&&(a.a.ontimeout=null);a.u&&(q.clearTimeout(a.u),a.u=null)}function U(a){return a.a?a.a.readyState:0}S.prototype.getStatus=function(){try{return 2<U(this)?this.a.status:-1}catch(a){return-1}};
function oc(a){try{if(!a.a)return null;if("response"in a.a)return a.a.response;switch(a.j){case cc:case "text":return a.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.a)return a.a.mozResponseArrayBuffer}var b=a.b;b&&b.log(Nb,"Response type "+a.j+" is not supported on this browser",void 0);return null}catch(c){return P(a.b,"Can not get response: "+c.message),null}}function pc(a,b){if(a.a&&4==U(a))return a=a.a.getResponseHeader(b),null===a?void 0:a}
function qc(a){var b={};a=(a.a&&4==U(a)?a.a.getAllResponseHeaders()||"":"").split("\r\n");for(var c=0;c<a.length;c++)if(!/^[\s\xa0]*$/.test(a[c])){var d=Pa(a[c]),f=d[0];d=d[1];if("string"===typeof d){d=d.trim();var g=b[f]||[];b[f]=g;g.push(d)}}return Ma(b,function(e){return e.join(", ")})}function T(a,b){return b+" ["+a.J+" "+a.o+" "+a.getStatus()+"]"};var rc={},V=null;function sc(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):D("=.",a[b-1])&&(c=D("=.",a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;tc(a,function(g){d[f++]=g});return d.subarray(0,f)}
function tc(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=V[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}uc();for(var d=0;;){var f=c(-1),g=c(0),e=c(64),h=c(64);if(64===h&&-1===f)break;b(f<<2|g>>4);64!=e&&(b(g<<4&240|e>>2),64!=h&&b(e<<6&192|h))}}
function uc(){if(!V){V={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));rc[c]=d;for(var f=0;f<d.length;f++){var g=d[f];void 0===V[g]&&(V[g]=f)}}}};var vc=["content-type","grpc-status","grpc-message"];
function W(a){this.a=a.T;this.l=null;this.b=[];this.h=[];this.g=[];this.f=[];this.c=[];this.j=!1;this.i=0;this.m=new va;var b=this;M(this.a,"readystatechange",function(){var c=b.a;if(c=c.a?c.a.getResponseHeader("Content-Type"):null){c=c.toLowerCase();if(0==c.lastIndexOf("application/grpc-web-text",0)){c=b.a;try{var d=c.a?c.a.responseText:""}catch(l){P(c.b,"Can not get responseText: "+l.message),d=""}c=d||"";d=c.length-c.length%4;c=c.substr(b.i,d-b.i);if(0==c.length)return;b.i=d;c=sc(c)}else if(0==
c.lastIndexOf("application/grpc",0))c=new Uint8Array(oc(b.a));else{X(b,{code:2,message:"Unknown Content-type received.",metadata:{}});return}d=null;try{d=xa(b.m,c)}catch(l){X(b,{code:2,message:"Error in parsing response body",metadata:{}})}if(d)for(c=0;c<d.length;c++){if(ya in d[c]){var f=d[c][ya];if(f)try{var g=b.l(f);if(g){f=b;for(var e=g,h=0;h<f.b.length;h++)f.b[h](e)}}catch(l){X(b,{code:2,message:"Error in response deserializer function.",metadata:{}})}}if(C in d[c]&&0<d[c][C].length){f="";for(e=
0;e<d[c][C].length;e++)f+=String.fromCharCode(d[c][C][e]);f=f.trim().split("\r\n");e={};for(h=0;h<f.length;h++){var k=f[h].indexOf(":");e[f[h].substring(0,k).trim()]=f[h].substring(k+1).trim()}f=e;e=0;h="";"grpc-status"in f&&(e=f["grpc-status"],delete f["grpc-status"]);"grpc-message"in f&&(h=f["grpc-message"],delete f["grpc-message"]);X(b,{code:Number(e),message:h,metadata:f})}}}});M(this.a,"complete",function(){var c=b.a.g,d="",f={},g=qc(b.a);Object.keys(g).forEach(function(h){vc.includes(h)||(f[h]=
g[h])});wc(b,f);if(0!=c){switch(c){case 7:var e=10;break;case 8:e=4;break;case 6:e=Da(b.a.getStatus());break;default:e=14}10==e&&b.j||X(b,{code:e,message:sa(c),metadata:{}})}else c=!1,"grpc-status"in g&&(e=pc(b.a,"grpc-status"),"grpc-message"in g&&(d=pc(b.a,"grpc-message")),0!=Number(e)&&(X(b,{code:Number(e),message:d,metadata:g}),c=!0)),c||xc(b)})}
W.prototype.on=function(a,b){"data"==a?this.b.push(b):"status"==a?this.h.push(b):"metadata"==a?this.g.push(b):"end"==a?this.c.push(b):"error"==a&&this.f.push(b);return this};function Y(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)}W.prototype.removeListener=function(a,b){"data"==a?Y(this.b,b):"status"==a?Y(this.h,b):"metadata"==a?Y(this.g,b):"end"==a?Y(this.c,b):"error"==a&&Y(this.f,b);return this};W.prototype.cancel=function(){this.j=!0;this.a.abort()};
function X(a,b){if(0!=b.code)for(var c={code:b.code,message:decodeURIComponent(b.message||""),metadata:b.metadata},d=0;d<a.f.length;d++)a.f[d](c);b={code:b.code,details:decodeURIComponent(b.message||""),metadata:b.metadata};for(c=0;c<a.h.length;c++)a.h[c](b)}function wc(a,b){for(var c=0;c<a.g.length;c++)a.g[c](b)}function xc(a){for(var b=0;b<a.c.length;b++)a.c[b]()}W.prototype.cancel=W.prototype.cancel;W.prototype.removeListener=W.prototype.removeListener;W.prototype.on=W.prototype.on;function yc(a){var b="";La(a,function(c,d){b+=d;b+=":";b+=c;b+="\r\n"});return b};function Z(a){this.a=r("format",a)||"text";this.f=r("suppressCorsPreflight",a)||!1;this.c=r("withCredentials",a)||!1;this.b=r("streamInterceptors",a)||[];this.g=r("unaryInterceptors",a)||[]}
Z.prototype.P=function(a,b,c,d,f){function g(k){this.a=k}var e=this;g.prototype.on=function(k,l){return"data"==k||"error"==k?this:this.a.on(k,l)};g.prototype.removeListener=function(k,l){return this.a.removeListener(k,l)};g.prototype.cancel=function(){this.a.cancel()};d=ra(a,b,"unary",d);var h=a.substr(0,a.length-d.name.length);a=zc(function(k){return Ac(e,k,h)},this.b).call(this,qa(d,b,c));Bc(a,f,!1);return new g(a)};
Z.prototype.M=function(a,b,c,d){var f=this;d=ra(a,b,"unary",d);var g=a.substr(0,a.length-d.name.length);return zc(function(e){return new Promise(function(h,k){var l=Ac(f,e,g),m,p,n;Bc(l,function(v,x,F,Db){v?k(v):x?n=x:F?p=F:Db?m=Db:(v=e.getMethodDescriptor(),x=m,x=void 0===x?{}:x,h(new A(n,v,x,void 0===p?null:p)))},!0)})},this.g).call(this,qa(d,b,c)).then(function(e){return e.getResponseMessage()})};Z.prototype.unaryCall=function(a,b,c,d){return this.M(a,b,c,d)};
Z.prototype.R=function(a,b,c,d){var f=this;d=ra(a,b,"server_streaming",d);var g=a.substr(0,a.length-d.name.length);return zc(function(e){return Ac(f,e,g)},this.b).call(this,qa(d,b,c))};
function Ac(a,b,c){var d=b.getMethodDescriptor(),f=c+d.name;c=new S;c.H=a.c;var g=new W({T:c});g.l=d.b;$b(c.headers,b.getMetadata());"text"==a.a?(c.headers.set("Content-Type","application/grpc-web-text"),c.headers.set("Accept","application/grpc-web-text")):c.headers.set("Content-Type","application/grpc-web+proto");c.headers.set("X-User-Agent","grpc-web-javascript/0.1");c.headers.set("X-Grpc-Web","1");if(R(c.headers.b,"deadline")){var e=c.headers.get("deadline");e=Math.round(e-(new Date).getTime());
var h=c.headers;R(h.b,"deadline")&&(delete h.b.deadline,h.c--,h.a.length>2*h.c&&ac(h));Infinity===e&&(e=0);0<e&&c.headers.set("grpc-timeout",e+"m")}if(a.f){h=c.headers;ac(h);e={};for(var k=0;k<h.a.length;k++){var l=h.a[k];e[l]=h.b[l]}h=c.headers;h.b={};h.a.length=0;h.c=0;b:{for(m in e){var m=!1;break b}m=!0}if(!m)if(e=yc(e),"string"===typeof f){if(m=encodeURIComponent("$httpHeaders"),e=null!=e?"="+encodeURIComponent(String(e)):"",m+=e)e=f.indexOf("#"),0>e&&(e=f.length),h=f.indexOf("?"),0>h||h>e?(h=
e,k=""):k=f.substring(h+1,e),f=[f.substr(0,h),k,f.substr(e)],e=f[1],f[1]=m?e?e+"&"+m:m:e,f=f[0]+(f[1]?"?"+f[1]:"")+f[2]}else f.a("$httpHeaders",e)}b=(0,d.a)(b.getRequestMessage());d=b.length;m=[0,0,0,0];e=new Uint8Array(5+d);for(h=3;0<=h;h--)m[h]=d%256,d>>>=8;e.set(new Uint8Array(m),1);e.set(b,5);b=e;if("text"==a.a){a=b;var p;void 0===p&&(p=0);uc();p=rc[p];b=[];for(d=0;d<a.length;d+=3){l=a[d];var n=(m=d+1<a.length)?a[d+1]:0;k=(e=d+2<a.length)?a[d+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;
e||(k=64,m||(n=64));b.push(p[h],p[l],p[n]||"",p[k]||"")}b=b.join("")}else"binary"==a.a&&(c.j="arraybuffer");hc(c,f,b);return g}
function Bc(a,b,c){var d=null,f=!1;a.on("data",function(g){d=g});a.on("error",function(g){0==g.code||f||(f=!0,b(g,null))});a.on("status",function(g){0==g.code||f?c&&b(null,null,g):(f=!0,b({code:g.code,message:g.details,metadata:g.metadata},null))});if(c)a.on("metadata",function(g){b(null,null,null,g)});a.on("end",function(){f||(null==d?b({code:2,message:"Incomplete response"}):b(null,d));c&&b(null,null)})}
function zc(a,b){var c=a;b.forEach(function(d){var f=c;c=function(g){return d.intercept(g,f)}});return c}Z.prototype.serverStreaming=Z.prototype.R;Z.prototype.unaryCall=Z.prototype.unaryCall;Z.prototype.thenableCall=Z.prototype.M;Z.prototype.rpcCall=Z.prototype.P;module.exports.AbstractClientBase={MethodInfo:function(a,b,c,d,f){this.name=d;this.b=f;this.f=a;this.a=b;this.c=c}};module.exports.GrpcWebClientBase=Z;module.exports.StatusCode={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,UNAUTHENTICATED:16,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15};module.exports.MethodDescriptor=pa;
module.exports.MethodType={UNARY:"unary",SERVER_STREAMING:"server_streaming"};
