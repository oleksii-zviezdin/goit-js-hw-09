!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o,u=i("6JpON"),f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,d=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,b=v||p||Function("return this")(),y=Object.prototype.toString,g=Math.max,N=Math.min,h=function(){return b.Date.now()};function j(e,t,n){var r,i,o,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function p(e){return l=e,f=setTimeout(y,t),s?v(e):u}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function y(){var e=h();if(b(e))return j(e);f=setTimeout(y,function(e){var n=t-(e-c);return d?N(n,o-(e-l)):n}(e))}function j(e){return f=void 0,m&&r?v(e):(r=i=void 0,u)}function x(){var e=h(),n=b(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return p(c);if(d)return f=setTimeout(y,t),v(c)}return void 0===f&&(f=setTimeout(y,t)),u}return t=O(t)||0,w(n)&&(s=!!n.leading,o=(d="maxWait"in n)?g(O(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},x.flush=function(){return void 0===f?u:j(h())},x}function w(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(w(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=w(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var r=s.test(t);return r||d.test(t)?m(t.slice(2),r?2:8):l.test(t)?NaN:+t}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(a);return w(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),j(e,t,{leading:r,maxWait:t,trailing:i})};var x=document.querySelector('button[type="submit"]'),T=document.querySelector(".form");function E(e,t){return new Promise((function(n,r){var i=Math.random()>.3;setTimeout((function(){i?n("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}x.setAttribute("disabled",""),T.addEventListener("input",e(o)((function(){Number(T.elements.delay.value)&&Number(T.elements.step.value)&&Number(T.elements.amount.value)&&x.removeAttribute("disabled")}),1e3)),T.addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(T.elements.delay.value),r=1;r<=Number(T.elements.amount.value);r+=1)console.log(n),E(r,n).then((function(t){return e(u).Notify.success(t)})).catch((function(t){return e(u).Notify.failure(t)})),n+=Number(T.elements.step.value);T.reset()}))}();
//# sourceMappingURL=03-promises.cbbba416.js.map
