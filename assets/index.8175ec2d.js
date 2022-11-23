import{l as n,E as i,_ as N,g as l,u as I,f as W,r as e,m as M,o as f,d as O,n as o,w as s,a as u,p as g,c as H,v as P,q as G}from"./index.3a5001e0.js";const $=`<p>\u5F00\u53D1\u4E2D....</p>
`,K=`<h1>\u63D2\u5165\u6392\u5E8F</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/data-structures-and-algorithms/intro",$);const q=n("insertion-sort","\u63D2\u5165\u6392\u5E8F","/notes/data-structures-and-algorithms/insertion-sort",K),L=[q],U=n("intro","\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5","/notes/data-structures-and-algorithms/intro",$,L),b=`<p>\u5F00\u53D1\u4E2D....</p>
`,J=`<h1>Node.js \u5B89\u88C5\u914D\u7F6E</h1>
<p>Node.js \u5B89\u88C5\u5305\u53CA\u6E90\u7801\u4E0B\u8F7D\u5730\u5740\u4E3A\uFF1Ahttps://nodejs.org/zh-cn/download/\u3002</p>
`;n("intro","\u7B80\u4ECB","/notes/nodejs/intro",b);const Q=n("create_env","\u7B80\u4ECB","/notes/nodejs/create_env",J),X=[Q],Y=n("intro","Nodejs","/notes/nodejs/intro",b,X),E=`<p>\u5F00\u53D1\u4E2D....</p>
`,Z=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
<h3>\u521B\u5EFA\u4E00\u4E2A React \u5E94\u7528</h3>
<pre><code class="language-text">npx create-react-app my-app
cd my-app
npm start
</code></pre>
<p>If you've previously installed create-react-app globally via <font color="#f00">npm install -g create-react-app</font>, <br/>we recommend you uninstall the package using <npm color="#f00">npm uninstall -g create-react-app</font> or <font color="#f00">yarn global remove create-react-app </font>to ensure that npx always uses the latest version.
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)
Then open <font color="#f00"><code>http://localhost:3000/ </code></font>to see your app.
When you\u2019re ready to deploy to production, create a minified bundle with npm run build.</p>
<h3>\u5DE5\u7A0B\u76EE\u5F55</h3>
<pre><code class="language-text">my-app
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 node_modules
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 .gitignore
\u251C\u2500\u2500 public
\u2502   \u251C\u2500\u2500 favicon.ico
\u2502   \u251C\u2500\u2500 index.html
\u2502   \u2514\u2500\u2500 manifest.json
\u2514\u2500\u2500 src
    \u251C\u2500\u2500 App.css
    \u251C\u2500\u2500 App.js
    \u251C\u2500\u2500 App.test.js
    \u251C\u2500\u2500 index.css
    \u251C\u2500\u2500 index.js
    \u251C\u2500\u2500 logo.svg
    \u2514\u2500\u2500 serviceWorker.js
    \u2514\u2500\u2500 setupTests.js
</code></pre>
<h3>\u9875\u9762\u5165\u53E3\u6587\u4EF6</h3>
<pre><code>import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

</code></pre>
`;n("intro","\u7B80\u4ECB","/notes/react/intro",E);const nn=n("create_env","\u7B80\u4ECB","/notes/react/create_env",Z),tn=[nn],en=n("intro","React","/notes/react/intro",E,tn),y=`<p>\u5F00\u53D1\u4E2D....</p>
`,on=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/vuejs/intro",y);const rn=n("create_env","\u73AF\u5883\u642D\u5EFA","/notes/vuejs/create_env",on),sn=[rn],cn=n("intro","Vue","/notes/vuejs/intro",y,sn),ln=`<p>\u5F00\u53D1\u4E2D....</p>
`,an=`<h1>CSS \u4F18\u5316</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`,un=`<h1>\u811A\u672C\u4F18\u5316</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`,pn=`<h1>\u56FE\u50CF\u548C\u7F51\u7EDC</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`,dn=`<h1>\u7528\u6237\u4F53\u9A8C\u548C\u5DE5\u5177</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;i.inside;const hn={articleId:"css",content:an,path:"/notes/web-optimization/css",title:"CSS \u4F18\u5316",routeType:i.inside},mn={articleId:"javascript",content:un,path:"/notes/web-optimization/javascript",title:"javascript \u4F18\u5316",routeType:i.inside},_n={articleId:"image-net",content:pn,path:"/notes/web-optimization/image-net",title:"\u56FE\u50CF\u548C\u7F51\u7EDC",routeType:i.inside},vn={articleId:"ue",content:dn,path:"/notes/web-optimization/ue",title:"\u7528\u6237\u4F53\u9A8C\u548C\u5DE5\u5177",routeType:i.inside},fn=[hn,mn,vn,_n],gn={path:"/notes/web-optimization/intro",title:"Web \u6027\u80FD\u4F18\u5316",children:fn},B=`<h1>electron</h1>
<p>\u5F00\u53D1\u4E2D....</p>
`,$n=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/electron/intro",B);const bn=n("create_env","\u73AF\u5883\u642D\u5EFA","/notes/electron/create_env",$n),En=[bn],yn=n("intro","Electron","/notes/electron/intro",B,En),k=`<p>\u5F00\u53D1\u4E2D....</p>
`,Bn=`<h1>pkkk</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/webpack/intro",k);const kn=n("create_env","\u73AF\u5883\u642D\u5EFA","/notes/webpack/create_env",Bn),Cn=[kn],wn=n("intro","Webpack","/notes/webpack/intro",k,Cn),C=`<h3>\u6982\u5FF5</h3>
<ol>
<li>Vite\uFF0C\u4E00\u4E2A\u57FA\u4E8E\u6D4F\u89C8\u5668\u539F\u751F ES imports \u7684\u5F00\u53D1\u670D\u52A1\u5668\u3002</li>
<li>\u5229\u7528\u6D4F\u89C8\u5668\u53BB\u89E3\u6790 imports\uFF0C\u5728\u670D\u52A1\u5668\u7AEF\u6309\u9700\u7F16\u8BD1\u8FD4\u56DE\uFF0C\u5B8C\u5168\u8DF3\u8FC7\u4E86\u6253\u5305\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u670D\u52A1\u5668\u968F\u8D77\u968F\u7528,\u652F\u6301\u70ED\u66F4\u65B0\uFF0C\u800C\u4E14\u70ED\u66F4\u65B0\u7684\u901F\u5EA6\u4E0D\u4F1A\u968F\u7740\u6A21\u5757\u589E\u591A\u800C\u53D8\u6162\u3002</li>
<li>\u9488\u5BF9\u751F\u4EA7\u73AF\u5883\u5219\u53EF\u4EE5\u628A\u540C\u4E00\u4EFD\u4EE3\u7801\u7528 rollup \u6253\u5305\u3002</li>
<li>...</li>
</ol>
<h3>\u4F18\u52BF</h3>
<ol>
<li>\u5FEB\u901F\u51B7\u542F\u52A8\u670D\u52A1\u5668</li>
<li>\u5373\u65F6\u70ED\u6A21\u5757\u66F4\u6362\uFF08HMR\uFF09</li>
<li>\u771F\u6B63\u7684\u6309\u9700\u7F16\u8BD1</li>
<li>...</li>
</ol>
<h3>\u5DE5\u4F5C\u539F\u7406</h3>
<ol>
<li>\u5F53\u58F0\u660E\u4E00\u4E2A script \u6807\u7B7E\u7C7B\u578B\u4E3A module \u65F6\uFF0C\u5982\uFF1A <script type="module" src="/src/main.js"><\/script>\uFF0C</li>
<li>\u6D4F\u89C8\u5668\u5C31\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u8D77\u4E00\u4E2AGET http://localhost:3000/src/main.js \u8BF7\u6C42main.js\u6587\u4EF6\uFF1A</li>
<li>\u6D4F\u89C8\u5668\u8BF7\u6C42\u5230\u4E86main.js\u6587\u4EF6\uFF0C\u68C0\u6D4B\u5230\u5185\u90E8\u542B\u6709import\u5F15\u5165\u7684\u5305\uFF0C\u53C8\u4F1A\u5BF9\u5176\u5185\u90E8\u7684 import \u5F15\u7528\u53D1\u8D77 HTTP \u8BF7\u6C42\u83B7\u53D6\u6A21\u5757\u7684\u5185\u5BB9\u6587\u4EF6</li>
</ol>
<p>\u5982\uFF1A GET http://localhost:3000/@modules/vue.js <br/>
\u5982\uFF1AGET http://localhost:3000/src/App.vue<br/>
\u5176\u4E2D\uFF0CVite \u7684\u4E3B\u8981\u529F\u80FD\u5C31\u662F\u901A\u8FC7\u52AB\u6301\u6D4F\u89C8\u5668\u7684\u8FD9\u4E9B\u8BF7\u6C42\uFF0C\u5E76\u5728\u540E\u7AEF\u8FDB\u884C\u76F8\u5E94\u7684\u5904\u7406\uFF0C\u5C06\u9879\u76EE\u4E2D\u4F7F\u7528\u7684\u6587\u4EF6\u901A\u8FC7\u7B80\u5355\u7684\u5206\u89E3\u4E0E\u6574\u5408\uFF0C\u7136\u540E\u518D\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u6E32\u67D3\u9875\u9762\uFF0C
vite\u6574\u4E2A\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u5BF9\u6587\u4EF6\u8FDB\u884C\u6253\u5305\u7F16\u8BD1\uFF0C\u6240\u4EE5\u5176\u8FD0\u884C\u901F\u5EA6\u6BD4\u539F\u59CB\u7684webpack\u5F00\u53D1\u7F16\u8BD1\u901F\u5EA6\u5FEB\u51FA\u8BB8\u591A\uFF01</p>
<h3>vite\u6784\u5EFAreact\u9879\u76EE</h3>
<ol>
<li>\u5B89\u88C5vite\uFF1Ayarn create vite \u6216 npm init vite@latest</li>
<li>\u521D\u59CB\u5316react\u9879\u76EE\uFF08\u5F15\u7528\u6A21\u677F\uFF09 \uFF1Anpm init vite-react-app --template react</li>
<li>\u5B89\u88C5\u4F9D\u8D56\u5305\uFF1Ayarn install</li>
<li>\u8FD0\u884C\u9879\u76EE\uFF1Anpm run dev</li>
</ol>
 <div style="color:red">*\u6CE8\u91CA\uFF1Avite\u9879\u76EE\u5404\u79CD\u914D\u7F6E\uFF08\u5982\uFF1A\u7AEF\u53E3\u3001\u63A5\u53E3\u8DE8\u57DF\u4EE3\u7406\u7B49\uFF09\uFF0C\u53EF\u4EE5\u5728\u5B98\u7F51\u7684\u914D\u7F6E\u83DC\u5355\u4E0B\u67E5\u627E\u3002</div>`,jn=`<h2></h2>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/vitejs/intro",C);const Fn=n("create_env","\u73AF\u5883\u642D\u5EFA","/notes/vitejs/create_env",jn),xn=[Fn],An=n("intro","Vite","/notes/vitejs/intro",C,xn),Sn=`<p>\u5F00\u53D1\u4E2D....</p>
