import{_ as u,u as x,f as E,g as l,h as f,r as k,o as w,c as j,i as t,j as A,k as I}from"./index.eab18acf.js";const P={setup(){const d=x(),o=E(),a=l(""),n=()=>{d.push({name:I.name})},m=r=>{const i=o.path.split("/")[2];let _="";for(const e in r)if(e.split("/")[3]===i)return e;return _},c=async()=>{try{const{articleId:r}=o.params,i={"../../markdown/babel/index.ts":()=>t(()=>import("./index.567eb20a.js"),["assets/index.567eb20a.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/code/index.ts":()=>t(()=>import("./index.eab18acf.js").then(function(e){return e.y}),["assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/code-review/index.ts":()=>t(()=>import("./index.66e6301d.js"),["assets/index.66e6301d.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/common/index.ts":()=>t(()=>import("./index.11400b95.js"),["assets/index.11400b95.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/common-functions/index.ts":()=>t(()=>import("./index.40190b78.js"),["assets/index.40190b78.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/data-structures-and-algorithms/index.ts":()=>t(()=>import("./index.eac06a40.js"),["assets/index.eac06a40.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/electron/index.ts":()=>t(()=>import("./index.1a8ff19b.js"),["assets/index.1a8ff19b.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/nodejs/index.ts":()=>t(()=>import("./index.6b5a65eb.js"),["assets/index.6b5a65eb.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/react/index.ts":()=>t(()=>import("./index.ae4affd4.js"),["assets/index.ae4affd4.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/resume/index.ts":()=>t(()=>import("./index.935273ac.js"),[]),"../../markdown/socket/index.ts":()=>t(()=>import("./index.06983569.js"),["assets/index.06983569.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/vitejs/index.ts":()=>t(()=>import("./index.156b979a.js"),["assets/index.156b979a.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/vuejs/index.ts":()=>t(()=>import("./index.8f62d2ea.js"),["assets/index.8f62d2ea.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/web-optimization/index.ts":()=>t(()=>import("./index.94771594.js"),["assets/index.94771594.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"]),"../../markdown/webpack/index.ts":()=>t(()=>import("./index.2ec0542b.js"),["assets/index.2ec0542b.js","assets/index.eab18acf.js","assets/index.3d0bd1de.css"])};let _=m(i);if(_){const{__default:e,page:p}=await i[_]();let s=A(p,o);r===e.articleId&&(s=e),s?(a.value=s.content,document.title=s.title):n()}}catch{n()}};return f(async()=>{await c()}),{markdownContent:a}}};function R(d,o,a,n,m,c){const r=k("Article");return w(),j(r,{htmlCode:n.markdownContent},null,8,["htmlCode"])}var L=u(P,[["render",R]]);export{L as default};
