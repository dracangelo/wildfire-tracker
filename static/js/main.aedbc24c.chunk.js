(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){t.exports=n.p+"static/media/spinner.ae2ed7ed.gif"},16:function(t,e,n){t.exports=n(28)},24:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=(n(24),n(10)),l=n(5),u=n(15),s=n(3),f=n(8),h=n.n(f),d=function(t){t.lat,t.lng;var e=t.onClick;return o.a.createElement("div",{className:"location-marker",onClick:e},o.a.createElement(s.a,{icon:h.a,className:"location-icon"}))},p=function(t){var e=t.info;return o.a.createElement("div",{className:"location-info"},o.a.createElement("h2",null,"Event Location info"),o.a.createElement("ul",null,o.a.createElement("li",null,"ID: ",o.a.createElement("strong",null," ",e.id)),o.a.createElement("li",null,"TITLE: ",o.a.createElement("strong",null," ",e.title))))},m=n(12),v=n.n(m),g=function(t){t.lat,t.lng;var e=t.onClick;return o.a.createElement("div",{className:"location-marker",onClick:e},o.a.createElement(s.a,{icon:v.a,className:"location-icon",color:"black"}))},y=n(13),E=n.n(y),w=function(t){t.lat,t.lng;var e=t.onClick;return o.a.createElement("div",{className:"location-marker",onClick:e},o.a.createElement(s.a,{icon:E.a,className:"location-icon"}))},b=function(t){var e=t.eventData,n=t.center,a=t.zoom,i=Object(r.useState)(null),c=Object(l.a)(i,2),s=c[0],f=c[1],h=e.map(function(t,e){return 12===t.categories[0].id?o.a.createElement(g,{key:e,lat:t.geometries[0].coordinates[1],lng:t.geometries[0].coordinates[0],onClick:function(){return f({id:t.id,title:t.title})}}):null}),m=e.map(function(t,e){return 8===t.categories[0].id?o.a.createElement(d,{key:e,lat:t.geometries[0].coordinates[1],lng:t.geometries[0].coordinates[0],onClick:function(){return f({id:t.id,title:t.title})}}):null}),v=e.map(function(t,e){return 15===t.categories[0].id?o.a.createElement(w,{key:e,lat:t.geometries[0].coordinates[1],lng:t.geometries[0].coordinates[0],onClick:function(){return f({id:t.id,title:t.title})}}):null});return o.a.createElement("div",{className:"map"},o.a.createElement(u.a,{bootstrapURLKeys:{key:""},defaultCenter:n,defaultZoom:a},h,m,v),s&&o.a.createElement(p,{info:s}))};b.defaultProps={center:{lat:34,lng:-90},zoom:6};var L=b,x=n(14),k=n.n(x),j=function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("img",{src:k.a,alt:"Loading..."}),o.a.createElement("h1",null,"fetching data"))},O=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,o.a.createElement(s.a,{icon:h.a})," Wildfire tracker (powered by NASA)"))};function N(){N=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var s={};function f(){}function h(){}function d(){}var p={};c(p,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(k([])));v&&v!==e&&n.call(v,o)&&(p=v);var g=d.prototype=f.prototype=Object.create(p);function y(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(l.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=d,c(g,"constructor",d),c(d,"constructor",h),h.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},y(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var _=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(!1),u=Object(l.a)(i,2),s=u[0],f=u[1];return Object(r.useEffect)(function(){!function(){var t=Object(c.a)(N().mark(function t(){var e,n,r;return N().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,r=n.events,a(r),f(!1);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[]),o.a.createElement("div",null,o.a.createElement(O,null),s?o.a.createElement(j,null):o.a.createElement(L,{eventData:n}))},C=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,29)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),C()}},[[16,3,2]]]);
//# sourceMappingURL=main.aedbc24c.chunk.js.map