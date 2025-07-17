"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[644],{1342:(e,t,r)=>{r.d(t,{I9:()=>f,N_:()=>d});var n=r(1594),o=r(5206),a=r(8689),i=r(1534);
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const c=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}new Map;const u=n.startTransition;o.flushSync,n.useId;function f(e){let{basename:t,children:r,future:o,window:l}=e,s=n.useRef();null==s.current&&(s.current=(0,i.TM)({window:l,v5Compat:!0}));let c=s.current,[f,p]=n.useState({action:c.action,location:c.location}),{v7_startTransition:v}=o||{},d=n.useCallback(e=>{v&&u?u(()=>p(e)):p(e)},[p,v]);return n.useLayoutEffect(()=>c.listen(d),[c,d]),n.createElement(a.Ix,{basename:t,children:r,location:f.location,navigationType:f.action,navigator:c,future:o})}const p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d=n.forwardRef(function(e,t){let r,{onClick:o,relative:u,reloadDocument:f,replace:d,state:w,target:h,to:y,preventScrollReset:b,unstable_viewTransition:m}=e,_=s(e,c),{basename:R}=n.useContext(a.jb),S=!1;if("string"==typeof y&&v.test(y)&&(r=y,p))try{let e=new URL(window.location.href),t=y.startsWith("//")?new URL(e.protocol+y):new URL(y),r=(0,i.pb)(t.pathname,R);t.origin===e.origin&&null!=r?y=r+t.search+t.hash:S=!0}catch(e){}let g=(0,a.$P)(y,{relative:u}),O=function(e,t){let{target:r,replace:o,state:l,preventScrollReset:s,relative:c,unstable_viewTransition:u}=void 0===t?{}:t,f=(0,a.Zp)(),p=(0,a.zy)(),v=(0,a.x$)(e,{relative:c});return n.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let r=void 0!==o?o:(0,i.AO)(p)===(0,i.AO)(v);f(e,{replace:r,state:l,preventScrollReset:s,relative:c,unstable_viewTransition:u})}},[p,f,v,o,l,r,e,s,c,u])}(y,{replace:d,state:w,target:h,preventScrollReset:b,relative:u,unstable_viewTransition:m});return n.createElement("a",l({},_,{href:r||g,onClick:S||f?o:function(e){o&&o(e),e.defaultPrevented||O(e)},ref:t,target:h}))});var w,h;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(w||(w={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(h||(h={}))},3394:(e,t,r)=>{
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n=r(1594),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4140:(e,t,r)=>{var n=r(5206);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},4922:(e,t,r)=>{e.exports=r(3394)}}]);