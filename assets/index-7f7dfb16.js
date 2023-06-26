import{k,u as v,g as A,r as l,o as h,c as p,w as i,l as o,a as e,b as E,m as _,d as w,n as f}from"./index-24b031f4.js";import{__module as J}from"./index-f87db69a.js";import{__module as R}from"./index-3296f693.js";import{__module as x}from"./index-b7be5965.js";import{__module as Z}from"./index-67e0b3f1.js";import{__module as P}from"./index-a600af57.js";import{__module as V}from"./index-e58b8e0c.js";import{__module as Y}from"./index-177ec2a7.js";import"./common-41e7c2f7.js";const U=e("div",{class:"title"},[e("div",{class:"icon"},[e("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",class:"larkui-icon larkui-icon-book-type-default icon-svg index-module_size_wVASz","data-name":"BookTypeDefault"},[e("g",{fill:"none","fill-rule":"evenodd"},[e("path",{d:"M4.75 1.267h10.5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2Z",fill:"#C4DCFF"}),e("path",{d:"M4.75 1.267h2.215v18H5.75a3 3 0 0 1-3-3v-13a2 2 0 0 1 2-2Z",fill:"#679FF4"}),e("path",{stroke:"#397ABD",d:"M7.25 1.1v17.667"}),e("path",{stroke:"#397ABD","stroke-linecap":"round","stroke-linejoin":"round",d:"M10.85 5.394h3.4"}),e("path",{d:"M4.25 1.267h11.5a1.5 1.5 0 0 1 1.5 1.5v14.5a1.5 1.5 0 0 1-1.5 1.5H4.25a1.5 1.5 0 0 1-1.5-1.5v-14.5a1.5 1.5 0 0 1 1.5-1.5Z",stroke:"#397ABD"})])])]),E(" 工 作 笔 记 ")],-1),b=e("div",{class:"search"},[e("div",{class:"searchbar"},[e("svg",{width:"1em",height:"1em",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",class:"larkui-icon larkui-icon-help-search ReaderLayout-module_navIcon_eoaa4"},[e("path",{d:"M114 20c51.362 0 93 41.638 93 93 0 21.782-7.489 41.816-20.032 57.666l45.82 46.277c4.275 4.317 4.24 11.282-.077 15.556-4.317 4.275-11.281 4.24-15.556-.077l-45.774-46.23C155.576 198.602 135.652 206 114 206c-51.362 0-93-41.638-93-93s41.638-93 93-93Zm0 20c-40.317 0-73 32.683-73 73s32.683 73 73 73 73-32.683 73-73-32.683-73-73-73Z",fill:"currentColor","fill-rule":"nonzero"})]),e("span",null,"搜索"),e("span",{class:"searchHotKey"},"Ctrl + J")])],-1),j=e("div",{class:"position"},[e("svg",{width:"1em",height:"1em",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",class:"larkui-icon larkui-icon-knowledge-base-home ReaderLayout-module_navIcon_eoaa4"},[e("path",{d:"m139.26 31.243.36.232 76.656 50.543a21.11 21.11 0 0 1 9.486 17.222l.004.401v96.129c0 17.616-14.138 31.93-31.687 32.215l-.532.004h-34.698c-.1 0-.198-.001-.297-.004-.183.01-.367.015-.552.015-5.43 0-9.848-4.327-9.996-9.72L148 218v-47.755c0-11.2-8.973-20.245-20-20.245-10.913 0-19.813 8.858-19.997 19.896l-.003.349V218c0 5.523-4.477 10-10 10-.185 0-.37-.005-.552-.015h-.017l-.28.004H62.453c-17.616 0-31.93-14.138-32.215-31.686l-.004-.533V99.64a21.11 21.11 0 0 1 9.157-17.4l.333-.223 76.656-50.543a21.11 21.11 0 0 1 22.88-.232ZM127.516 48.1l-.127.072-76.656 50.543a1.11 1.11 0 0 0-.49.788l-.009.138v96.129c0 6.646 5.306 12.053 11.913 12.215l.306.004H88L88 170.245C88 148.036 105.89 130 128 130c21.889 0 39.642 17.677 39.995 39.58l.005.665v37.744h25.547c6.646 0 12.053-5.306 12.215-11.913l.004-.306V99.64a1.11 1.11 0 0 0-.388-.842l-.11-.084-76.657-50.543a1.11 1.11 0 0 0-1.095-.072Z",fill:"currentColor","fill-rule":"nonzero"})]),e("span",null,"首页")],-1),Q=k({__name:"noteAsider",emits:["onRouteChange"],setup(B,{emit:C}){const g=[J,Y,R,Z,P,V,x],t=v(),r=A(g),n=A([]),s=a=>{const c=t.resolve({path:a.path});C("onRouteChange"),location.href=c.href},u={children:"children",label(a){return a.title}};return(a,c)=>{const m=l("el-tree"),I=l("el-scrollbar"),d=l("el-aside");return h(),p(d,null,{default:i(()=>[U,b,j,o(I,null,{default:i(()=>[o(m,{data:r.value,"show-checkbox":!1,onNodeClick:s,"node-key":"path","default-expanded-keys":n.value,"default-checked-keys":n.value,props:u},null,8,["data","default-expanded-keys","default-checked-keys"])]),_:1})]),_:1})}}}),z={class:"article"},D={class:"mobile-footer"},F=e("img",{alt:"",src:"data:image/png;base64,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"},null,-1),O=k({__name:"index",setup(B){const C=A(0),g=n=>{C.value=n.scrollTop},t=A(!1),r=()=>{t.value=!1};return(n,s)=>{const u=l("router-view"),a=l("el-scrollbar"),c=l("el-main"),m=l("el-drawer"),I=_("highlight");return h(),w("section",z,[o(Q,{class:"note-asider",onOnRouteChange:r}),o(c,null,{default:i(()=>[f((h(),p(a,{class:"container",onScroll:g},{default:i(()=>[o(u)]),_:1})),[[I]])]),_:1}),e("div",D,[e("span",{onClick:s[0]||(s[0]=d=>t.value=!0)},[F,E(" 目录 ")])]),o(m,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=d=>t.value=d),direction:"ltr","show-close":!1,size:"60%","with-header":!1},{default:i(()=>[o(Q,{onOnRouteChange:r})]),_:1},8,["modelValue"])])}}});export{O as default};