`,w=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","babel\u7B80\u4ECB","/notes/babel/intro",Sn);const Dn=n("create_env","\u73AF\u5883\u642D\u5EFA","/notes/babel/create_env",w),Tn=[Dn],Rn=n("intro","Babel","/notes/babel/intro",w,Tn),j=`<p>\u5F00\u53D1\u4E2D....</p>
`,Vn=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/socket/intro",j);const zn=n("create_env","\u7B80\u4ECB","/notes/socket/create_env",Vn),Nn=[zn],In=n("intro","Socket","/notes/socket/intro",j,Nn),Wn=`<p>\u5F00\u53D1\u4E2D....</p>
`,F=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
<p>\u9875\u9762\u5F00\u53D1\u4E2D ......</p>
`;n("intro","\u7B80\u4ECB","/notes/code-review/intro",Wn);const Mn=n("create_env","\u73AF\u5883\u642D\u5EFA","/notes/code-review/create_env",F),On=[Mn],Hn=n("intro","\u4EE3\u7801\u89C4\u8303","/notes/code-review/intro",F,On),x=`<p>\u5F00\u53D1\u4E2D....</p>
`,Pn=`<h1>\u51FD\u6570\u9632\u6296(debounce)</h1>
<h3>\u5B9A\u4E49</h3>
<ol>
<li>\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1 n \u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9 n \u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002</li>
</ol>
<h3>\u4F7F\u7528\u573A\u666F</h3>
<ol>
<li>\u5728\u8F93\u5165\u6846\u7528\u6237\u4E0D\u505C\u7684\u8FDB\u884C\u8F93\u5165\uFF0C \u7B49\u7528\u6237\u8F93\u5165\u505C\u6B62\u4E4B\u540E\uFF0C\u518D\u89E6\u53D1\u641C\u7D22</li>
<li>......</li>
</ol>
<h3>\u4EE3\u7801\u5B9E\u73B0</h3>
<pre><code>/**
 * fn \u4F20\u8FDB\u6765\u8981\u6267\u884C\u7684\u51FD\u6570
 * duration \u95F4\u9694\u7684\u5468\u671F
 * return \u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570
 */
function debounce (fn, duration) {
    return function() {
        let timer;
        const arg = arguments
        const that = this
        if(timer) clearTimeout(timer)
        timer = setTimeout(() =&gt; {
            fn.apply(that, arg)
        }, duration)
    }
}
</code></pre>
`,Gn=`<h2>\u51FD\u6570\u8282\u6D41(throttle)</h2>
<h3>\u5B9A\u4E49</h3>
<ol>
<li>\u89C4\u5B9A\u5728\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u80FD\u89E6\u53D1\u4E00\u6B21\u51FD\u6570\u3002\u5982\u679C\u8FD9\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\u89E6\u53D1\u591A\u6B21\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u6B21\u751F\u6548\u3002</li>
</ol>
<h3>\u4F7F\u7528\u573A\u666F</h3>
<ol>
<li>\u5728\u8F93\u5165\u6846\u7528\u6237\u4E0D\u505C\u7684\u8FDB\u884C\u8F93\u5165\uFF0C \u7B49\u7528\u6237\u8F93\u5165\u505C\u6B62\u4E4B\u540E\uFF0C\u518D\u89E6\u53D1\u641C\u7D22</li>
<li>......</li>
</ol>
<h3>\u4EE3\u7801\u5B9E\u73B0</h3>
<pre><code>/**
 * fn \u4F20\u8FDB\u6765\u8981\u6267\u884C\u7684\u51FD\u6570
 * duration \u95F4\u9694\u7684\u5468\u671F
 * return \u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570
 */
function throttle (fn, duration) {
    return function() {
        let timer;
        const arg = arguments
        const that = this
        if(timer) {
            timer = setTimeout(() =&gt; {
                fn.apply(that, arg)
                clearTimeout(timer)
                timer = null
            }, duration)
        }
    }
}
</code></pre>
`;n("intro","\u7B80\u4ECB","/notes/common-functions/intro",x);const Kn=n("debounce","\u8282\u6D41","/notes/common-functions/debounce",Pn),qn=n("throttling","\u9632\u6296","/notes/common-functions/throttling",Gn),Ln=[Kn,qn],Un=n("intro","\u5E38\u7528\u529F\u80FD","/notes/common-functions/intro",x,Ln);const Jn=[en,cn,In,yn,wn,An,Rn,Y,U,gn,G,Hn,Un],Qn={setup(){const p=l(""),c=l(0),d=I(),t=l(Jn);W();const h=l([]);return{handleNodeClick:r=>{const a=d.resolve({path:r.path});location.href=a.href},defaultExpandedKeys:h,defaultProps:{children:"children",label(r){return r.title}},trees:t,onScroll:r=>{c.value=r.scrollTop},nowScrollHeight:c,keyword:p,onSearch:()=>{}}}},Xn={class:"article"},Yn={class:"search"},Zn={class:"floating"},nt={class:"reback"};function tt(p,c,d,t,h,A){const m=e("el-button"),_=e("el-input"),v=e("el-tree"),r=e("el-scrollbar"),a=e("el-aside"),S=e("router-view"),D=e("Share"),T=e("el-icon"),R=e("el-main"),V=M("highlight");return f(),O("section",Xn,[o(a,null,{default:s(()=>[u("div",Yn,[o(_,{modelValue:t.keyword,"onUpdate:modelValue":c[0]||(c[0]=z=>t.keyword=z),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD..."},{append:s(()=>[o(m,{icon:"Search",onClick:t.onSearch},null,8,["onClick"])]),_:1},8,["modelValue"])]),o(r,null,{default:s(()=>[o(v,{data:t.trees,"show-checkbox":!1,onNodeClick:t.handleNodeClick,"node-key":"path","default-expanded-keys":t.defaultExpandedKeys,"default-checked-keys":t.defaultExpandedKeys,props:t.defaultProps},null,8,["data","onNodeClick","default-expanded-keys","default-checked-keys","props"])]),_:1})]),_:1}),o(R,null,{default:s(()=>[g((f(),H(r,{class:"conntent",onScroll:t.onScroll},{default:s(()=>[o(S)]),_:1},8,["onScroll"])),[[V]]),u("div",Zn,[g(u("div",nt,[o(T,null,{default:s(()=>[o(D)]),_:1})],512),[[P,t.nowScrollHeight>50]])])]),_:1})])}var ot=N(Qn,[["render",tt]]);export{ot as default};
