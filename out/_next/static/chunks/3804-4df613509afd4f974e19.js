(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3804],{3096:function(e,t,n){var i="Expected a function",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,f=u||c||Function("return this")(),p=Object.prototype.toString,d=Math.max,h=Math.min,v=function(){return f.Date.now()};function y(e,t,n){var r,o,a,s,l,u,c=0,f=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,s=e.apply(i,n)}function w(e){return c=e,l=setTimeout(S,t),f?g(e):s}function O(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=a}function S(){var e=v();if(O(e))return P(e);l=setTimeout(S,function(e){var n=t-(e-u);return p?h(n,a-(e-c)):n}(e))}function P(e){return l=void 0,y&&r?g(e):(r=o=void 0,s)}function k(){var e=v(),n=O(e);if(r=arguments,o=this,u=e,n){if(void 0===l)return w(u);if(p)return l=setTimeout(S,t),g(u)}return void 0===l&&(l=setTimeout(S,t)),s}return t=b(t)||0,m(n)&&(f=!!n.leading,a=(p="maxWait"in n)?d(b(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=o=l=void 0},k.flush=function(){return void 0===l?s:P(v())},k}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})}},2167:function(e,t,n){"use strict";var i=n(3038);t.default=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(1063),s=n(4651),l=n(7426);var u={};function c(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;u[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),f=o.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?a.resolveHref(r,e.as):s||o}}),[r,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),O=i(w,2),S=O[0],P=O[1],k=o.default.useCallback((function(e){S(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,S]);o.default.useEffect((function(){var e=P&&n&&a.isLocalURL(p),t="undefined"!==typeof b?b:r&&r.locale,i=u[p+"%"+d+(t?"%"+t:"")];e&&!i&&c(r,p,d,{locale:t})}),[d,p,P,b,n,r]);var T={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,i,{shallow:o,locale:l,scroll:s}))}(e,r,p,d,v,y,m,b)},onMouseEnter:function(e){a.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(r,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var V="undefined"!==typeof b?b:r&&r.locale,j=r&&r.isLocaleDomain&&a.getDomainLocale(d,V,r&&r.locales,r&&r.domainLocales);T.href=j||a.addBasePath(a.addLocale(d,V,r&&r.defaultLocale))}return o.default.cloneElement(t,T)};t.default=f},7426:function(e,t,n){"use strict";var i=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=r.useRef(),u=r.useState(!1),c=i(u,2),f=c[0],p=c[1],d=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return r.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[d,f]};var r=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},1317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e){return e&&e.__esModule?e:{default:e}}var o=n(7294),a=r(o),s=r(n(3096)),l=r(n(5697)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var i=!0;i;){var r=e,o=t,a=n;i=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=o,n=a,i=!0,s=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"===typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return a.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(o.Component);t.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},e.exports=t.default},4925:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return i}})}}]);