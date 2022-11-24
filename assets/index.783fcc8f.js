import{l as n}from"./index.5d606104.js";const t=`<p>\u5F00\u53D1\u4E2D....</p>
`,o=`<h1>\u51FD\u6570\u9632\u6296(debounce)</h1>
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
`,e=`<h2>\u51FD\u6570\u8282\u6D41(throttle)</h2>
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
`,c=n("intro","\u7B80\u4ECB","/notes/common-functions/intro",t),i=n("debounce","\u8282\u6D41","/notes/common-functions/debounce",o),r=n("throttling","\u9632\u6296","/notes/common-functions/throttling",e),u=[i,r],h=n("intro","\u5E38\u7528\u529F\u80FD","/notes/common-functions/intro",t,u);export{c as __default,h as __module,i as debounce,u as default,u as page,r as throttling};
