(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+iuc":function(t,n,e){e("wgeU"),e("FlQf"),e("bBy9"),e("B9jh"),e("dL40"),e("xvv9"),e("V+O7"),t.exports=e("WEpk").Set},"/0+H":function(t,n,e){"use strict";var r=e("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(n,"__esModule",{value:!0});var u=o(e("q1tI")),i=e("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ampFirst,e=void 0!==n&&n,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return e||o&&(void 0!==u&&u)}n.isInAmpMode=a,n.useAmp=function(){return a(u.default.useContext(i.AmpStateContext))}},0:function(t,n,e){e("GcxT"),t.exports=e("nOHt")},"0tVQ":function(t,n,e){e("FlQf"),e("VJsP"),t.exports=e("WEpk").Array.from},"1TCz":function(t,n,e){"use strict";e.r(n);var r=e("hfKm"),o=e.n(r);function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}var i=e("XVgq"),a=e.n(i),f=e("Z7t5"),c=e.n(f);function s(t){return(s="function"===typeof c.a&&"symbol"===typeof a.a?function(t){return typeof t}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":typeof t})(t)}function l(t){return(l="function"===typeof c.a&&"symbol"===s(a.a)?function(t){return s(t)}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":s(t)})(t)}function p(t,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var d=e("Bhuq"),v=e.n(d),h=e("TRZx"),_=e.n(h);function y(t){return(y=_.a?v.a:function(t){return t.__proto__||v()(t)})(t)}var m=e("SqZg"),w=e.n(m);function g(t,n){return(g=_.a||function(t,n){return t.__proto__=n,t})(t,n)}var b=e("8Bbg"),x=e.n(b),k=e("8Kt/"),P=e.n(k),S=e("q1tI"),C=e.n(S);e.d(n,"default",(function(){return E}));var A=C.a.createElement,E=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,y(n).apply(this,arguments))}var e,r,o;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=w()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&g(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps;return A(C.a.Fragment,null,A(P.a,null,A("title",null,"Saymon Souza | Portifolio")),A(n,e))}}])&&u(e.prototype,r),o&&u(e,o),n}(x.a)},"2PDY":function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},"8Kt/":function(t,n,e){"use strict";var r=e("ttDY"),o=e("hfKm"),u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(n,"__esModule",{value:!0});var i=u(e("q1tI")),a=u(e("Xuae")),f=e("lwAK"),c=e("FYa8"),s=e("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[i.default.createElement("meta",{charSet:"utf-8"})];return t||n.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),n}function p(t,n){return"string"===typeof n||"number"===typeof n?t:n.type===i.default.Fragment?t.concat(i.default.Children.toArray(n.props.children).reduce((function(t,n){return"string"===typeof n||"number"===typeof n?t:t.concat(n)}),[])):t.concat(n)}n.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function v(t,n){return t.reduce((function(t,n){var e=i.default.Children.toArray(n.props.children);return t.concat(e)}),[]).reduce(p,[]).reverse().concat(l(n.inAmpMode)).filter(function(){var t=new r,n=new r,e=new r,o={};return function(u){var i=!0;if(u.key&&"number"!==typeof u.key&&u.key.indexOf("$")>0){var a=u.key.slice(u.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(u.type){case"title":case"base":n.has(u.type)?i=!1:n.add(u.type);break;case"meta":for(var f=0,c=d.length;f<c;f++){var s=d[f];if(u.props.hasOwnProperty(s))if("charSet"===s)e.has(s)?i=!1:e.add(s);else{var l=u.props[s],p=o[s]||new r;p.has(l)?i=!1:(p.add(l),o[s]=p)}}}return i}}()).reverse().map((function(t,n){var e=t.key||n;return i.default.cloneElement(t,{key:e})}))}var h=a.default();function _(t){var n=t.children;return i.default.createElement(f.AmpStateContext.Consumer,null,(function(t){return i.default.createElement(c.HeadManagerContext.Consumer,null,(function(e){return i.default.createElement(h,{reduceComponentsToState:v,handleStateChange:e,inAmpMode:s.isInAmpMode(t)},n)}))}))}_.rewind=h.rewind,n.default=_},"8iia":function(t,n,e){var r=e("QMMT"),o=e("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},B5Ud:function(t,n,e){"use strict";var r=e("Qetd"),o=e("/HRN"),u=e("WaGi"),i=e("ZDA2"),a=e("/+P4"),f=e("N9n2"),c=e("ln6h"),s=e("KI45");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=h,n.default=void 0;var l=s(e("q1tI")),p=e("g/15");function d(t){var n,e,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.Component,e=t.ctx,o.next=3,c.awrap((0,p.loadGetInitialProps)(n,e));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}))}n.AppInitialProps=p.AppInitialProps;var v=function(t){function n(){return o(this,n),i(this,a(n).apply(this,arguments))}return f(n,t),u(n,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,o=t.pageProps,u=h(n);return l.default.createElement(e,r({},o,{url:u}))}}]),n}(l.default.Component);function h(t){var n=t.pathname,e=t.asPath,r=t.query;return{get query(){return r},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var r=e?n:"",o=e||n;return t.push(r,o)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var r=e?n:"",o=e||n;return t.replace(r,o)}}}n.default=v,v.origGetInitialProps=d,v.getInitialProps=d},B9jh:function(t,n,e){"use strict";var r=e("Wu5q"),o=e("n3ko");t.exports=e("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FYa8:function(t,n,e){"use strict";var r=e("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};r(n,"__esModule",{value:!0});var u=o(e("q1tI"));n.HeadManagerContext=u.createContext(null)},GcxT:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},IP1Z:function(t,n,e){"use strict";var r=e("2faE"),o=e("rr1i");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},PQJW:function(t,n,e){var r=e("d04V"),o=e("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,n,e){var r=e("oioR");t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},TbGu:function(t,n,e){var r=e("fGSI"),o=e("PQJW"),u=e("2PDY");t.exports=function(t){return r(t)||o(t)||u()}},"V+O7":function(t,n,e){e("aPfg")("Set")},VJsP:function(t,n,e){"use strict";var r=e("2GTP"),o=e("Y7ZC"),u=e("JB68"),i=e("sNwI"),a=e("NwJ3"),f=e("tEej"),c=e("IP1Z"),s=e("fNZA");o(o.S+o.F*!e("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=u(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,_=void 0!==h,y=0,m=s(p);if(_&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&a(m))for(e=new d(n=f(p.length));n>y;y++)c(e,y,_?h(p[y],y):p[y]);else for(l=m.call(p),e=new d;!(o=l.next()).done;y++)c(e,y,_?i(l,h,[o.value,y],!0):o.value);return e.length=y,e}})},Wu5q:function(t,n,e){"use strict";var r=e("2faE").f,o=e("oVml"),u=e("XJU/"),i=e("2GTP"),a=e("EXMj"),f=e("oioR"),c=e("MPFp"),s=e("UO39"),l=e("TJWN"),p=e("jmDH"),d=e("6/1s").fastKey,v=e("n3ko"),h=p?"_s":"size",_=function(t,n){var e,r=d(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,c){var s=t((function(t,r){a(t,s,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&f(r,e,t[c],t)}));return u(s.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var e=v(this,n),r=_(e,t);if(r){var o=r.n,u=r.p;delete e._i[r.i],r.r=!0,u&&(u.n=o),o&&(o.p=u),e._f==r&&(e._f=o),e._l==r&&(e._l=u),e[h]--}return!!r},forEach:function(t){v(this,n);for(var e,r=i(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!_(v(this,n),t)}}),p&&r(s.prototype,"size",{get:function(){return v(this,n)[h]}}),s},def:function(t,n,e){var r,o,u=_(t,n);return u?u.v=e:(t._l=u={i:o=d(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=u),r&&(r.n=u),t[h]++,"F"!==o&&(t._i[o]=u)),t},getEntry:_,setStrong:function(t,n,e){c(t,n,(function(t,e){this._t=v(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))}),e?"entries":"values",!e,!0),l(n)}}},Xuae:function(t,n,e){"use strict";var r=e("/HRN"),o=e("ZDA2"),u=e("/+P4"),i=e("K47E"),a=e("WaGi"),f=e("N9n2"),c=e("TbGu"),s=e("ttDY");e("hfKm")(n,"__esModule",{value:!0});var l=e("q1tI"),p=!1;n.default=function(){var t,n=new s;function e(e){t=e.props.reduceComponentsToState(c(n),e.props),e.props.handleStateChange&&e.props.handleStateChange(t)}return function(c){function s(t){var a;return r(this,s),a=o(this,u(s).call(this,t)),p&&(n.add(i(a)),e(i(a))),a}return f(s,c),a(s,null,[{key:"rewind",value:function(){var e=t;return t=void 0,n.clear(),e}}]),a(s,[{key:"componentDidMount",value:function(){n.add(this),e(this)}},{key:"componentDidUpdate",value:function(){e(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),e(this)}},{key:"render",value:function(){return null}}]),s}(l.Component)}},d04V:function(t,n,e){t.exports=e("0tVQ")},dL40:function(t,n,e){var r=e("Y7ZC");r(r.P+r.R,"Set",{toJSON:e("8iia")("Set")})},fGSI:function(t,n,e){var r=e("p0XB");t.exports=function(t){if(r(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},lwAK:function(t,n,e){"use strict";var r=e("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};r(n,"__esModule",{value:!0});var u=o(e("q1tI"));n.AmpStateContext=u.createContext({})},ttDY:function(t,n,e){t.exports=e("+iuc")},xvv9:function(t,n,e){e("cHUd")("Set")}},[[0,0,1,12,13]]]);