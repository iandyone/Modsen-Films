"use strict";(self.webpackChunkmodsen_films=self.webpackChunkmodsen_films||[]).push([[343],{343:(n,e,t)=>{t.r(e),t.d(e,{default:()=>I});var i,r,o,a,s,l,c,u,f=t(893),d=t(294),h=t(463),p=t(551),v=t(946),b=t(222),y=t(533),g=t(394);function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var w,x,j=g.zo.div(i||(i=m(["\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.5s ease;\n  height: 0;\n  width: 0;\n  height: 0;\n  position: relative;\n  z-index: 200;\n\n  ","\n"])),(function(n){return n.$isVisible&&(0,g.iv)(r||(r=m(["\n      opacity: 1;\n      position: fixed;\n      width: 100vw;\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: rgba(0, 0, 0, 80%);\n      pointer-events: auto;\n      transition: background 0.5s ease;\n    "])))})),k=g.zo.div(o||(o=m(["\n  ","\n"])),(function(n){return n.$isVisible&&(0,g.iv)(a||(a=m(["\n      width: 70vw;\n      height: 39.25vw;\n\n      background: var(--bg-color);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      @media (max-width: 992px) {\n        width: 90vw;\n        height: 50.25vw;\n      }\n    "])))})),O=g.zo.iframe.attrs((function(n){return{src:n.src,title:"YouTube video player",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; web-share",allowFullScreen:!0,width:"80%",height:"80%"}}))(s||(s=m(["\n  width: 100%;\n  height: 100%;\n"]))),E=g.zo.button(l||(l=m(["\n  pointer-events: none;\n  border-radius: 50%;\n  transition: all 0.5s ease;\n  opacity: 0;\n  display: none;\n\n  ","\n"])),(function(n){return n.$isVisible&&(0,g.iv)(c||(c=m(["\n      position: absolute;\n      display: block;\n      opacity: 1;\n      width: 48px;\n      height: 48px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      top: 5%;\n      right: 5%;\n      transition: var(--transition);\n      pointer-events: auto;\n\n      &:active {\n        transform: var(--button-pressed);\n        transition: var(--transition);\n      }\n\n      @media (max-width: 992px) {\n        top: 2%;\n        right: 2%;\n      }\n    "])))})),z=g.zo.h3(u||(u=m(["\n  color: var(--text-color);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 18px;\n  transition: var(--transition);\n"])));function A(){return A=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},A.apply(this,arguments)}const S=function(n){return d.createElement("svg",A({width:32,height:32,fill:"none"},n),w||(w=d.createElement("g",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,clipPath:"url(#x-mark_svg__a)"},d.createElement("path",{d:"M25 7 7 25M25 25 7 7"}))),x||(x=d.createElement("defs",null,d.createElement("clipPath",{id:"x-mark_svg__a"},d.createElement("path",{fill:"#fff",d:"M0 0h32v32H0z"})))))};var $=t(681);function _(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}const I=function(){var n,e,t=(0,h.p)((function(n){return n.app})).isModalOpened,i=(0,h.p)((function(n){return n.movies})).movieID,r=(0,v.Fx)({movieID:i},{skip:!i}),o=r.data,a=r.isFetching,s=(n=(0,d.useState)(""),e=2,function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var i,r,o,a,s=[],l=!0,c=!1;try{if(o=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(i=o.call(t)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(n){c=!0,r=n}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw r}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return _(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=s[0],c=s[1],u=(0,h.$)();function g(){c(""),u((0,$.OI)(0)),u((0,p.DA)(!1))}return(0,d.useEffect)((function(){var n;if(o){var e=null===(n=o.results)||void 0===n?void 0:n.find((function(n){return n.type===b.ZS.TRAILER&&n.site===b.LG.YOUTUBE}));c((null==e?void 0:e.key)?"https://www.youtube-nocookie.com/embed/"+e.key:"")}}),[o]),(0,d.useEffect)((function(){document.body.style.overflowY=t?"hidden":"auto"}),[t]),(0,f.jsx)(j,{$isVisible:t,onClick:g,children:(0,f.jsxs)(k,{$isVisible:t,children:[a&&(0,f.jsx)(y.Yt,{color:"var(--orange)",glassColor:"var(--bg-color)"}),!l&&!a&&(0,f.jsx)(z,{children:"Trailer is not found"}),l&&!a&&(0,f.jsx)(O,{src:l}),(0,f.jsx)(E,{$isVisible:t,onClick:g,children:(0,f.jsx)(S,{})})]})})}}}]);