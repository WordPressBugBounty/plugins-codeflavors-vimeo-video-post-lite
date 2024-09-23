(()=>{var e={736:()=>{(0,wp.data.dispatch)("core").addEntities([{name:"themes",kind:"vimeotheque-series",baseURL:"vimeotheque-series/v1/themes",key:"folder"}])}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{"use strict";n(736),wp.data.dispatch;var e=function(){return VSE.postId},t=wp,r=(t.components.Button,t.data),i=r.dispatch,o=r.useSelect,s=t.element;s.useEffect,s.useState,t.i18n.__;const a=function(t){var n=t.theme,r=void 0===n?{screenshot:"",name:"",folder:""}:n,s=o((function(e){return e("vimeotheque-series/playlist-options").getOption("theme")})),a=r.screenshot,c=r.name,l=r.folder;return React.createElement("div",{className:"theme ".concat(s==l?"selected":"")},React.createElement("img",{src:a,title:c,width:"300",onClick:function(){i("core").editEntityRecord("postType","series",e(),{theme:l}),i("vimeotheque-series/playlist-options").updateOption("theme",l)}}))};var c=wp,l=c.components,u=(l.Button,l.Spinner,c.data),m=(u.dispatch,u.useSelect,c.element);m.useEffect,m.useState,c.i18n.__;var d=wp,p=d.components,h=(p.Button,p.Flex,p.FlexItem,p.Spinner),f=d.data.useSelect,v=d.element,y=(v.useEffect,v.useState,d.i18n.__);const E=function(e){var t=f((function(e){return{items:e("core").getEntityRecords("vimeotheque-series","themes"),isLoading:e("core/data").isResolving("core","getEntityRecords",["vimeotheque-series","themes"])}})),n=t.items,r=t.isLoading;return React.createElement(React.Fragment,null,React.createElement("div",{className:"themes-list"},r&&React.createElement(React.Fragment,null,React.createElement(h,null)," ",y("Loading themes, please wait...","codeflavors-vimeo-video-post-lite")),n&&n.map((function(e){return React.createElement(a,{key:e.folder,theme:e})}))))};function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=wp,S=g.components,q=S.Button,w=S.Flex,b=S.FlexItem,O=S.Modal,x=g.data.useSelect,_=g.element,k=(_.useEffect,_.useState),F=g.hooks.applyFilters,A=g.i18n.__;const C=function(e){var t,n,r=x((function(e){return e("vimeotheque-series/playlist-options").getOption("theme")})),i=(t=k(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,s,a=[],c=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],s=i[1],a=F("vimeotheque-series-theme-settings","",r);return React.createElement("div",{className:"vimeotheque-theme settings"},React.createElement(w,{justify:"flex-end"},React.createElement(b,null,React.createElement(q,{icon:"admin-settings",onClick:function(){return s(!o)}},A("Settings","codeflavors-vimeo-video-post-lite")))),o&&React.createElement(O,{size:"medium",isDismissible:!0,onRequestClose:function(){return s(!o)},shouldCloseOnClickOutside:!0,shouldCloseOnEsc:!0,title:A("Theme Settings","codeflavors-vimeo-video-post-lite")},a))};var I=wp,L=I.components,j=(L.Button,L.Spinner),B=I.data,T=B.dispatch,N=B.useSelect,M=I.element,U=M.createRoot,z=M.useEffect,D=(M.useState,I.hooks.doAction),V=I.i18n.__,$=function(t){var n=N((function(t){return{post:t("core").getEntityRecord("postType","series",e()),isLoading:t("core/data").isResolving("core","getEntityRecord",["postType","series",e()])}})),r=n.post,i=n.isLoading;return z((function(){r&&(T("vimeotheque-series/playlist-options").updateOption("theme",r.theme),D("vimeotheque-series-themes-init",r))}),[r]),React.createElement("div",{className:"vimeotheque-series-themes"},i&&React.createElement(React.Fragment,null,React.createElement(j,null)," ",V("Loading the themes, please wait...")),!i&&React.createElement(C,null),!i&&React.createElement(E,null))};U(document.getElementById("vimeotheque-series-theme")).render(React.createElement($,null))})()})();