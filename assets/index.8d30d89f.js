import{_ as g,g as s,u as b,f as N,r as t,m as $,o as h,d as B,n as a,w as r,p as E,a as u,q as K,s as v,c as V,v as D,x as P}from"./index.eab18acf.js";import{__module as F}from"./index.eac06a40.js";import{__module as H}from"./index.6b5a65eb.js";import{__module as R}from"./index.ae4affd4.js";import{__module as q}from"./index.8f62d2ea.js";import{__module as L}from"./index.94771594.js";import{__module as T}from"./index.1a8ff19b.js";import{__module as U}from"./index.2ec0542b.js";import{__module as j}from"./index.156b979a.js";import{__module as z}from"./index.567eb20a.js";import{__module as A}from"./index.06983569.js";import{__module as G}from"./index.66e6301d.js";import{__module as I}from"./index.40190b78.js";const k=[R,q,A,T,U,j,z,H,F,L,P,G,I],J={setup(){const _=s(""),o=s(0),m=b(),e=s(k);N();const i=s([]);return{handleNodeClick:l=>{const n=m.resolve({path:l.path});location.href=n.href},defaultExpandedKeys:i,defaultProps:{children:"children",label(l){return l.title}},trees:e,onScroll:l=>{o.value=l.scrollTop},nowScrollHeight:o,keyword:_,onSearch:(l="search")=>{if(l==="search"){const n=E(_.value,e.value);e.value=n}else e.value=k}}}},M={class:"article"},O={class:"search"},Q={class:"floating"},W={class:"reback"};function X(_,o,m,e,i,y){const f=t("el-input"),p=t("el-tree"),d=t("el-scrollbar"),l=t("el-aside"),n=t("router-view"),x=t("Share"),S=t("el-icon"),w=t("el-main"),C=$("highlight");return h(),B("section",M,[a(l,null,{default:r(()=>[u("div",O,[a(f,{modelValue:e.keyword,"onUpdate:modelValue":o[0]||(o[0]=c=>e.keyword=c),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD...",onKeyup:o[1]||(o[1]=K(c=>e.onSearch("search"),["enter","native"])),clearable:"",onClear:o[2]||(o[2]=c=>e.onSearch("reset"))},null,8,["modelValue"])]),a(d,null,{default:r(()=>[a(p,{data:e.trees,"show-checkbox":!1,onNodeClick:e.handleNodeClick,"node-key":"path","default-expanded-keys":e.defaultExpandedKeys,"default-checked-keys":e.defaultExpandedKeys,props:e.defaultProps},null,8,["data","onNodeClick","default-expanded-keys","default-checked-keys","props"])]),_:1})]),_:1}),a(w,null,{default:r(()=>[v((h(),V(d,{class:"conntent",onScroll:e.onScroll},{default:r(()=>[a(n)]),_:1},8,["onScroll"])),[[C]]),u("div",Q,[v(u("div",W,[a(S,null,{default:r(()=>[a(x)]),_:1})],512),[[D,e.nowScrollHeight>50]])])]),_:1})])}var ue=g(J,[["render",X]]);export{ue as default};
