import{_ as u,u as l,f,g as x,h as E,r as w,o as k,c as h,i as t,j}from"./index.bdf0989a.js";import{r as A}from"./common.86ee9138.js";const I={setup(){const c=l(),r=f(),i=x(""),n=()=>{c.push({name:j.name})},d=e=>{const s=r.path.split("/")[2];let a="";for(const o in e)if(o.split("/")[3]===s)return o;return a},m=async()=>{try{const{articleId:e}=r.params,s={"../../markdown/code-review/index.ts":()=>t(()=>import("./index.0573d1a3.js"),["assets/index.0573d1a3.js","assets/common.86ee9138.js","assets/index.bdf0989a.js","assets/index.9801c813.css"]),"../../markdown/common/index.ts":()=>t(()=>import("./index.6fbad58e.js"),["assets/index.6fbad58e.js","assets/common.86ee9138.js","assets/index.bdf0989a.js","assets/index.9801c813.css"]),"../../markdown/nodejs/index.ts":()=>t(()=>import("./index.866342f2.js"),["assets/index.866342f2.js","assets/common.86ee9138.js","assets/index.bdf0989a.js","assets/index.9801c813.css"]),"../../markdown/react/index.ts":()=>t(()=>import("./index.c8469172.js"),["assets/index.c8469172.js","assets/common.86ee9138.js","assets/index.bdf0989a.js","assets/index.9801c813.css"]),"../../markdown/resume/index.ts":()=>t(()=>import("./index.935273ac.js"),[]),"../../markdown/vuejs/index.ts":()=>t(()=>import("./index.91fc99c4.js"),["assets/index.91fc99c4.js","assets/common.86ee9138.js","assets/index.bdf0989a.js","assets/index.9801c813.css"]),"../../markdown/web-optimization/index.ts":()=>t(()=>import("./index.6f840868.js"),["assets/index.6f840868.js","assets/index.bdf0989a.js","assets/index.9801c813.css"]),"../../markdown/webpack/index.ts":()=>t(()=>import("./index.13dfe78c.js"),["assets/index.13dfe78c.js","assets/common.86ee9138.js","assets/index.bdf0989a.js","assets/index.9801c813.css"])};let a=d(s);if(a){const{__default:o,page:p}=await s[a]();let _=A(p,r);e===o.articleId&&(_=o),_?i.value=_.content:n()}}catch{n()}};return E(async()=>{await m()}),{markdownContent:i}}};function P(c,r,i,n,d,m){const e=w("Article");return k(),h(e,{htmlCode:n.markdownContent},null,8,["htmlCode"])}var L=u(I,[["render",P]]);export{L as default};
