import{c1 as t,bk as n,c2 as r}from"./index.Buyu3njk.js";var i=/\s/;var e=/^\s+/;function u(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(e,""):t}var o=NaN,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,v=parseInt;function s(r){if("number"==typeof r)return r;if(t(r))return o;if(n(r)){var i="function"==typeof r.valueOf?r.valueOf():r;r=n(i)?i+"":i}if("string"!=typeof r)return 0===r?r:+r;r=u(r);var e=f.test(r);return e||c.test(r)?v(r.slice(2),e?2:8):a.test(r)?o:+r}var l=function(){return r.Date.now()},d=Math.max,m=Math.min;function p(t,r,i){var e,u,o,a,f,c,v=0,p=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(n){var r=e,i=u;return e=u=void 0,v=n,a=t.apply(i,r)}function y(t){var n=t-c;return void 0===c||n>=r||n<0||h&&t-v>=o}function g(){var t=l();if(y(t))return b(t);f=setTimeout(g,function(t){var n=r-(t-c);return h?m(n,o-(t-v)):n}(t))}function b(t){return f=void 0,x&&e?T(t):(e=u=void 0,a)}function w(){var t=l(),n=y(t);if(e=arguments,u=this,c=t,n){if(void 0===f)return function(t){return v=t,f=setTimeout(g,r),p?T(t):a}(c);if(h)return clearTimeout(f),f=setTimeout(g,r),T(c)}return void 0===f&&(f=setTimeout(g,r)),a}return r=s(r)||0,n(i)&&(p=!!i.leading,o=(h="maxWait"in i)?d(s(i.maxWait)||0,r):o,x="trailing"in i?!!i.trailing:x),w.cancel=function(){void 0!==f&&clearTimeout(f),v=0,e=c=u=f=void 0},w.flush=function(){return void 0===f?a:b(l())},w}export{p as d};
