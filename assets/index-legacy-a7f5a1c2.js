System.register(["./index-legacy-e4369d5c.js","./index-legacy-45914d28.js","./index-legacy-d43ee7a6.js","./index-legacy-e4ca1758.js","./index-legacy-4ba7dd50.js","./index-legacy-e74854f4.js","./index-legacy-f7ca9b29.js","./common-legacy-ebf64166.js"],(function(e,l){"use strict";var o,t,a,n,i,d,r,s,c,p,u,h,x,f,g,y,m,b,k,v;return{setters:[e=>{o=e.g,t=e.u,a=e._,n=e.r,i=e.k,d=e.o,r=e.d,s=e.l,c=e.w,p=e.a,u=e.m,h=e.n,x=e.c},e=>{f=e.__module},e=>{g=e.__module},e=>{y=e.__module},e=>{m=e.__module},e=>{b=e.__module},e=>{k=e.__module},e=>{v=e.g}],execute:function(){var l=document.createElement("style");l.textContent=".position{margin-top:30px;padding:0 10px}.search{margin:30px 10px 10px}.el-aside{position:relative;height:100%;overflow:hidden;border-right:1px solid #ddd;width:240px}.el-aside .el-scrollbar{position:relative;height:calc(100vh - 64px);box-sizing:border-box}.article{display:flex;height:100%}.el-main{padding:0;font-size:14px}.conntent{position:relative;line-height:1.6;max-width:960px;margin:0 auto;box-sizing:border-box;padding:10px}.floating{position:fixed;right:40px;bottom:40px;width:40px}.reback{width:40px;height:40px;background:#fff;border-radius:50%;cursor:pointer;transition:all ease 1s;opacity:.4;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 2px 4px rgba(0,0,0,.04)}.reback:hover{opacity:1}.operation{position:absolute;left:20px;top:20px;font-size:20px;color:#ccc;cursor:pointer}.el-main{position:relative}\n",document.head.appendChild(l);const _=[f,g,m,b,k,y],w={class:"article"},j={class:"search"};e("default",a({setup(){const e=o(""),l=o(0),a=t(),n=o(_);return{handleNodeClick:e=>{const l=a.resolve({path:e.path});location.href=l.href},defaultExpandedKeys:o([]),defaultProps:{children:"children",label:e=>e.title},trees:n,onScroll:e=>{l.value=e.scrollTop},nowScrollHeight:l,keyword:e,onSearch:(l="search")=>{if("search"===l){const l=v(e.value,n.value);n.value=l}else n.value=_}}}},[["render",function(e,l,o,t,a,f){const g=n("el-input"),y=n("el-tree"),m=n("el-scrollbar"),b=n("el-aside"),k=n("router-view"),v=n("el-main"),_=i("highlight");return d(),r("section",w,[s(b,null,{default:c((()=>[p("div",j,[s(g,{modelValue:t.keyword,"onUpdate:modelValue":l[0]||(l[0]=e=>t.keyword=e),placeholder:"请输入搜索关键词...",onKeyup:l[1]||(l[1]=u((e=>t.onSearch("search")),["enter","native"])),clearable:"",onClear:l[2]||(l[2]=e=>t.onSearch("reset"))},null,8,["modelValue"])]),s(m,null,{default:c((()=>[s(y,{data:t.trees,"show-checkbox":!1,onNodeClick:t.handleNodeClick,"node-key":"path","default-expanded-keys":t.defaultExpandedKeys,"default-checked-keys":t.defaultExpandedKeys,props:t.defaultProps},null,8,["data","onNodeClick","default-expanded-keys","default-checked-keys","props"])])),_:1})])),_:1}),s(v,null,{default:c((()=>[h((d(),x(m,{class:"conntent",onScroll:t.onScroll},{default:c((()=>[s(k)])),_:1},8,["onScroll"])),[[_]])])),_:1})])}]]))}}}));
