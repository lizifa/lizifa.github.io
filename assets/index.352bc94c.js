import{_ as u,u as l,f,g as x,h as E,r as w,o as k,c as h,i as t,j}from"./index.3d8a8f42.js";import{r as A}from"./common.f73ac8d9.js";const I={setup(){const c=l(),r=f(),i=x(""),n=()=>{c.push({name:j.name})},d=e=>{const s=r.path.split("/")[2];let a="";for(const o in e)if(o.split("/")[3]===s)return o;return a},m=async()=>{try{const{articleId:e}=r.params,s={"../../markdown/code-review/index.ts":()=>t(()=>import("./index.c39b7527.js"),["assets/index.c39b7527.js","assets/common.f73ac8d9.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"]),"../../markdown/common/index.ts":()=>t(()=>import("./index.4fc0dbbc.js"),["assets/index.4fc0dbbc.js","assets/common.f73ac8d9.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"]),"../../markdown/nodejs/index.ts":()=>t(()=>import("./index.67b223f6.js"),["assets/index.67b223f6.js","assets/common.f73ac8d9.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"]),"../../markdown/react/index.ts":()=>t(()=>import("./index.b289097f.js"),["assets/index.b289097f.js","assets/common.f73ac8d9.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"]),"../../markdown/resume/index.ts":()=>t(()=>import("./index.935273ac.js"),[]),"../../markdown/vuejs/index.ts":()=>t(()=>import("./index.d306cef7.js"),["assets/index.d306cef7.js","assets/common.f73ac8d9.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"]),"../../markdown/web-optimization/index.ts":()=>t(()=>import("./index.84d6de91.js"),["assets/index.84d6de91.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"]),"../../markdown/webpack/index.ts":()=>t(()=>import("./index.7a34bd5e.js"),["assets/index.7a34bd5e.js","assets/common.f73ac8d9.js","assets/index.3d8a8f42.js","assets/index.2559a73d.css"])};let a=d(s);if(a){const{__default:o,page:p}=await s[a]();let _=A(p,r);e===o.articleId&&(_=o),_?i.value=_.content:n()}}catch{n()}};return E(async()=>{await m()}),{markdownContent:i}}};function P(c,r,i,n,d,m){const e=w("Article");return k(),h(e,{htmlCode:n.markdownContent},null,8,["htmlCode"])}var D=u(I,[["render",P]]);export{D as default};
