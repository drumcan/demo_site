!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.BraintreeOAuthConnect=t()}}(function(){var t;return function n(t,e,r){function i(a,s){if(!e[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=e[a]={exports:{}};t[a][0].call(l.exports,function(n){var e=t[a][1][n];return i(e?e:n)},l,l.exports,n,t,e,r)}return e[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,n,e){"use strict";var r,i=Array.prototype.indexOf;r=i?function(t,n){return t.indexOf(n)}:function(t,n){for(var e=0,r=t.length;r>e;e++)if(t[e]===n)return e;return-1},n.exports={indexOf:r}},{}],2:[function(t,n,e){"use strict";function r(t){var n,e,r="";for(n=0;n<t.length;n++)r+="%",e=t[n].charCodeAt(0).toString(16).toUpperCase(),e.length<2&&(r+="0"),r+=e;return r}function i(t){return decodeURIComponent(r(atob(t)))}n.exports={decodeUtf8:i}},{}],3:[function(t,n,e){"use strict";function r(t,n){if(n=n||"["+t+"] is not a valid DOM Element",t&&t.nodeType&&1===t.nodeType)return t;if(t&&window.jQuery&&(t instanceof jQuery||"jquery"in Object(t))&&0!==t.length)return t[0];if("string"==typeof t&&document.getElementById(t))return document.getElementById(t);throw new Error(n)}n.exports={normalizeElement:r}},{}],4:[function(t,n,e){"use strict";function r(t,n,e,r){t.addEventListener?t.addEventListener(n,e,r||!1):t.attachEvent&&t.attachEvent("on"+n,e)}function i(t,n,e,r){t.removeEventListener?t.removeEventListener(n,e,r||!1):t.detachEvent&&t.detachEvent("on"+n,e)}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}n.exports={addEventListener:r,removeEventListener:i,preventDefault:o}},{}],5:[function(t,n,e){"use strict";function r(t){return"[object Function]"===o.call(t)}function i(t,n){return function(){return t.apply(n,arguments)}}var o=Object.prototype.toString;n.exports={bind:i,isFunction:r}},{}],6:[function(t,n,e){"use strict";function r(t){var n,e,r,i,o=[{min:0,max:180,chars:7},{min:181,max:620,chars:14},{min:621,max:960,chars:22}];for(i=o.length,t=t||window.innerWidth,e=0;i>e;e++)r=o[e],t>=r.min&&t<=r.max&&(n=r.chars);return n||60}function i(t,n){var e,r;return-1===t.indexOf("@")?t:(t=t.split("@"),e=t[0],r=t[1],e.length>n&&(e=e.slice(0,n)+"..."),r.length>n&&(r="..."+r.slice(-n)),e+"@"+r)}n.exports={truncateEmail:i,getMaxCharLength:r}},{}],7:[function(t,n,e){"use strict";function r(){return"https:"===window.location.protocol}function i(t){switch(t){case null:case void 0:return"";case!0:return"1";case!1:return"0";default:return encodeURIComponent(t)}}function o(t,n){var e,r,a=[];for(r in t)if(t.hasOwnProperty(r)){var s=t[r];e=n?n+"["+r+"]":r,"object"==typeof s?a.push(o(s,e)):void 0!==s&&null!==s&&a.push(i(e)+"="+i(s))}return a.join("&")}function a(t){for(var n={},e=t.split("&"),r=0;r<e.length;r++){var i=e[r].split("="),o=i[0],a=decodeURIComponent(i[1]);n[o]=a}return n}function s(t){var n=t.split("?");return 2!==n.length?{}:a(n[1])}function u(t){if(t=t.toLowerCase(),!/^http/.test(t))return!1;l.href=t;var n=l.hostname.split("."),e=n.slice(-2).join(".");return-1!==c.indexOf(f,e)}var c=t("./array"),l=document.createElement("a"),f=["paypal.com","braintreepayments.com","braintreegateway.com","localhost"];n.exports={isBrowserHttps:r,makeQueryString:o,decodeQueryString:a,getParams:s,isWhitelistedDomain:u}},{"./array":1}],8:[function(t,n,e){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0,e="x"===t?n:3&n|8;return e.toString(16)})}n.exports=r},{}],9:[function(t,n,e){var r=t("./lib/dom"),i=t("./lib/url"),o=t("./lib/fn"),a=t("./lib/events"),s=t("./lib/string"),u=t("./lib/array"),c=t("./lib/base64"),l=t("./lib/uuid");n.exports={string:s,array:u,normalizeElement:r.normalizeElement,isBrowserHttps:i.isBrowserHttps,makeQueryString:i.makeQueryString,decodeQueryString:i.decodeQueryString,getParams:i.getParams,isWhitelistedDomain:i.isWhitelistedDomain,removeEventListener:a.removeEventListener,addEventListener:a.addEventListener,preventDefault:a.preventDefault,bind:o.bind,isFunction:o.isFunction,base64ToUtf8:c.decodeUtf8,uuid:l}},{"./lib/array":1,"./lib/base64":2,"./lib/dom":3,"./lib/events":4,"./lib/fn":5,"./lib/string":6,"./lib/url":7,"./lib/uuid":8}],10:[function(n,e,r){(function(n){"use strict";!function(i,o){"object"==typeof r&&"undefined"!=typeof e?e.exports=o("undefined"==typeof n?i:n):"function"==typeof t&&t.amd?t([],function(){return o(i)}):i.framebus=o(i)}(this,function(t){function n(t){return null==t?!1:null==t.Window?!1:t.constructor!==t.Window?!1:(E.push(t),!0)}function e(t){var n,e={};for(n in m)m.hasOwnProperty(n)&&(e[n]=m[n]);return e._origin=t||"*",e}function r(t){var n,e,r=a(this);return s(t)?!1:s(r)?!1:(e=Array.prototype.slice.call(arguments,1),n=u(t,e,r),n===!1?!1:(v(x.top,n,r),!0))}function i(t,n){var e=a(this);return b(t,n,e)?!1:(O[e]=O[e]||{},O[e][t]=O[e][t]||[],O[e][t].push(n),!0)}function o(t,n){var e,r,i=a(this);if(b(t,n,i))return!1;if(r=O[i]&&O[i][t],!r)return!1;for(e=0;e<r.length;e++)if(r[e]===n)return r.splice(e,1),!0;return!1}function a(t){return t&&t._origin||"*"}function s(t){return"string"!=typeof t}function u(t,n,e){var r=!1,i={event:t,origin:e},o=n[n.length-1];"function"==typeof o&&(i.reply=h(o,e),n=n.slice(0,-1)),i.args=n;try{r=j+JSON.stringify(i)}catch(a){throw new Error("Could not stringify event: "+a.message)}return r}function c(t){var n,e,r,i;if(t.data.slice(0,j.length)!==j)return!1;try{n=JSON.parse(t.data.slice(j.length))}catch(o){return!1}return null!=n.reply&&(e=t.origin,r=t.source,i=n.reply,n.reply=function(t){var n=u(i,[t],e);return n===!1?!1:void r.postMessage(n,e)},n.args.push(n.reply)),n}function l(n){x||(x=n||t,x.addEventListener?x.addEventListener("message",p,!1):x.attachEvent?x.attachEvent("onmessage",p):null===x.onmessage?x.onmessage=p:x=null)}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0,e="x"===t?n:3&n|8;return e.toString(16)})}function p(t){var n;s(t.data)||(n=c(t),n&&(d("*",n.event,n.args,t),d(t.origin,n.event,n.args,t),y(t.data,n.origin,t.source)))}function d(t,n,e,r){var i;if(O[t]&&O[t][n])for(i=0;i<O[t][n].length;i++)O[t][n][i].apply(r,e)}function g(t){return t.top!==t?!1:null==t.opener?!1:t.opener===t?!1:t.opener.closed!==!0}function v(t,n,e){var r;try{for(t.postMessage(n,e),g(t)&&v(t.opener.top,n,e),r=0;r<t.frames.length;r++)v(t.frames[r],n,e)}catch(i){}}function y(t,n,e){var r,i;for(r=E.length-1;r>=0;r--)i=E[r],i.closed===!0?E=E.slice(r,1):e!==i&&v(i.top,t,n)}function h(t,n){function e(i,o){t(i,o),m.target(n).unsubscribe(r,e)}var r=f();return m.target(n).subscribe(r,e),r}function b(t,n,e){return s(t)?!0:"function"!=typeof n?!0:!!s(e)}var x,m,E=[],O={},j="/*framebus*/";return l(),m={target:e,include:n,publish:r,pub:r,trigger:r,emit:r,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(t,n,e){"use strict";var r=t("lodash/object/assign"),i=t("lodash/lang/isString"),o=t("setattributes"),a=t("./lib/default-attributes");n.exports=function(t){var n=document.createElement("iframe"),e=r({},a,t);return e.style&&!i(e.style)&&(r(n.style,e.style),delete e.style),o(n,e),n.getAttribute("id")||(n.id=n.name),n}},{"./lib/default-attributes":12,"lodash/lang/isString":33,"lodash/object/assign":34,setattributes:38}],12:[function(t,n,e){n.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],13:[function(t,n,e){function r(t,n){if("function"!=typeof t)throw new TypeError(i);return n=o(void 0===n?t.length-1:+n||0,0),function(){for(var e=arguments,r=-1,i=o(e.length-n,0),a=Array(i);++r<i;)a[r]=e[n+r];switch(n){case 0:return t.call(this,a);case 1:return t.call(this,e[0],a);case 2:return t.call(this,e[0],e[1],a)}var s=Array(n+1);for(r=-1;++r<n;)s[r]=e[r];return s[n]=a,t.apply(this,s)}}var i="Expected a function",o=Math.max;n.exports=r},{}],14:[function(t,n,e){function r(t,n,e){for(var r=-1,o=i(n),a=o.length;++r<a;){var s=o[r],u=t[s],c=e(u,n[s],s,t,n);(c===c?c===u:u!==u)&&(void 0!==u||s in t)||(t[s]=c)}return t}var i=t("../object/keys");n.exports=r},{"../object/keys":35}],15:[function(t,n,e){function r(t,n){return null==n?t:i(n,o(n),t)}var i=t("./baseCopy"),o=t("../object/keys");n.exports=r},{"../object/keys":35,"./baseCopy":16}],16:[function(t,n,e){function r(t,n,e){e||(e={});for(var r=-1,i=n.length;++r<i;){var o=n[r];e[o]=t[o]}return e}n.exports=r},{}],17:[function(t,n,e){function r(t){return function(n){return null==n?void 0:n[t]}}n.exports=r},{}],18:[function(t,n,e){function r(t,n,e){if("function"!=typeof t)return i;if(void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 3:return function(e,r,i){return t.call(n,e,r,i)};case 4:return function(e,r,i,o){return t.call(n,e,r,i,o)};case 5:return function(e,r,i,o,a){return t.call(n,e,r,i,o,a)}}return function(){return t.apply(n,arguments)}}var i=t("../utility/identity");n.exports=r},{"../utility/identity":37}],19:[function(t,n,e){function r(t){return a(function(n,e){var r=-1,a=null==n?0:e.length,s=a>2?e[a-2]:void 0,u=a>2?e[2]:void 0,c=a>1?e[a-1]:void 0;for("function"==typeof s?(s=i(s,c,5),a-=2):(s="function"==typeof c?c:void 0,a-=s?1:0),u&&o(e[0],e[1],u)&&(s=3>a?void 0:s,a=1);++r<a;){var l=e[r];l&&t(n,l,s)}return n})}var i=t("./bindCallback"),o=t("./isIterateeCall"),a=t("../function/restParam");n.exports=r},{"../function/restParam":13,"./bindCallback":18,"./isIterateeCall":24}],20:[function(t,n,e){var r=t("./baseProperty"),i=r("length");n.exports=i},{"./baseProperty":17}],21:[function(t,n,e){function r(t,n){var e=null==t?void 0:t[n];return i(e)?e:void 0}var i=t("../lang/isNative");n.exports=r},{"../lang/isNative":31}],22:[function(t,n,e){function r(t){return null!=t&&o(i(t))}var i=t("./getLength"),o=t("./isLength");n.exports=r},{"./getLength":20,"./isLength":25}],23:[function(t,n,e){function r(t,n){return t="number"==typeof t||i.test(t)?+t:-1,n=null==n?o:n,t>-1&&t%1==0&&n>t}var i=/^\d+$/,o=9007199254740991;n.exports=r},{}],24:[function(t,n,e){function r(t,n,e){if(!a(e))return!1;var r=typeof n;if("number"==r?i(e)&&o(n,e.length):"string"==r&&n in e){var s=e[n];return t===t?t===s:s!==s}return!1}var i=t("./isArrayLike"),o=t("./isIndex"),a=t("../lang/isObject");n.exports=r},{"../lang/isObject":32,"./isArrayLike":22,"./isIndex":23}],25:[function(t,n,e){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&i>=t}var i=9007199254740991;n.exports=r},{}],26:[function(t,n,e){function r(t){return!!t&&"object"==typeof t}n.exports=r},{}],27:[function(t,n,e){function r(t){for(var n=u(t),e=n.length,r=e&&t.length,c=!!r&&s(r)&&(o(t)||i(t)),f=-1,p=[];++f<e;){var d=n[f];(c&&a(d,r)||l.call(t,d))&&p.push(d)}return p}var i=t("../lang/isArguments"),o=t("../lang/isArray"),a=t("./isIndex"),s=t("./isLength"),u=t("../object/keysIn"),c=Object.prototype,l=c.hasOwnProperty;n.exports=r},{"../lang/isArguments":28,"../lang/isArray":29,"../object/keysIn":36,"./isIndex":23,"./isLength":25}],28:[function(t,n,e){function r(t){return o(t)&&i(t)&&s.call(t,"callee")&&!u.call(t,"callee")}var i=t("../internal/isArrayLike"),o=t("../internal/isObjectLike"),a=Object.prototype,s=a.hasOwnProperty,u=a.propertyIsEnumerable;n.exports=r},{"../internal/isArrayLike":22,"../internal/isObjectLike":26}],29:[function(t,n,e){var r=t("../internal/getNative"),i=t("../internal/isLength"),o=t("../internal/isObjectLike"),a="[object Array]",s=Object.prototype,u=s.toString,c=r(Array,"isArray"),l=c||function(t){return o(t)&&i(t.length)&&u.call(t)==a};n.exports=l},{"../internal/getNative":21,"../internal/isLength":25,"../internal/isObjectLike":26}],30:[function(t,n,e){function r(t){return i(t)&&s.call(t)==o}var i=t("./isObject"),o="[object Function]",a=Object.prototype,s=a.toString;n.exports=r},{"./isObject":32}],31:[function(t,n,e){function r(t){return null==t?!1:i(t)?l.test(u.call(t)):o(t)&&a.test(t)}var i=t("./isFunction"),o=t("../internal/isObjectLike"),a=/^\[object .+?Constructor\]$/,s=Object.prototype,u=Function.prototype.toString,c=s.hasOwnProperty,l=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=r},{"../internal/isObjectLike":26,"./isFunction":30}],32:[function(t,n,e){function r(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}n.exports=r},{}],33:[function(t,n,e){function r(t){return"string"==typeof t||i(t)&&s.call(t)==o}var i=t("../internal/isObjectLike"),o="[object String]",a=Object.prototype,s=a.toString;n.exports=r},{"../internal/isObjectLike":26}],34:[function(t,n,e){var r=t("../internal/assignWith"),i=t("../internal/baseAssign"),o=t("../internal/createAssigner"),a=o(function(t,n,e){return e?r(t,n,e):i(t,n)});n.exports=a},{"../internal/assignWith":14,"../internal/baseAssign":15,"../internal/createAssigner":19}],35:[function(t,n,e){var r=t("../internal/getNative"),i=t("../internal/isArrayLike"),o=t("../lang/isObject"),a=t("../internal/shimKeys"),s=r(Object,"keys"),u=s?function(t){var n=null==t?void 0:t.constructor;return"function"==typeof n&&n.prototype===t||"function"!=typeof t&&i(t)?a(t):o(t)?s(t):[]}:a;n.exports=u},{"../internal/getNative":21,"../internal/isArrayLike":22,"../internal/shimKeys":27,"../lang/isObject":32}],36:[function(t,n,e){function r(t){if(null==t)return[];u(t)||(t=Object(t));var n=t.length;n=n&&s(n)&&(o(t)||i(t))&&n||0;for(var e=t.constructor,r=-1,c="function"==typeof e&&e.prototype===t,f=Array(n),p=n>0;++r<n;)f[r]=r+"";for(var d in t)p&&a(d,n)||"constructor"==d&&(c||!l.call(t,d))||f.push(d);return f}var i=t("../lang/isArguments"),o=t("../lang/isArray"),a=t("../internal/isIndex"),s=t("../internal/isLength"),u=t("../lang/isObject"),c=Object.prototype,l=c.hasOwnProperty;n.exports=r},{"../internal/isIndex":23,"../internal/isLength":25,"../lang/isArguments":28,"../lang/isArray":29,"../lang/isObject":32}],37:[function(t,n,e){function r(t){return t}n.exports=r},{}],38:[function(t,n,e){n.exports=function(t,n){var e;for(var r in n)n.hasOwnProperty(r)&&(e=n[r],null==e?t.removeAttribute(r):t.setAttribute(r,e))}},{}],39:[function(t,n,e){"use strict";function r(t){return t.replace(/&amp;/g,"&")}function i(t){var n,e;if(!t.connectUrl)throw new Error("connectUrl required");switch(this.container=s(t.container),this.connectUrl=r(t.connectUrl),t.environment){case"qa":e="qa";break;case"sandbox":e="sandbox";break;default:e="production"}this.environment=e,this.environmentConfig=d[e],l.on(p.CONFIG_REQUEST,u(this._onConfigRequestHandler,this)),l.on(p.REDIRECT_REQUEST,u(this._onRedirectRequestHandler,this)),t.onError&&c(t.onError)&&l.on(p.ON_ERROR,u(t.onError,this)),n=this._createFrame(),this.container.appendChild(n)}var o=t("iframer"),a=t("braintree-utilities"),s=a.normalizeElement,u=a.bind,c=a.isFunction,l=t("framebus"),f=t("../shared/constants"),p=f.events,d=f.environments;i.prototype._createFrame=function(){return o({width:351,height:44,name:"bt-oauth-connect-frame",src:this.environmentConfig.assetsURL+"/braintree-oauth-connect-frame.html"})},i.prototype._onConfigRequestHandler=function(t){t({connectUrl:this.connectUrl,environment:this.environment})},i.prototype._onRedirectRequestHandler=function(){window.location.href=this.connectUrl},n.exports=i},{"../shared/constants":40,"braintree-utilities":9,framebus:10,iframer:11}],40:[function(t,n,e){"use strict";var r="1.1.0",i=r.split(".")[0],o={production:{endpoint:"https://signups.braintreepayments.com",assetsURL:"https://assets.braintreegateway.com/oauth-connect/v"+i,mixpanelId:"f8c8ffab4623d7a419c26c6b942b9f39"},sandbox:{endpoint:"https://signups.sand.braintreepayments.com",assetsURL:"https://assets.braintreegateway.com/oauth-connect/v"+i,mixpanelId:"99168128b81a29a7141340c058ce1b7f"},qa:{endpoint:"https://signups.qa.braintreepayments.com",assetsURL:"https://assets.staging.braintreepayments.com/oauth-connect/v"+i,mixpanelId:"4246c1dcf5b285f42c217d41765b0f80"}};n.exports={environments:o,events:{CONFIG_REQUEST:"CONFIG_REQUEST",CONFIG_RESPONSE:"CONFIG_RESPONSE",REDIRECT_REQUEST:"REDIRECT_REQUEST",ON_ERROR:"ON_ERROR"}}},{}]},{},[39])(39)});