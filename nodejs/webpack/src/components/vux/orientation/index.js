!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vuxOrientation=n():t.vuxOrientation=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(13)},function(t,n){var e=Object;t.exports={create:e.create,getProto:e.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:e.getOwnPropertyDescriptor,setDesc:e.defineProperty,setDescs:e.defineProperties,getKeys:e.keys,getNames:e.getOwnPropertyNames,getSymbols:e.getOwnPropertySymbols,each:[].forEach}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(26),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(10)("wks"),o=e(11),i=e(2).Symbol;t.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(14),i=r(o);n["default"]={bind:function(){var t=this,n=this.expression,e=n.toString()[0].toUpperCase()+n.toString().slice(1);i["default"]["is"+e]()?this.el.style.display="block":this.el.style.display="none",i["default"].change(function(e){var r=i["default"].getInfo();t.el.style.display=r[n]?"block":"none"})},update:function(){},unbind:function(){}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){var n,e={};if(t)for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function i(t,n){return t.bind?t.bind(n):function(){t.apply(n,arguments)}}function u(){this.init.apply(this,arguments)}Object.defineProperty(n,"__esModule",{value:!0});var c=e(16),s=r(c),f="orientationchange",a="resize",p="onorientationchange"in window?f:a,l="function",h="on",d="after";u.prototype={constructor:u,init:function(t){this._cfg=o({delay:400},t),this._subs={on:[],after:[]},this.info=this.getInfo(),this._onWinOrientationChange=i(this._onWinOrientationChange,this),window.addEventListener(p,this._onWinOrientationChange,!1)},destroy:function(){window.removeEventListener(p,this._onWinOrientationChange,!1),delete this._subs},create:function(t){return new u(t)},getInfo:function(){return p===f?{landscape:90===window.orientation||-90===window.orientation,portrait:0===window.orientation||-180===window.orientation,orientation:window.orientation}:{landscape:window.screen.width>window.screen.height,portrait:window.screen.width<=window.screen.height,orientation:window.screen.width>window.screen.height?90:0}},isLandscape:function(){return this.info.landscape},isPortrait:function(){return this.info.portrait},change:function(t,n){return("undefined"==typeof t?"undefined":(0,s["default"])(t))===l&&this._subs[n?d:h].push(t),this},_fireChange:function(t){var n,e,r=this,i=this.getInfo(),u=this._subs;if(i.landscape!==this.info.landscape){for(this.info=o(i),i.originEvent=t,i.originType=t.type,n=0,e=u.on.length;e>n;n++)u.on[n].call(r,t);setTimeout(function(){for(n=0,e=u.after.length;e>n;n++)u.after[n].call(r,t)},0)}},_checkChange:function(t){var n=this;n._cfg.delay?(clearTimeout(this._changeTimer),n._changeTimer=setTimeout(function(){n._fireChange(t)},n._cfg.delay)):n._fireChange(t)},_onWinOrientationChange:function(t){t.type===a?this._fireChange(t):this._checkChange(t)}},n["default"]=u.prototype.create()},function(t,n,e){t.exports={"default":e(17),__esModule:!0}},function(t,n,e){"use strict";var r=e(15)["default"];n["default"]=function(t){return t&&t.constructor===r?"symbol":typeof t},n.__esModule=!0},function(t,n,e){e(34),e(33),t.exports=e(5).Symbol},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(28);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(1);t.exports=function(t){var n=r.getKeys(t),e=r.getSymbols;if(e)for(var o,i=e(t),u=r.isEnum,c=0;i.length>c;)u.call(t,o=i[c++])&&n.push(o);return n}},function(t,n,e){var r=e(2),o=e(5),i=e(20),u="prototype",c=function(t,n,e){var s,f,a,p=t&c.F,l=t&c.G,h=t&c.S,d=t&c.P,y=t&c.B,g=t&c.W,v=l?o:o[n]||(o[n]={}),b=l?r:h?r[n]:(r[n]||{})[u];l&&(e=n);for(s in e)f=!p&&b&&s in b,f&&s in v||(a=f?b[s]:e[s],v[s]=l&&"function"!=typeof b[s]?e[s]:y&&f?i(a,r):g&&b[s]==a?function(t){var n=function(n){return this instanceof t?new t(n):t(n)};return n[u]=t[u],n}(a):d&&"function"==typeof a?i(Function.call,a):a,d&&((v[u]||(v[u]={}))[s]=a))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},function(t,n,e){var r=e(3),o=e(1).getNames,i={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(1),o=e(9);t.exports=e(6)?function(t,n,e){return r.setDesc(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(4);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(4);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(1),o=e(3);t.exports=function(t,n){for(var e,i=o(t),u=r.getKeys(i),c=u.length,s=0;c>s;)if(i[e=u[s++]]===n)return e}},function(t,n){t.exports=!0},function(t,n,e){t.exports=e(25)},function(t,n,e){var r=e(1).setDesc,o=e(8),i=e(12)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(8),u=e(6),c=e(23),s=e(31),f=e(7),a=e(10),p=e(32),l=e(11),h=e(12),d=e(29),y=e(24),g=e(22),v=e(27),b=e(19),w=e(3),m=e(9),_=r.getDesc,x=r.setDesc,S=r.create,O=y.get,P=o.Symbol,j=o.JSON,E=j&&j.stringify,C=!1,M=h("_hidden"),D=r.isEnum,T=a("symbol-registry"),N=a("symbols"),k="function"==typeof P,W=Object.prototype,I=u&&f(function(){return 7!=S(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=_(W,n);r&&delete W[n],x(t,n,e),r&&t!==W&&x(W,n,r)}:x,F=function(t){var n=N[t]=S(P.prototype);return n._k=t,u&&C&&I(W,t,{configurable:!0,set:function(n){i(this,M)&&i(this[M],t)&&(this[M][t]=!1),I(this,t,m(1,n))}}),n},J=function(t){return"symbol"==typeof t},A=function(t,n,e){return e&&i(N,n)?(e.enumerable?(i(t,M)&&t[M][n]&&(t[M][n]=!1),e=S(e,{enumerable:m(0,!1)})):(i(t,M)||x(t,M,m(1,{})),t[M][n]=!0),I(t,n,e)):x(t,n,e)},G=function(t,n){b(t);for(var e,r=g(n=w(n)),o=0,i=r.length;i>o;)A(t,e=r[o++],n[e]);return t},K=function(t,n){return void 0===n?S(t):G(S(t),n)},L=function(t){var n=D.call(this,t);return n||!i(this,t)||!i(N,t)||i(this,M)&&this[M][t]?n:!0},z=function(t,n){var e=_(t=w(t),n);return!e||!i(N,n)||i(t,M)&&t[M][n]||(e.enumerable=!0),e},B=function(t){for(var n,e=O(w(t)),r=[],o=0;e.length>o;)i(N,n=e[o++])||n==M||r.push(n);return r},U=function(t){for(var n,e=O(w(t)),r=[],o=0;e.length>o;)i(N,n=e[o++])&&r.push(N[n]);return r},q=function(t){if(void 0!==t&&!J(t)){for(var n,e,r=[t],o=1,i=arguments;i.length>o;)r.push(i[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&v(n)||(n=function(t,n){return e&&(n=e.call(this,t,n)),J(n)?void 0:n}),r[1]=n,E.apply(j,r)}},H=f(function(){var t=P();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))});k||(P=function(){if(J(this))throw TypeError("Symbol is not a constructor");return F(l(arguments.length>0?arguments[0]:void 0))},s(P.prototype,"toString",function(){return this._k}),J=function(t){return t instanceof P},r.create=K,r.isEnum=L,r.getDesc=z,r.setDesc=A,r.setDescs=G,r.getNames=y.get=B,r.getSymbols=U,u&&!e(30)&&s(W,"propertyIsEnumerable",L,!0));var Q={"for":function(t){return i(T,t+="")?T[t]:T[t]=P(t)},keyFor:function(t){return d(T,t)},useSetter:function(){C=!0},useSimple:function(){C=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var n=h(t);Q[t]=k?n:F(n)}),C=!0,c(c.G+c.W,{Symbol:P}),c(c.S,"Symbol",Q),c(c.S+c.F*!k,"Object",{create:K,defineProperty:A,defineProperties:G,getOwnPropertyDescriptor:z,getOwnPropertyNames:B,getOwnPropertySymbols:U}),j&&c(c.S+c.F*(!k||H),"JSON",{stringify:q}),p(P,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)}])});