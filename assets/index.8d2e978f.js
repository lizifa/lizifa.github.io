import{_ as l,u as i,f as d,g as m,r as _,o as f,c as p}from"./index.a4203278.js";import{t as u,_ as C,a as c}from"./index.98918281.js";const h={setup(){const e=i(),a=d("");return m(()=>{const{articleId:o}=e.params;let t=u.find(n=>n.articleId===e.params.articleId)||C;o===c.articleId&&(t=c),a.value=t.content,document.title=t.title}),{markdownContent:a}}};function k(e,a,o,r,t,n){const s=_("Article");return f(),p(s,{htmlCode:r.markdownContent},null,8,["htmlCode"])}var g=l(h,[["render",k]]);export{g as default};
