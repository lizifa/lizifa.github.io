import{u,f as l,g as E,h as f,i as t,j as w,_ as k,r as v,o as x,c as h}from"./index-ec830cba.js";import{r as A}from"./common-ef1b640b.js";const I={setup(){const m=u(),r=l(),s=E(""),a=()=>{m.push({name:w.name})},c=e=>{const n=r.path.split("/")[2];let i="";for(const o in e)if(o.split("/")[3]===n)return o;return i},d=async()=>{try{const{articleId:e}=r.params,n=Object.assign({"../../markdown/code-review/index.ts":()=>t(()=>import("./index-9602215f.js"),["./index-9602215f.js","./common-ef1b640b.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url),"../../markdown/common/index.ts":()=>t(()=>import("./index-77b3a312.js"),["./index-77b3a312.js","./common-ef1b640b.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url),"../../markdown/nodejs/index.ts":()=>t(()=>import("./index-9cd37373.js"),["./index-9cd37373.js","./common-ef1b640b.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url),"../../markdown/react/index.ts":()=>t(()=>import("./index-93391d4d.js"),["./index-93391d4d.js","./common-ef1b640b.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url),"../../markdown/resume/index.ts":()=>t(()=>import("./index-f6eefebb.js"),[],import.meta.url),"../../markdown/vuejs/index.ts":()=>t(()=>import("./index-ecbde278.js"),["./index-ecbde278.js","./common-ef1b640b.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url),"../../markdown/web-optimization/index.ts":()=>t(()=>import("./index-12dcabbd.js"),["./index-12dcabbd.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url),"../../markdown/webpack/index.ts":()=>t(()=>import("./index-18852f31.js"),["./index-18852f31.js","./common-ef1b640b.js","./index-ec830cba.js","./index-eef4e363.css"],import.meta.url)});let i=c(n);if(i){const{__default:o,page:p}=await n[i]();let _=A(p,r);e===o.articleId&&(_=o),_?s.value=_.content:a()}}catch(e){a()}};return f(async()=>{await d()}),{markdownContent:s}}};function P(m,r,s,a,c,d){const e=v("Article");return x(),h(e,{htmlCode:a.markdownContent},null,8,["htmlCode"])}const D=k(I,[["render",P]]);export{D as default};
