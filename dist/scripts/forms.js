(function(){function n(n){function t(t,e,r,i,o,u){for(;o>=0&&u>o;o+=n){var a=i?i[o]:o;r=e(r,t[a],a,t)}return r}return function(e,r,i,o){r=b(r,o,4);var u=!S(e)&&y.keys(e),a=(u||e).length,s=n>0?0:a-1;return arguments.length<3&&(i=e[u?u[s]:s],s+=n),t(e,r,i,u,s,a)}}function t(n){return function(t,e,r){e=x(e,r);for(var i=O(t),o=n>0?0:i-1;o>=0&&i>o;o+=n)if(e(t[o],o,t))return o;return-1}}function e(n,t,e){return function(r,i,o){var u=0,a=O(r);if("number"==typeof o)n>0?u=o>=0?o:Math.max(o+a,u):a=o>=0?Math.min(o+1,a):o+a+1;else if(e&&o&&a)return o=e(r,i),r[o]===i?o:-1;if(i!==i)return o=t(l.call(r,u,a),y.isNaN),o>=0?o+u:-1;for(o=n>0?u:a-1;o>=0&&a>o;o+=n)if(r[o]===i)return o;return-1}}function r(n,t){var e=T.length,r=n.constructor,i=y.isFunction(r)&&r.prototype||a,o="constructor";for(y.has(n,o)&&!y.contains(t,o)&&t.push(o);e--;)o=T[e],o in n&&n[o]!==i[o]&&!y.contains(t,o)&&t.push(o)}var i=this,o=i._,u=Array.prototype,a=Object.prototype,s=Function.prototype,c=u.push,l=u.slice,f=a.toString,p=a.hasOwnProperty,d=Array.isArray,h=Object.keys,v=s.bind,m=Object.create,g=function(){},y=function(n){return n instanceof y?n:this instanceof y?void(this._wrapped=n):new y(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=y),exports._=y):i._=y,y.VERSION="1.8.3";var b=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)};case 4:return function(e,r,i,o){return n.call(t,e,r,i,o)}}return function(){return n.apply(t,arguments)}},x=function(n,t,e){return null==n?y.identity:y.isFunction(n)?b(n,t,e):y.isObject(n)?y.matcher(n):y.property(n)};y.iteratee=function(n,t){return x(n,t,1/0)};var E=function(n,t){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var i=1;r>i;i++)for(var o=arguments[i],u=n(o),a=u.length,s=0;a>s;s++){var c=u[s];t&&void 0!==e[c]||(e[c]=o[c])}return e}},w=function(n){if(!y.isObject(n))return{};if(m)return m(n);g.prototype=n;var t=new g;return g.prototype=null,t},j=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=j("length"),S=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};y.each=y.forEach=function(n,t,e){t=b(t,e);var r,i;if(S(n))for(r=0,i=n.length;i>r;r++)t(n[r],r,n);else{var o=y.keys(n);for(r=0,i=o.length;i>r;r++)t(n[o[r]],o[r],n)}return n},y.map=y.collect=function(n,t,e){t=x(t,e);for(var r=!S(n)&&y.keys(n),i=(r||n).length,o=Array(i),u=0;i>u;u++){var a=r?r[u]:u;o[u]=t(n[a],a,n)}return o},y.reduce=y.foldl=y.inject=n(1),y.reduceRight=y.foldr=n(-1),y.find=y.detect=function(n,t,e){var r;return r=S(n)?y.findIndex(n,t,e):y.findKey(n,t,e),void 0!==r&&r!==-1?n[r]:void 0},y.filter=y.select=function(n,t,e){var r=[];return t=x(t,e),y.each(n,function(n,e,i){t(n,e,i)&&r.push(n)}),r},y.reject=function(n,t,e){return y.filter(n,y.negate(x(t)),e)},y.every=y.all=function(n,t,e){t=x(t,e);for(var r=!S(n)&&y.keys(n),i=(r||n).length,o=0;i>o;o++){var u=r?r[o]:o;if(!t(n[u],u,n))return!1}return!0},y.some=y.any=function(n,t,e){t=x(t,e);for(var r=!S(n)&&y.keys(n),i=(r||n).length,o=0;i>o;o++){var u=r?r[o]:o;if(t(n[u],u,n))return!0}return!1},y.contains=y.includes=y.include=function(n,t,e,r){return S(n)||(n=y.values(n)),("number"!=typeof e||r)&&(e=0),y.indexOf(n,t,e)>=0},y.invoke=function(n,t){var e=l.call(arguments,2),r=y.isFunction(t);return y.map(n,function(n){var i=r?t:n[t];return null==i?i:i.apply(n,e)})},y.pluck=function(n,t){return y.map(n,y.property(t))},y.where=function(n,t){return y.filter(n,y.matcher(t))},y.findWhere=function(n,t){return y.find(n,y.matcher(t))},y.max=function(n,t,e){var r,i,o=-1/0,u=-1/0;if(null==t&&null!=n){n=S(n)?n:y.values(n);for(var a=0,s=n.length;s>a;a++)r=n[a],r>o&&(o=r)}else t=x(t,e),y.each(n,function(n,e,r){i=t(n,e,r),(i>u||i===-1/0&&o===-1/0)&&(o=n,u=i)});return o},y.min=function(n,t,e){var r,i,o=1/0,u=1/0;if(null==t&&null!=n){n=S(n)?n:y.values(n);for(var a=0,s=n.length;s>a;a++)r=n[a],o>r&&(o=r)}else t=x(t,e),y.each(n,function(n,e,r){i=t(n,e,r),(u>i||1/0===i&&1/0===o)&&(o=n,u=i)});return o},y.shuffle=function(n){for(var t,e=S(n)?n:y.values(n),r=e.length,i=Array(r),o=0;r>o;o++)t=y.random(0,o),t!==o&&(i[o]=i[t]),i[t]=e[o];return i},y.sample=function(n,t,e){return null==t||e?(S(n)||(n=y.values(n)),n[y.random(n.length-1)]):y.shuffle(n).slice(0,Math.max(0,t))},y.sortBy=function(n,t,e){return t=x(t,e),y.pluck(y.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return n.index-t.index}),"value")};var _=function(n){return function(t,e,r){var i={};return e=x(e,r),y.each(t,function(r,o){var u=e(r,o,t);n(i,r,u)}),i}};y.groupBy=_(function(n,t,e){y.has(n,e)?n[e].push(t):n[e]=[t]}),y.indexBy=_(function(n,t,e){n[e]=t}),y.countBy=_(function(n,t,e){y.has(n,e)?n[e]++:n[e]=1}),y.toArray=function(n){return n?y.isArray(n)?l.call(n):S(n)?y.map(n,y.identity):y.values(n):[]},y.size=function(n){return null==n?0:S(n)?n.length:y.keys(n).length},y.partition=function(n,t,e){t=x(t,e);var r=[],i=[];return y.each(n,function(n,e,o){(t(n,e,o)?r:i).push(n)}),[r,i]},y.first=y.head=y.take=function(n,t,e){return null==n?void 0:null==t||e?n[0]:y.initial(n,n.length-t)},y.initial=function(n,t,e){return l.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},y.last=function(n,t,e){return null==n?void 0:null==t||e?n[n.length-1]:y.rest(n,Math.max(0,n.length-t))},y.rest=y.tail=y.drop=function(n,t,e){return l.call(n,null==t||e?1:t)},y.compact=function(n){return y.filter(n,y.identity)};var N=function(n,t,e,r){for(var i=[],o=0,u=r||0,a=O(n);a>u;u++){var s=n[u];if(S(s)&&(y.isArray(s)||y.isArguments(s))){t||(s=N(s,t,e));var c=0,l=s.length;for(i.length+=l;l>c;)i[o++]=s[c++]}else e||(i[o++]=s)}return i};y.flatten=function(n,t){return N(n,t,!1)},y.without=function(n){return y.difference(n,l.call(arguments,1))},y.uniq=y.unique=function(n,t,e,r){y.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=x(e,r));for(var i=[],o=[],u=0,a=O(n);a>u;u++){var s=n[u],c=e?e(s,u,n):s;t?(u&&o===c||i.push(s),o=c):e?y.contains(o,c)||(o.push(c),i.push(s)):y.contains(i,s)||i.push(s)}return i},y.union=function(){return y.uniq(N(arguments,!0,!0))},y.intersection=function(n){for(var t=[],e=arguments.length,r=0,i=O(n);i>r;r++){var o=n[r];if(!y.contains(t,o)){for(var u=1;e>u&&y.contains(arguments[u],o);u++);u===e&&t.push(o)}}return t},y.difference=function(n){var t=N(arguments,!0,!0,1);return y.filter(n,function(n){return!y.contains(t,n)})},y.zip=function(){return y.unzip(arguments)},y.unzip=function(n){for(var t=n&&y.max(n,O).length||0,e=Array(t),r=0;t>r;r++)e[r]=y.pluck(n,r);return e},y.object=function(n,t){for(var e={},r=0,i=O(n);i>r;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},y.findIndex=t(1),y.findLastIndex=t(-1),y.sortedIndex=function(n,t,e,r){e=x(e,r,1);for(var i=e(t),o=0,u=O(n);u>o;){var a=Math.floor((o+u)/2);e(n[a])<i?o=a+1:u=a}return o},y.indexOf=e(1,y.findIndex,y.sortedIndex),y.lastIndexOf=e(-1,y.findLastIndex),y.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),i=Array(r),o=0;r>o;o++,n+=e)i[o]=n;return i};var k=function(n,t,e,r,i){if(!(r instanceof t))return n.apply(e,i);var o=w(n.prototype),u=n.apply(o,i);return y.isObject(u)?u:o};y.bind=function(n,t){if(v&&n.bind===v)return v.apply(n,l.call(arguments,1));if(!y.isFunction(n))throw new TypeError("Bind must be called on a function");var e=l.call(arguments,2),r=function(){return k(n,r,t,this,e.concat(l.call(arguments)))};return r},y.partial=function(n){var t=l.call(arguments,1),e=function(){for(var r=0,i=t.length,o=Array(i),u=0;i>u;u++)o[u]=t[u]===y?arguments[r++]:t[u];for(;r<arguments.length;)o.push(arguments[r++]);return k(n,e,this,this,o)};return e},y.bindAll=function(n){var t,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)e=arguments[t],n[e]=y.bind(n[e],n);return n},y.memoize=function(n,t){var e=function(r){var i=e.cache,o=""+(t?t.apply(this,arguments):r);return y.has(i,o)||(i[o]=n.apply(this,arguments)),i[o]};return e.cache={},e},y.delay=function(n,t){var e=l.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},y.defer=y.partial(y.delay,y,1),y.throttle=function(n,t,e){var r,i,o,u=null,a=0;e||(e={});var s=function(){a=e.leading===!1?0:y.now(),u=null,o=n.apply(r,i),u||(r=i=null)};return function(){var c=y.now();a||e.leading!==!1||(a=c);var l=t-(c-a);return r=this,i=arguments,0>=l||l>t?(u&&(clearTimeout(u),u=null),a=c,o=n.apply(r,i),u||(r=i=null)):u||e.trailing===!1||(u=setTimeout(s,l)),o}},y.debounce=function(n,t,e){var r,i,o,u,a,s=function(){var c=y.now()-u;t>c&&c>=0?r=setTimeout(s,t-c):(r=null,e||(a=n.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,u=y.now();var c=e&&!r;return r||(r=setTimeout(s,t)),c&&(a=n.apply(o,i),o=i=null),a}},y.wrap=function(n,t){return y.partial(t,n)},y.negate=function(n){return function(){return!n.apply(this,arguments)}},y.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},y.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},y.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),1>=n&&(t=null),e}},y.once=y.partial(y.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];y.keys=function(n){if(!y.isObject(n))return[];if(h)return h(n);var t=[];for(var e in n)y.has(n,e)&&t.push(e);return F&&r(n,t),t},y.allKeys=function(n){if(!y.isObject(n))return[];var t=[];for(var e in n)t.push(e);return F&&r(n,t),t},y.values=function(n){for(var t=y.keys(n),e=t.length,r=Array(e),i=0;e>i;i++)r[i]=n[t[i]];return r},y.mapObject=function(n,t,e){t=x(t,e);for(var r,i=y.keys(n),o=i.length,u={},a=0;o>a;a++)r=i[a],u[r]=t(n[r],r,n);return u},y.pairs=function(n){for(var t=y.keys(n),e=t.length,r=Array(e),i=0;e>i;i++)r[i]=[t[i],n[t[i]]];return r},y.invert=function(n){for(var t={},e=y.keys(n),r=0,i=e.length;i>r;r++)t[n[e[r]]]=e[r];return t},y.functions=y.methods=function(n){var t=[];for(var e in n)y.isFunction(n[e])&&t.push(e);return t.sort()},y.extend=E(y.allKeys),y.extendOwn=y.assign=E(y.keys),y.findKey=function(n,t,e){t=x(t,e);for(var r,i=y.keys(n),o=0,u=i.length;u>o;o++)if(r=i[o],t(n[r],r,n))return r},y.pick=function(n,t,e){var r,i,o={},u=n;if(null==u)return o;y.isFunction(t)?(i=y.allKeys(u),r=b(t,e)):(i=N(arguments,!1,!1,1),r=function(n,t,e){return t in e},u=Object(u));for(var a=0,s=i.length;s>a;a++){var c=i[a],l=u[c];r(l,c,u)&&(o[c]=l)}return o},y.omit=function(n,t,e){if(y.isFunction(t))t=y.negate(t);else{var r=y.map(N(arguments,!1,!1,1),String);t=function(n,t){return!y.contains(r,t)}}return y.pick(n,t,e)},y.defaults=E(y.allKeys,!0),y.create=function(n,t){var e=w(n);return t&&y.extendOwn(e,t),e},y.clone=function(n){return y.isObject(n)?y.isArray(n)?n.slice():y.extend({},n):n},y.tap=function(n,t){return t(n),n},y.isMatch=function(n,t){var e=y.keys(t),r=e.length;if(null==n)return!r;for(var i=Object(n),o=0;r>o;o++){var u=e[o];if(t[u]!==i[u]||!(u in i))return!1}return!0};var M=function(n,t,e,r){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof y&&(n=n._wrapped),t instanceof y&&(t=t._wrapped);var i=f.call(n);if(i!==f.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var o="[object Array]"===i;if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var u=n.constructor,a=t.constructor;if(u!==a&&!(y.isFunction(u)&&u instanceof u&&y.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var s=e.length;s--;)if(e[s]===n)return r[s]===t;if(e.push(n),r.push(t),o){if(s=n.length,s!==t.length)return!1;for(;s--;)if(!M(n[s],t[s],e,r))return!1}else{var c,l=y.keys(n);if(s=l.length,y.keys(t).length!==s)return!1;for(;s--;)if(c=l[s],!y.has(t,c)||!M(n[c],t[c],e,r))return!1}return e.pop(),r.pop(),!0};y.isEqual=function(n,t){return M(n,t)},y.isEmpty=function(n){return null==n||(S(n)&&(y.isArray(n)||y.isString(n)||y.isArguments(n))?0===n.length:0===y.keys(n).length)},y.isElement=function(n){return!(!n||1!==n.nodeType)},y.isArray=d||function(n){return"[object Array]"===f.call(n)},y.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){y["is"+n]=function(t){return f.call(t)==="[object "+n+"]"}}),y.isArguments(arguments)||(y.isArguments=function(n){return y.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(y.isFunction=function(n){return"function"==typeof n||!1}),y.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},y.isNaN=function(n){return y.isNumber(n)&&n!==+n},y.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===f.call(n)},y.isNull=function(n){return null===n},y.isUndefined=function(n){return void 0===n},y.has=function(n,t){return null!=n&&p.call(n,t)},y.noConflict=function(){return i._=o,this},y.identity=function(n){return n},y.constant=function(n){return function(){return n}},y.noop=function(){},y.property=j,y.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},y.matcher=y.matches=function(n){return n=y.extendOwn({},n),function(t){return y.isMatch(t,n)}},y.times=function(n,t,e){var r=Array(Math.max(0,n));t=b(t,e,1);for(var i=0;n>i;i++)r[i]=t(i);return r},y.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},y.now=Date.now||function(){return(new Date).getTime()};var I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},D=y.invert(I),R=function(n){var t=function(t){return n[t]},e="(?:"+y.keys(n).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(i,t):n}};y.escape=R(I),y.unescape=R(D),y.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),y.isFunction(r)?r.call(n):r};var q=0;y.uniqueId=function(n){var t=++q+"";return n?n+t:t},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\u2028|\u2029/g,P=function(n){return"\\"+z[n]};y.template=function(n,t,e){!t&&e&&(t=e),t=y.defaults({},t,y.templateSettings);var r=RegExp([(t.escape||L).source,(t.interpolate||L).source,(t.evaluate||L).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(r,function(t,e,r,u,a){return o+=n.slice(i,a).replace(V,P),i=a+t.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var u=new Function(t.variable||"obj","_",o)}catch(a){throw a.source=o,a}var s=function(n){return u.call(this,n,y)},c=t.variable||"obj";return s.source="function("+c+"){\n"+o+"}",s},y.chain=function(n){var t=y(n);return t._chain=!0,t};var B=function(n,t){return n._chain?y(t).chain():t};y.mixin=function(n){y.each(y.functions(n),function(t){var e=y[t]=n[t];y.prototype[t]=function(){var n=[this._wrapped];return c.apply(n,arguments),B(this,e.apply(y,n))}})},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=u[n];y.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],B(this,e)}}),y.each(["concat","join","slice"],function(n){var t=u[n];y.prototype[n]=function(){return B(this,t.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return y})}).call(this),function(n,t,e){"use strict";var r=function(n,t,e){e=i.extend({},i.options,e);var o,u,a=i.runValidations(n,t,e);for(o in a)for(u in a[o])if(i.isPromise(a[o][u]))throw new Error("Use validate.async if you want support for promises");return r.processValidationResults(a,e)},i=r;i.extend=function(n){return[].slice.call(arguments,1).forEach(function(t){for(var e in t)n[e]=t[e]}),n},i.extend(r,{version:{major:0,minor:11,patch:1,metadata:null,toString:function(){var n=i.format("%{major}.%{minor}.%{patch}",i.version);return i.isEmpty(i.version.metadata)||(n+="+"+i.version.metadata),n}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(n,t,e){var r,o,u,a,s,c,l,f=[];(i.isDomElement(n)||i.isJqueryElement(n))&&(n=i.collectFormValues(n));for(r in t){u=i.getDeepObjectValue(n,r),a=i.result(t[r],u,n,r,e,t);for(o in a){if(s=i.validators[o],!s)throw l=i.format("Unknown validator %{name}",{name:o}),new Error(l);c=a[o],c=i.result(c,u,n,r,e,t),c&&f.push({attribute:r,value:u,validator:o,globalOptions:e,attributes:n,options:c,error:s.call(s,u,c,r,n,e)})}}return f},processValidationResults:function(n,t){n=i.pruneEmptyErrors(n,t),n=i.expandMultipleErrors(n,t),n=i.convertErrorMessages(n,t);var e=t.format||"grouped";if("function"!=typeof i.formatters[e])throw new Error(i.format("Unknown format %{format}",t));return n=i.formatters[e](n),i.isEmpty(n)?void 0:n},async:function(n,t,e){e=i.extend({},i.async.options,e);var r=e.wrapErrors||function(n){return n};e.cleanAttributes!==!1&&(n=i.cleanAttributes(n,t));var o=i.runValidations(n,t,e);return new i.Promise(function(u,a){i.waitForResults(o).then(function(){var s=i.processValidationResults(o,e);s?a(new r(s,e,n,t)):u(n)},function(n){a(n)})})},single:function(n,t,e){return e=i.extend({},i.single.options,e,{format:"flat",fullMessages:!1}),i({single:n},{single:t},e)},waitForResults:function(n){return n.reduce(function(n,t){return i.isPromise(t.error)?n.then(function(){return t.error.then(function(n){t.error=n||null})}):n},new i.Promise(function(n){n()}))},result:function(n){var t=[].slice.call(arguments,1);return"function"==typeof n&&(n=n.apply(null,t)),n},isNumber:function(n){return"number"==typeof n&&!isNaN(n)},isFunction:function(n){return"function"==typeof n},isInteger:function(n){return i.isNumber(n)&&n%1===0},isBoolean:function(n){return"boolean"==typeof n},isObject:function(n){return n===Object(n)},isDate:function(n){return n instanceof Date},isDefined:function(n){return null!==n&&void 0!==n},isPromise:function(n){return!!n&&i.isFunction(n.then)},isJqueryElement:function(n){return n&&i.isString(n.jquery)},isDomElement:function(n){return!!(n&&n.querySelectorAll&&n.querySelector)&&(!(!i.isObject(document)||n!==document)||("object"==typeof HTMLElement?n instanceof HTMLElement:n&&"object"==typeof n&&null!==n&&1===n.nodeType&&"string"==typeof n.nodeName))},isEmpty:function(n){var t;if(!i.isDefined(n))return!0;if(i.isFunction(n))return!1;if(i.isString(n))return i.EMPTY_STRING_REGEXP.test(n);if(i.isArray(n))return 0===n.length;if(i.isDate(n))return!1;if(i.isObject(n)){for(t in n)return!1;return!0}return!1},format:i.extend(function(n,t){return i.isString(n)?n.replace(i.format.FORMAT_REGEXP,function(n,e,r){return"%"===e?"%{"+r+"}":String(t[r])}):n},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(n){return i.isNumber(n)?100*n%1===0?""+n:parseFloat(Math.round(100*n)/100).toFixed(2):i.isArray(n)?n.map(function(n){return i.prettify(n)}).join(", "):i.isObject(n)?n.toString():(n=""+n,n.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(n,t,e){return""+t+" "+e.toLowerCase()}).toLowerCase())},stringifyValue:function(n){return i.prettify(n)},isString:function(n){return"string"==typeof n},isArray:function(n){return"[object Array]"==={}.toString.call(n)},isHash:function(n){return i.isObject(n)&&!i.isArray(n)&&!i.isFunction(n)},contains:function(n,t){return!!i.isDefined(n)&&(i.isArray(n)?-1!==n.indexOf(t):t in n)},unique:function(n){return i.isArray(n)?n.filter(function(n,t,e){return e.indexOf(n)==t}):n},forEachKeyInKeypath:function(n,t,e){if(i.isString(t)){var r,o="",u=!1;for(r=0;r<t.length;++r)switch(t[r]){case".":u?(u=!1,o+="."):(n=e(n,o,!1),o="");break;case"\\":u?(u=!1,o+="\\"):u=!0;break;default:u=!1,o+=t[r]}return e(n,o,!0)}},getDeepObjectValue:function(n,t){return i.isObject(n)?i.forEachKeyInKeypath(n,t,function(n,t){return i.isObject(n)?n[t]:void 0}):void 0},collectFormValues:function(n,t){var e,r,o,u,a,s,c={};if(i.isJqueryElement(n)&&(n=n[0]),!n)return c;for(t=t||{},u=n.querySelectorAll("input[name], textarea[name]"),e=0;e<u.length;++e)o=u.item(e),i.isDefined(o.getAttribute("data-ignored"))||(s=i.sanitizeFormValue(o.value,t),"number"===o.type?s=s?+s:null:"checkbox"===o.type?o.attributes.value?o.checked||(s=c[o.name]||null):s=o.checked:"radio"===o.type&&(o.checked||(s=c[o.name]||null)),c[o.name]=s);for(u=n.querySelectorAll("select[name]"),e=0;e<u.length;++e){if(o=u.item(e),o.multiple){s=[];for(r in o.options)a=o.options[r],a.selected&&s.push(i.sanitizeFormValue(a.value,t))}else s=i.sanitizeFormValue(o.options[o.selectedIndex].value,t);c[o.name]=s}return c},sanitizeFormValue:function(n,t){return t.trim&&i.isString(n)&&(n=n.trim()),t.nullify!==!1&&""===n?null:n},capitalize:function(n){return i.isString(n)?n[0].toUpperCase()+n.slice(1):n},pruneEmptyErrors:function(n){return n.filter(function(n){return!i.isEmpty(n.error)})},expandMultipleErrors:function(n){var t=[];return n.forEach(function(n){i.isArray(n.error)?n.error.forEach(function(e){t.push(i.extend({},n,{error:e}))}):t.push(n)}),t},convertErrorMessages:function(n,t){t=t||{};var e=[];return n.forEach(function(n){var r=i.result(n.error,n.value,n.attribute,n.options,n.attributes,n.globalOptions);return i.isString(r)?("^"===r[0]?r=r.slice(1):t.fullMessages!==!1&&(r=i.capitalize(i.prettify(n.attribute))+" "+r),r=r.replace(/\\\^/g,"^"),r=i.format(r,{value:i.stringifyValue(n.value)}),void e.push(i.extend({},n,{error:r}))):void e.push(n)}),e},groupErrorsByAttribute:function(n){var t={};return n.forEach(function(n){var e=t[n.attribute];e?e.push(n):t[n.attribute]=[n]}),t},flattenErrorsToArray:function(n){return n.map(function(n){return n.error}).filter(function(n,t,e){return e.indexOf(n)===t})},cleanAttributes:function(n,t){function e(n,t,e){return i.isObject(n[t])?n[t]:n[t]=!!e||{}}function r(n){var t,r={};for(t in n)n[t]&&i.forEachKeyInKeypath(r,t,e);return r}function o(n,t){if(!i.isObject(n))return n;var e,r,u=i.extend({},n);for(r in n)e=t[r],i.isObject(e)?u[r]=o(u[r],e):e||delete u[r];return u}return i.isObject(t)&&i.isObject(n)?(t=r(t),o(n,t)):{}},exposeModule:function(n,t,e,r,i){e?(r&&r.exports&&(e=r.exports=n),e.validate=n):(t.validate=n,n.isFunction(i)&&i.amd&&i([],function(){return n}))},warn:function(n){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+n)},error:function(n){"undefined"!=typeof console&&console.error&&console.error("[validate.js] "+n)}}),r.validators={presence:function(n,t){return t=i.extend({},this.options,t),(t.allowEmpty?!i.isDefined(n):i.isEmpty(n))?t.message||this.message||"can't be blank":void 0},length:function(n,t,e){if(i.isDefined(n)){t=i.extend({},this.options,t);var r,o=t.is,u=t.maximum,a=t.minimum,s=t.tokenizer||function(n){return n},c=[];n=s(n);var l=n.length;return i.isNumber(l)?(i.isNumber(o)&&l!==o&&(r=t.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",c.push(i.format(r,{count:o}))),i.isNumber(a)&&a>l&&(r=t.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",c.push(i.format(r,{count:a}))),i.isNumber(u)&&l>u&&(r=t.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",c.push(i.format(r,{count:u}))),c.length>0?t.message||c:void 0):(i.error(i.format("Attribute %{attr} has a non numeric value for `length`",{attr:e})),t.message||this.notValid||"has an incorrect length")}},numericality:function(n,t){if(i.isDefined(n)){t=i.extend({},this.options,t);var e,r,o=[],u={greaterThan:function(n,t){return n>t},greaterThanOrEqualTo:function(n,t){return n>=t},equalTo:function(n,t){return n===t},lessThan:function(n,t){return t>n},lessThanOrEqualTo:function(n,t){return t>=n},divisibleBy:function(n,t){return n%t===0}};if(i.isString(n)&&t.strict){var a="^(0|[1-9]\\d*)";if(t.onlyInteger||(a+="(\\.\\d+)?"),a+="$",!new RegExp(a).test(n))return t.message||t.notValid||this.notValid||this.message||"must be a valid number"}if(t.noStrings!==!0&&i.isString(n)&&!i.isEmpty(n)&&(n=+n),!i.isNumber(n))return t.message||t.notValid||this.notValid||this.message||"is not a number";if(t.onlyInteger&&!i.isInteger(n))return t.message||t.notInteger||this.notInteger||this.message||"must be an integer";for(e in u)if(r=t[e],i.isNumber(r)&&!u[e](n,r)){var s="not"+i.capitalize(e),c=t[s]||this[s]||this.message||"must be %{type} %{count}";o.push(i.format(c,{count:r,type:i.prettify(e)}))}return t.odd&&n%2!==1&&o.push(t.notOdd||this.notOdd||this.message||"must be odd"),t.even&&n%2!==0&&o.push(t.notEven||this.notEven||this.message||"must be even"),o.length?t.message||o:void 0}},datetime:i.extend(function(n,t){if(!i.isFunction(this.parse)||!i.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(i.isDefined(n)){t=i.extend({},this.options,t);var e,r=[],o=t.earliest?this.parse(t.earliest,t):NaN,u=t.latest?this.parse(t.latest,t):NaN;return n=this.parse(n,t),isNaN(n)||t.dateOnly&&n%864e5!==0?(e=t.notValid||t.message||this.notValid||"must be a valid date",i.format(e,{value:arguments[0]})):(!isNaN(o)&&o>n&&(e=t.tooEarly||t.message||this.tooEarly||"must be no earlier than %{date}",e=i.format(e,{value:this.format(n,t),date:this.format(o,t)}),r.push(e)),!isNaN(u)&&n>u&&(e=t.tooLate||t.message||this.tooLate||"must be no later than %{date}",e=i.format(e,{date:this.format(u,t),value:this.format(n,t)}),r.push(e)),r.length?i.unique(r):void 0)}},{parse:null,format:null}),date:function(n,t){return t=i.extend({},t,{dateOnly:!0}),i.validators.datetime.call(i.validators.datetime,n,t)},format:function(n,t){(i.isString(t)||t instanceof RegExp)&&(t={pattern:t}),t=i.extend({},this.options,t);var e,r=t.message||this.message||"is invalid",o=t.pattern;return i.isDefined(n)?i.isString(n)?(i.isString(o)&&(o=new RegExp(t.pattern,t.flags)),e=o.exec(n),e&&e[0].length==n.length?void 0:r):r:void 0},inclusion:function(n,t){if(i.isDefined(n)&&(i.isArray(t)&&(t={within:t}),t=i.extend({},this.options,t),!i.contains(t.within,n))){var e=t.message||this.message||"^%{value} is not included in the list";return i.format(e,{value:n})}},exclusion:function(n,t){if(i.isDefined(n)&&(i.isArray(t)&&(t={within:t}),t=i.extend({},this.options,t),i.contains(t.within,n))){var e=t.message||this.message||"^%{value} is restricted";return i.format(e,{value:n})}},email:i.extend(function(n,t){t=i.extend({},this.options,t);var e=t.message||this.message||"is not a valid email";if(i.isDefined(n))return i.isString(n)&&this.PATTERN.exec(n)?void 0:e},{PATTERN:/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i}),equality:function(n,t,e,r){if(i.isDefined(n)){i.isString(t)&&(t={attribute:t}),t=i.extend({},this.options,t);var o=t.message||this.message||"is not equal to %{attribute}";if(i.isEmpty(t.attribute)||!i.isString(t.attribute))throw new Error("The attribute must be a non empty string");var u=i.getDeepObjectValue(r,t.attribute),a=t.comparator||function(n,t){return n===t};return a(n,u,t,e,r)?void 0:i.format(o,{attribute:i.prettify(t.attribute)})}},url:function(n,t){if(i.isDefined(n)){t=i.extend({},this.options,t);var e=t.message||this.message||"is not a valid url",r=t.schemes||this.schemes||["http","https"],o=t.allowLocal||this.allowLocal||!1;if(!i.isString(n))return e;var u="^(?:(?:"+r.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",a="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";o?a+="?":u+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",u+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+a+")(?::\\d{2,5})?(?:[/?#]\\S*)?$";var s=new RegExp(u,"i");return s.exec(n)?void 0:e}}},r.formatters={detailed:function(n){return n},flat:i.flattenErrorsToArray,grouped:function(n){var t;n=i.groupErrorsByAttribute(n);for(t in n)n[t]=i.flattenErrorsToArray(n[t]);return n},constraint:function(n){var t;n=i.groupErrorsByAttribute(n);for(t in n)n[t]=n[t].map(function(n){return n.validator}).sort();return n}},r.exposeModule(r,this,n,t,e)}.call(this,"undefined"!=typeof exports?exports:null,"undefined"!=typeof module?module:null,"undefined"!=typeof define?define:null);var alpha=function(){!function(){function n(n){var t=validate(l,c)||{};i(this,t[this.name]),e()}function t(n,t){e();var i=validate(n,c);r(n,i||{}),i||s()}function e(){$("#alpha-signup .success-message:visible").hide()}function r(n,t){_.each(n.querySelectorAll("input[name], select[name]"),function(n){i(n,t&&t[n.name])})}function i(n,t){var e=o(n.parentNode,"form-group"),r=e.querySelector(".messageBox");u(e),t?(e.classList.add("error"),_.each(t,function(n){a(r,n)})):e.classList.add("valid")}function o(n,t){return n&&n!=document?n.classList.contains(t)?n:o(n.parentNode,t):null}function u(n){n.classList.remove("error"),n.classList.remove("valid"),_.each(n.querySelectorAll(".help-block.error"),function(n){n.parentNode.removeChild(n)})}function a(n,t){var e=document.createElement("p");e.classList.add("help-block"),e.classList.add("error"),e.innerText=t,n.appendChild(e)}function s(n){var t=$("#alpha-signup"),e=t.find("#email").val(),r=encodeURIComponent(e),i=t.attr("action")+r,o=t.find('input[type="submit"]'),u=o.val();t.prop("disabled",!0),o.prop("disabled",!0).prop("value","Please wait..."),$.ajax({url:i,dataType:"text",type:"PUT"}).always(function(){t.prop("disabled",!1),o.prop("disabled",!1).prop("value",u)}).done(function(n,t,e){$("#alpha-signup .show-on-success").fadeIn(500),console.log(n+" | "+t+" | "+e)}).fail(function(n,t,e){var r=n.status/100==4?"Please enter a valid email":"Something went wrong. Please try again later.";$("#alpha-signup .show-on-fail p.mb").text(r),$("#alpha-signup .show-on-fail").fadeIn(500)})}var c={email:{presence:!0,email:!0},honey:{length:{minimum:0,maximum:0,tooLong:", you're a robot!"}}},l=document.querySelector("form#alpha-signup");l.addEventListener("submit",function(n){n.preventDefault(),t(l)});for(var f=document.querySelectorAll("input, textarea, select"),p=0;p<f.length;++p)f.item(p).addEventListener("change",n),f.item(p).addEventListener("keyup",n)}()};$(function(){alpha()});