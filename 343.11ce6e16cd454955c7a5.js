"use strict";(self.webpackChunkmodsen_films=self.webpackChunkmodsen_films||[]).push([[343],{343:(n,t,e)=>{e.r(t),e.d(t,{default:()=>I});var i,r,o,a,s,l,c,u,d=e(893),f=e(294),h=e(463),p=e(551),v=e(946),b=e(222),m=e(394);function y(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var g,w,x=m.zo.div(i||(i=y(["\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.5s ease;\n  height: 0;\n  width: 0;\n  height: 0;\n  position: relative;\n  z-index: 200;\n\n  ","\n"])),(function(n){return n.$isVisible&&(0,m.iv)(r||(r=y(["\n      opacity: 1;\n      position: fixed;\n      width: 100vw;\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(0, 0, 0, 80%);\n      pointer-events: auto;\n      transition: background 0.5s ease;\n    "])))})),j=m.zo.div(o||(o=y(["\n  ","\n"])),(function(n){return n.$isVisible&&(0,m.iv)(a||(a=y(["\n      width: 70vw;\n      height: 39.25vw;\n\n      background: var(--bg-color);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      @media (max-width: 992px) {\n        width: 90vw;\n        height: 50.25vw;\n      }\n    "])))})),k=m.zo.iframe.attrs((function(n){return{src:n.src,title:"YouTube video player",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; web-share",allowFullScreen:!0,width:"80%",height:"80%"}}))(s||(s=y(["\n  width: 100%;\n  height: 100%;\n"]))),O=m.zo.button(l||(l=y(["\n  pointer-events: none;\n  border-radius: 50%;\n  transition: all 0.5s ease;\n  opacity: 0;\n  display: none;\n  transition: var(--transition);\n\n  ","\n"])),(function(n){return n.$isVisible&&(0,m.iv)(c||(c=y(["\n      position: absolute;\n      display: block;\n      opacity: 1;\n      width: 48px;\n      height: 48px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      top: 5%;\n      right: 5%;\n      transition: var(--transition);\n      pointer-events: auto;\n\n      &:active {\n        transform: var(--button-pressed);\n        transition: var(--transition);\n      }\n\n      &:hover {\n        opacity: 0.8;\n        transition: var(--transition);\n      }\n\n      @media (max-width: 992px) {\n        top: 2%;\n        right: 2%;\n      }\n    "])))})),E=m.zo.h3(u||(u=y(["\n  color: var(--text-color);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 18px;\n  transition: var(--transition);\n"]))),z=e(681),$=e(616);function A(){return A=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},A.apply(this,arguments)}const S=function(n){return f.createElement("svg",A({width:32,height:32,fill:"none"},n),g||(g=f.createElement("g",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,clipPath:"url(#x-mark_svg__a)"},f.createElement("path",{d:"M25 7 7 25M25 25 7 7"}))),w||(w=f.createElement("defs",null,f.createElement("clipPath",{id:"x-mark_svg__a"},f.createElement("path",{fill:"#fff",d:"M0 0h32v32H0z"})))))};function _(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}const I=function(){var n,t,e=(0,h.p)((function(n){return n.app})).isModalOpened,i=(0,h.p)((function(n){return n.movies})).movieID,r=(0,v.Fx)({movieID:i},{skip:!i}),o=r.data,a=r.isFetching,s=(n=(0,f.useState)(""),t=2,function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;l=!1}else for(;!(l=(i=o.call(e)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(n){c=!0,r=n}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}(n,t)||function(n,t){if(n){if("string"==typeof n)return _(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=s[0],c=s[1],u=(0,h.$)();function m(){c(""),u((0,z.OI)(0)),u((0,p.DA)(!1))}return(0,f.useEffect)((function(){var n;if(o){var t=null===(n=o.results)||void 0===n?void 0:n.find((function(n){return n.type===b.ZS.TRAILER&&n.site===b.LG.YOUTUBE}));c((null==t?void 0:t.key)?"https://www.youtube-nocookie.com/embed/"+t.key:"")}}),[o,i]),(0,f.useEffect)((function(){document.body.style.overflowY=e?"hidden":"auto"}),[e]),(0,d.jsx)(x,{$isVisible:e,onClick:m,"data-testid":"modal",children:(0,d.jsxs)(j,{$isVisible:e,"data-testid":"modal-trailer",children:[a&&(0,d.jsx)($.$j,{}),l&&!a&&(0,d.jsx)(k,{src:l}),!l&&!a&&!(null==o?void 0:o.results.length)&&(0,d.jsx)(E,{children:"Trailer is not found"}),(0,d.jsx)(O,{$isVisible:e,onClick:m,"data-testid":"modal-button",children:(0,d.jsx)(S,{})})]})})}}}]);