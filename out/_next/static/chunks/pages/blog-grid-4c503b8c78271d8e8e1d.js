(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5581],{351:function(e,s,l){"use strict";l(7294);var a=l(1664),i=l(5893);s.Z=function(e){var s=e.pageTitle,l=e.homePageUrl,r=e.homePageText,n=e.activePageText;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"page-title-area",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"page-title-content",children:[(0,i.jsx)("h2",{children:s}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.default,{href:l,children:(0,i.jsx)("a",{children:r})})}),(0,i.jsx)("li",{children:n})]})]})}),(0,i.jsx)("div",{className:"divider"}),(0,i.jsxs)("div",{className:"lines",children:[(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"})]}),(0,i.jsx)("div",{className:"banner-shape1",children:(0,i.jsx)("img",{src:"/images/shape/shape9.png",alt:"image"})})]})})}},9072:function(e,s,l){"use strict";l(7294);var a=l(1664),i=l(5893);s.Z=function(){(new Date).getFullYear();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"footer-area",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"footer-content",children:[(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{className:"logo",children:(0,i.jsx)("img",{src:"/images/logo2.png",alt:"logo"})})}),(0,i.jsxs)("p",{className:"copyright",children:["Made with \u2764\ufe0f by ",(0,i.jsx)("a",{href:"https://CheckupDigitale.com/",target:"_blank",children:"CheckupDigitale"})]})]})})})})}},7331:function(e,s,l){"use strict";var a=l(8152),i=l(7294),r=l(5652),n=l(5893);s.Z=function(){var e=i.useState(!0),s=(0,a.Z)(e,2),l=s[0],c=s[1],t=function(){c(!l)};i.useEffect((function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}));var d=l?"collapse navbar-collapse":"collapse navbar-collapse show",o=l?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{id:"navbar",className:"navbar-area",children:(0,n.jsx)("div",{className:"texap-nav",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:[(0,n.jsx)(r.Z,{href:"/",children:(0,n.jsx)("a",{className:"navbar-brand",children:(0,n.jsx)("img",{src:"/images/logo.png",alt:"logo"})})}),(0,n.jsxs)("button",{onClick:t,className:o,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,n.jsx)("span",{className:"icon-bar top-bar"}),(0,n.jsx)("span",{className:"icon-bar middle-bar"}),(0,n.jsx)("span",{className:"icon-bar bottom-bar"})]}),(0,n.jsx)("div",{className:d,id:"navbarSupportedContent",children:(0,n.jsxs)("ul",{className:"navbar-nav",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Z,{href:"/",activeClassName:"active",children:(0,n.jsx)("a",{onClick:t,className:"nav-link",children:"Home"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Z,{href:"/about-simple",activeClassName:"active",children:(0,n.jsx)("a",{onClick:t,className:"nav-link",children:"About"})})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(r.Z,{href:"/contact",activeClassName:"active",children:(0,n.jsx)("a",{onClick:t,className:"nav-link",children:"Contact"})})})]})}),(0,n.jsx)("div",{className:"others-options",children:(0,n.jsx)(r.Z,{href:"/contact",children:(0,n.jsx)("a",{className:"default-btn",children:"Contattami"})})})]})})})})})}},2167:function(e,s,l){"use strict";var a=l(3038);s.default=void 0;var i,r=(i=l(7294))&&i.__esModule?i:{default:i},n=l(1063),c=l(4651),t=l(7426);var d={};function o(e,s,l,a){if(e&&n.isLocalURL(s)){e.prefetch(s,l,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[s+"%"+l+(i?"%"+i:"")]=!0}}var h=function(e){var s,l=!1!==e.prefetch,i=c.useRouter(),h=r.default.useMemo((function(){var s=n.resolveHref(i,e.href,!0),l=a(s,2),r=l[0],c=l[1];return{href:r,as:e.as?n.resolveHref(i,e.as):c||r}}),[i,e.href,e.as]),g=h.href,m=h.as,j=e.children,x=e.replace,u=e.shallow,f=e.scroll,b=e.locale;"string"===typeof j&&(j=r.default.createElement("a",null,j));var v=(s=r.default.Children.only(j))&&"object"===typeof s&&s.ref,p=t.useIntersection({rootMargin:"200px"}),N=a(p,2),y=N[0],k=N[1],C=r.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);r.default.useEffect((function(){var e=k&&l&&n.isLocalURL(g),s="undefined"!==typeof b?b:i&&i.locale,a=d[g+"%"+m+(s?"%"+s:"")];e&&!a&&o(i,g,m,{locale:s})}),[m,g,k,b,l,i]);var w={ref:C,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,l,a,i,r,c,t){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&n.isLocalURL(l))&&(e.preventDefault(),null==c&&a.indexOf("#")>=0&&(c=!1),s[i?"replace":"push"](l,a,{shallow:r,locale:t,scroll:c}))}(e,i,g,m,x,u,f,b)},onMouseEnter:function(e){n.isLocalURL(g)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),o(i,g,m,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var O="undefined"!==typeof b?b:i&&i.locale,P=i&&i.isLocaleDomain&&n.getDomainLocale(m,O,i&&i.locales,i&&i.domainLocales);w.href=P||n.addBasePath(n.addLocale(m,O,i&&i.defaultLocale))}return r.default.cloneElement(s,w)};s.default=h},7426:function(e,s,l){"use strict";var a=l(3038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,l=e.disabled||!n,t=i.useRef(),d=i.useState(!1),o=a(d,2),h=o[0],g=o[1],m=i.useCallback((function(e){t.current&&(t.current(),t.current=void 0),l||h||e&&e.tagName&&(t.current=function(e,s,l){var a=function(e){var s=e.rootMargin||"",l=c.get(s);if(l)return l;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var s=a.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;s&&l&&s(l)}))}),e);return c.set(s,l={id:s,observer:i,elements:a}),l}(l),i=a.id,r=a.observer,n=a.elements;return n.set(e,s),r.observe(e),function(){n.delete(e),r.unobserve(e),0===n.size&&(r.disconnect(),c.delete(i))}}(e,(function(e){return e&&g(e)}),{rootMargin:s}))}),[l,s,h]);return i.useEffect((function(){if(!n&&!h){var e=r.requestIdleCallback((function(){return g(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[h]),[m,h]};var i=l(7294),r=l(3447),n="undefined"!==typeof IntersectionObserver;var c=new Map},569:function(e,s,l){"use strict";l.r(s);l(7294);var a=l(7331),i=l(351),r=l(9072),n=l(1664),c=l(5893);s.default=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)(i.Z,{pageTitle:"Blog Grid",homePageUrl:"/",homePageText:"Home",activePageText:"Blog Grid"}),(0,c.jsx)("div",{className:"blog-area ptb-100",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row justify-content-center",children:[(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog1.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Branding"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"})," April 14, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(0) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Branding involves developing strategy to create a point of differentiation"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog2.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Agency"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 13, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(4) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Design is a plan or specification for the construction of an object"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog3.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Marketing"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 12, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(2) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"The new minimum is a digital magazine with a header featuring a thin"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog4.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Branding"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 14, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(0) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"WordPress is open source software you can use to create a beautiful"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog5.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Agency"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 13, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(4) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Bootstrap 5 is open source software you can use to create a beautiful"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog6.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Marketing"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 12, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(2) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Beautiful designs, powerful features, and the freedom to build anything you"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog7.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Branding"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 14, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(0) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Branding involves developing strategy to create a point of differentiation"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog8.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Agency"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 13, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(4) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Most designs, powerful features, and the freedom to build anything you"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog9.jpg",alt:"blog"})})}),(0,c.jsx)(n.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Marketing"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 12, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(2) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(n.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Branding involves developing strategy to create a point"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,c.jsx)("div",{className:"pagination-area",children:(0,c.jsxs)("div",{className:"nav-links",children:[(0,c.jsx)("a",{href:"/blog-grid",className:"page-numbers current",children:"1"}),(0,c.jsx)("a",{href:"/blog-grid",className:"page-numbers",children:"2"}),(0,c.jsx)("a",{href:"/blog-grid",className:"page-numbers",children:"3"}),(0,c.jsx)("a",{href:"/blog-grid",className:"next page-numbers",title:"Next Page",children:(0,c.jsx)("i",{className:"ri-arrow-right-line"})})]})})})]})})}),(0,c.jsx)(r.Z,{})]})}},5652:function(e,s,l){"use strict";var a=l(4942),i=l(4925),r=l(1163),n=l(1664),c=l(7294),t=l(5893),d=["router","children"];function o(e,s){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),l.push.apply(l,a)}return l}function h(e){for(var s=1;s<arguments.length;s++){var l=null!=arguments[s]?arguments[s]:{};s%2?o(Object(l),!0).forEach((function(s){(0,a.Z)(e,s,l[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(l,s))}))}return e}s.Z=(0,r.withRouter)((function(e){var s=e.router,l=e.children,a=(0,i.Z)(e,d),r=c.Children.only(l),o=r.props.className||"";return s.pathname===a.href&&a.activeClassName&&(o="".concat(o," ").concat(a.activeClassName).trim()),delete a.activeClassName,(0,t.jsx)(n.default,h(h({},a),{},{children:c.cloneElement(r,{className:o})}))}))},3177:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-grid",function(){return l(569)}])},1664:function(e,s,l){e.exports=l(2167)},1163:function(e,s,l){e.exports=l(4651)},4925:function(e,s,l){"use strict";function a(e,s){if(null==e)return{};var l,a,i=function(e,s){if(null==e)return{};var l,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],s.indexOf(l)>=0||(i[l]=e[l]);return i}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],s.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}l.d(s,{Z:function(){return a}})}},function(e){e.O(0,[9774,2888,179],(function(){return s=3177,e(e.s=s);var s}));var s=e.O();_N_E=s}]);