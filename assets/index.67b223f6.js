import{c as n}from"./common.f73ac8d9.js";import"./index.3d8a8f42.js";const o=`<p>\u5F00\u53D1\u4E2D....</p>
`,e=`<h1>\u4F7F\u7528 node \u5F00\u53D1\u56FE\u7247\u538B\u7F29\u5DE5\u5177</h1>
<h2>\u77E5\u8BC6\u50A8\u5907</h2>
<ul>
<li>\u4E86\u89E3 TinyPNG \u7684\u4F5C\u7528</li>
<li>\u638C\u63E1\u57FA\u672C\u7684 nodejs</li>
<li>\u4E86\u89E3 node \u7684\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93</li>
</ul>
<h2>\u5DE5\u7A0B\u642D\u5EFA</h2>
<pre><code>1. mkdir tinypng // \u521B\u5EFA\u6587\u4EF6\u76EE\u5F55
2. cd tinypng // \u8FDB\u5165\u65B0\u521B\u5EFA\u7684\u76EE\u5F55
3. npm init -y // npm \u521D\u59CB\u5316\u76EE\u5F55
4. npm i commander --save // \u5B89\u88C5\u4F9D\u8D56
5. mkdir command // \u521B\u5EFA\u6E90\u7801\u6587\u4EF6\u5939
6. cd command // \u8FDB\u5165\u6E90\u7801\u6587\u4EF6\u5939
7. echo #!/usr/bin/env node &gt; tinypng.js // \u5728\u8BE5\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u4E00\u4E2AJavaScriptw\u6587\u4EF6
</code></pre>
<p>\u7136\u540E\u518D\u7F16\u8F91\u5668\u4E2D\u6253\u5F00<code>tinypng.js</code>\u548C<code>package.json</code>\u6587\u4EF6</p>
<p>\u4FEE\u6539 package.json \u6587\u4EF6\uFF0C\u4FEE\u6539 script \u6587\u4EF6</p>
<pre><code>&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;node command/tinypng.js&quot;
},
</code></pre>
`,t="",u=n("intro","\u7B80\u4ECB","/notes/nodejs/intro",o),p=n("tinypng","\u56FE\u7247\u538B\u7F29","/notes/nodejs/tinypng",e),c=n("puppeteer","\u7F51\u9875\u622A\u56FE&PDF\u751F\u6210","/notes/nodejs/puppeteer",t),i=[p,c],r=n("intro","node-js","/notes/nodejs/intro",o,i);export{u as __default,r as __module,i as default,i as page,c as puppeteer,p as tinypng};
