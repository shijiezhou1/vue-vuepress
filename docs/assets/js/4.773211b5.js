(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{178:function(t,e,r){},213:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=x;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",d={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=E.prototype=_.prototype=Object.create(y);L.prototype=w.constructor=E,E.constructor=L,E[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},k(O.prototype),O.prototype[c]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,r,n){var o=new O(x(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function x(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=b(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function E(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=b(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},a)}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},214:function(t,e,r){"use strict";var n=r(178);r.n(n).a},223:function(t,e,r){"use strict";r.r(e);r(213);var n,o,i=r(172),a=r.n(i),c={mounted:function(){console.log("mounted"),this.getData()},data:function(){return{buttonMsg:"Click to generate",text:null,posts:null}},computed:{},created:function(){},methods:{getData:(n=regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("created always run first"),t.prev=1,t.next=4,a.a.get("https://vue-two.herokuapp.com/api/posts/");case 4:e=t.sent,r=e.data,this.contents=r,this.posts=r,console.log(e.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}},t,this,[[1,11]])}),o=function(){var t=this,e=arguments;return new Promise(function(r,o){var i=n.apply(t,e);function a(t,e){try{var n=i[t](e),a=n.value}catch(t){return void o(t)}n.done?r(a):Promise.resolve(a).then(c,s)}function c(t){a("next",t)}function s(t){a("throw",t)}c()})},function(){return o.apply(this,arguments)}),formatDate:function(t){var e=new Date(t),r=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];return"".concat(r," ").concat(e.getDate(),", ").concat(e.getFullYear()," }")},deletePost:function(t){console.log(t)},resetDisplay:function(){this.posts=""},postone:function(){var t=this;a.a.post("https://vue-two.herokuapp.com/api/posts/",{text:this.text,createdAt:new Date}).then(function(e){a.a.get("https://vue-two.herokuapp.com/api/posts/").then(function(e){t.contents=e.data,t.posts=e.data})}).catch(function(t){console.log(t)})}}},s=(r(214),r(0)),u=Object(s.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mongoose"},[r("h1",[t._v("Basic Mongoose Use")]),t._v(" "),r("button",{on:{click:t.resetDisplay}},[t._v(t._s(t.buttonMsg))]),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"Create a Post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("button",{on:{click:t.postone}},[t._v("CLICK TO POST REQUEST")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"post-container"},t._l(t.posts,function(e,n){return r("div",{key:e._id,staticClass:"post",attrs:{item:e,index:n},on:{dblclick:function(r){return t.deletePost(e._id)}}},[r("p",{staticClass:"text"},[t._v(t._s(e.text))]),t._v(" "),r("p",{staticClass:"text"},[t._v(t._s(t.formatDate(e.createdAt)))])])}),0)])},[],!1,null,"2b6d30cb",null);e.default=u.exports}}]);