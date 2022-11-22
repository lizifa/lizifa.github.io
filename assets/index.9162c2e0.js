import{E as n,k as e}from"./index.a4203278.js";const t=`<h1>React \u7684\u57FA\u672C\u6982\u5FF5</h1>
<h2>\u4EC0\u4E48\u662F React \uFF1F</h2>
<ul>
<li>\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93</li>
</ul>
<h2>\u7279\u70B9</h2>
<ul>
<li>
<p>\u58F0\u660E\u5F0F</p>
<p>React \u4F7F\u521B\u5EFA\u4EA4\u4E92\u5F0F UI \u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u4E3A\u4F60\u5E94\u7528\u7684\u6BCF\u4E00\u4E2A\u72B6\u6001\u8BBE\u8BA1\u7B80\u6D01\u7684\u89C6\u56FE\uFF0C\u5F53\u6570\u636E\u53D8\u52A8\u65F6 React \u80FD\u9AD8\u6548\u66F4\u65B0\u5E76\u6E32\u67D3\u5408\u9002\u7684\u7EC4\u4EF6\u3002<br/>
\u4EE5\u58F0\u660E\u5F0F\u7F16\u5199 UI\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u7684\u4EE3\u7801\u66F4\u52A0\u53EF\u9760\uFF0C\u4E14\u65B9\u4FBF\u8C03\u8BD5\u3002</p>
</li>
<li>
<p>\u7EC4\u4EF6\u5316</p>
<p>\u6784\u5EFA\u7BA1\u7406\u81EA\u8EAB\u72B6\u6001\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u7136\u540E\u5BF9\u5176\u7EC4\u5408\u4EE5\u6784\u6210\u590D\u6742\u7684 UI\u3002<br/>
\u7531\u4E8E\u7EC4\u4EF6\u903B\u8F91\u4F7F\u7528 JavaScript \u7F16\u5199\u800C\u975E\u6A21\u677F\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u8F7B\u677E\u5730\u5728\u5E94\u7528\u4E2D\u4F20\u9012\u6570\u636E\uFF0C\u5E76\u4FDD\u6301\u72B6\u6001\u4E0E DOM \u5206\u79BB\u3002</p>
</li>
<li>
<p>\u4E00\u6B21\u5B66\u4E60\uFF0C\u968F\u5904\u7F16\u5199</p>
<p>\u65E0\u8BBA\u4F60\u73B0\u5728\u4F7F\u7528\u4EC0\u4E48\u6280\u672F\u6808\uFF0C\u5728\u65E0\u9700\u91CD\u5199\u73B0\u6709\u4EE3\u7801\u7684\u524D\u63D0\u4E0B\uFF0C\u901A\u8FC7\u5F15\u5165 React \u6765\u5F00\u53D1\u65B0\u529F\u80FD\u3002<br/>
React \u8FD8\u53EF\u4EE5\u4F7F\u7528 Node \u8FDB\u884C\u670D\u52A1\u5668\u6E32\u67D3\uFF0C\u6216\u4F7F\u7528 React Native \u5F00\u53D1\u539F\u751F\u79FB\u52A8\u5E94\u7528\u3002</p>
</li>
</ul>
<h2>React \u7406\u5FF5</h2>
<p>\u6211\u4EEC\u53EF\u4EE5\u4ECE<a href="https://zh-hans.reactjs.org/docs/thinking-in-react.html" target="_blank"><font color="red">\u5B98\u7F51</font></a>\u770B\u5230 React \u7684\u7406\u5FF5\uFF1A</p>
<p>\u6211\u4EEC\u8BA4\u4E3A\uFF0CReact \u662F\u7528 JavaScript \u6784\u5EFA<font color="red">\u5FEB\u901F\u54CD\u5E94</font>\u7684\u5927\u578B Web \u5E94\u7528\u7A0B\u5E8F\u7684\u9996\u9009\u65B9\u5F0F\u3002\u5B83\u5728 Facebook \u548C Instagram \u4E0A\u8868\u73B0\u4F18\u79C0\u3002</p>
<p>\u53EF\u89C1\uFF0C\u5173\u952E\u662F\u5B9E\u73B0\u5FEB\u901F\u54CD\u5E94\u3002\u90A3\u4E48\u5236\u7EA6\u5FEB\u901F\u54CD\u5E94\u7684\u56E0\u7D20\u662F\u4EC0\u4E48\u5462\uFF1F</p>
<p>\u6211\u4EEC\u65E5\u5E38\u4F7F\u7528 App\uFF0C\u6D4F\u89C8\u7F51\u9875\u65F6\uFF0C\u6709\u4E24\u7C7B\u573A\u666F\u4F1A\u5236\u7EA6\u5FEB\u901F\u54CD\u5E94\uFF1A</p>
<p>\u5F53\u9047\u5230\u5927\u8BA1\u7B97\u91CF\u7684\u64CD\u4F5C\u6216\u8005\u8BBE\u5907\u6027\u80FD\u4E0D\u8DB3\u4F7F\u9875\u9762\u6389\u5E27\uFF0C\u5BFC\u81F4\u5361\u987F\u3002</p>
<p>\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u540E\uFF0C\u7531\u4E8E\u9700\u8981\u7B49\u5F85\u6570\u636E\u8FD4\u56DE\u624D\u80FD\u8FDB\u4E00\u6B65\u64CD\u4F5C\u5BFC\u81F4\u4E0D\u80FD\u5FEB\u901F\u54CD\u5E94\u3002</p>
<p>\u8FD9\u4E24\u7C7B\u573A\u666F\u53EF\u4EE5\u6982\u62EC\u4E3A\uFF1A</p>
<p>CPU \u7684\u74F6\u9888</p>
<p>IO \u7684\u74F6\u9888</p>
<p>React \u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E24\u4E2A\u74F6\u9888\u7684\u5462\uFF1F</p>
<h2>React \u8FED\u4EE3\u7684\u53D8\u5316</h2>
<p>15 \u53CA\u4E4B\u524D\u7248\u672C Stack Reconciler \u4E00\u65E6\u53D1\u8D77\u66F4\u65B0\uFF0C\u76F4\u5230\u66F4\u65B0\u5B8C\u6210\u624D\u4F1A\u7ED3\u675F\uFF0C\u4E2D\u95F4\u4E0D\u4F1A\u6682\u505C\uFF0C\u5BFC\u81F4\u9875\u9762\u5361\u987F\uFF08\u6BD4\u5982\u9875\u9762\u5728\u66F4\u65B0\u4E00\u4E2A\u5185\u5BB9\uFF0C\u800C\u6211\u4EEC\u53BB\u6EDA\u52A8\u9875\u9762\u4E86\uFF09<br/>
16 Fiber Reconciler \u4E00\u65E6\u66F4\u65B0\uFF0C\u5206\u6210\u591A\u4E2A task,\u63D0\u4EA4\u7ED9\u6D4F\u89C8\u5668\u505A\u66F4\u65B0\uFF0C\u4E3A\u4E86\u89E3\u51B3\u5F53\u6709\u5927\u91CF\u4EFB\u52A1\u66F4\u65B0\u65F6\u53EF\u4EE5\u4E2D\u65AD<br/>
18 Concurrent Mode \u76EE\u524D\u5DF2\u7ECF\u5728\u5F00\u53D1\uFF0C\u5728 16 \u7684\u57FA\u7840\u4E0A\u53EF\u4EE5\u88AB\u4E2D\u65AD\u7684\u57FA\u7840\u4E0A\uFF0C\u4E3A\u4E86\u5728\u6D4F\u89C8\u5668\u91CC\u53D1\u6325\u5230\u6781\u81F4\uFF0C\u5F53\u6709\u5927\u91CF\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u4F18\u5148\u7EA7\u6BD4\u8F83\u4F4E\u7684\u4EFB\u52A1\uFF0C\u4F1A\u653E\u5230\u7A7A\u95F2\u7684\u65F6\u5019\u66F4\u65B0 <br/>requestIdleCallback \u4F46\u662F\u5B83\u7684\u517C\u5BB9\u6027\u4E0D\u597D\uFF0Creact \u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8FD9\u6837\u7684\u5E93\u3002</p>
`,o=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
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
`,r=`<h1>React \u8FED\u4EE3\u7684\u53D8\u5316</h1>
<p>&lt;= 15 Stack Reconciler \u4E00\u65E6\u53D1\u8D77\u66F4\u65B0\uFF0C\u76F4\u5230\u66F4\u65B0\u5B8C\u6210\u624D\u4F1A\u7ED3\u675F\uFF0C\u4E2D\u95F4\u4E0D\u4F1A\u6682\u505C\uFF0C\u5BFC\u81F4\u9875\u9762\u5361\u987F\uFF08\u6BD4\u5982\u9875\u9762\u5728\u66F4\u65B0\u4E00\u4E2A\u5185\u5BB9\uFF0C\u800C\u6211\u4EEC\u53BB\u6EDA\u52A8\u9875\u9762\u4E86\uFF09</p>
<p>16 Fiber Reconciler \u4E00\u65E6\u66F4\u65B0\uFF0C\u5206\u6210\u591A\u4E2A task,\u63D0\u4EA4\u7ED9\u6D4F\u89C8\u5668\u505A\u66F4\u65B0\uFF0C\u4E3A\u4E86\u89E3\u51B3\u5F53\u6709\u5927\u91CF\u4EFB\u52A1\u66F4\u65B0\u65F6\u53EF\u4EE5\u4E2D\u65AD</p>
<p>18 Concurrent Mode \u76EE\u524D\u5DF2\u7ECF\u5728\u5F00\u53D1\uFF0C\u5728 16 \u7684\u57FA\u7840\u4E0A\u53EF\u4EE5\u88AB\u4E2D\u65AD\u7684\u57FA\u7840\u4E0A\uFF0C\u4E3A\u4E86\u5728\u6D4F\u89C8\u5668\u91CC\u53D1\u6325\u5230\u6781\u81F4\uFF0C\u5F53\u6709\u5927\u91CF\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u4F18\u5148\u7EA7\u6BD4\u8F83\u4F4E\u7684\u4EFB\u52A1\uFF0C\u4F1A\u653E\u5230\u7A7A\u95F2\u7684\u65F6\u5019\u66F4\u65B0 requestIdleCallback \u4F46\u662F\u5B83\u7684\u517C\u5BB9\u6027\u4E0D\u597D\uFF0Creact \u81EA\u5DF1\u5B9E\u73B0\u4E86\u4E00\u4E2A\u8FD9\u6837\u7684\u5E93\u3002</p>
`,a=`<pre><code>/**
 \u521B\u5EFA\u6839\u8282\u70B9
 */

export type CreateRootOptions = {
  unstable_strictMode?: boolean,
  unstable_concurrentUpdatesByDefault?: boolean,
  unstable_transitionCallbacks?: TransitionTracingCallbacks,
  identifierPrefix?: string,
  onRecoverableError?: (error: mixed) =&gt; void,
  ...
};

export function createRoot(
  container: Element | Document | DocumentFragment,
  options?: CreateRootOptions,
): RootType {
  if (!isValidContainer(container)) {
    throw new Error('createRoot(...): Target container is not a DOM element.');
  }

  warnIfReactDOMContainerInDEV(container);

  let isStrictMode = false;
  let concurrentUpdatesByDefaultOverride = false;
  let identifierPrefix = '';
  let onRecoverableError = defaultOnRecoverableError;
  let transitionCallbacks = null;

  if (options !== null &amp;&amp; options !== undefined) {
    ...
    if (options.unstable_strictMode === true) {
      isStrictMode = true;
    }
    if (
      allowConcurrentByDefault &amp;&amp;
      options.unstable_concurrentUpdatesByDefault === true
    ) {
      concurrentUpdatesByDefaultOverride = true;
    }
    if (options.identifierPrefix !== undefined) {
      identifierPrefix = options.identifierPrefix;
    }
    if (options.onRecoverableError !== undefined) {
      onRecoverableError = options.onRecoverableError;
    }
    if (options.unstable_transitionCallbacks !== undefined) {
      transitionCallbacks = options.unstable_transitionCallbacks;
    }
  }

  const root = createContainer(
    container,
    ConcurrentRoot,
    null,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix,
    onRecoverableError,
    transitionCallbacks,
  );
  markContainerAsRoot(root.current, container);

  const rootContainerElement: Document | Element | DocumentFragment =
    container.nodeType === COMMENT_NODE
      ? (container.parentNode: any)
      : container;
  listenToAllSupportedEvents(rootContainerElement);

  return new ReactDOMRoot(root);
}
</code></pre>
`,u={articleId:"intro",content:t,path:"/notes/react/intro",title:"\u7B80\u4ECB",routeType:n.inside},i={articleId:"create_env",content:o,path:"/notes/react/create_env",title:"\u73AF\u5883\u642D\u5EFA ",routeType:n.inside},c={articleId:"iterate",content:r,path:"/notes/react/iterate",title:"React \u8FED\u4EE3\u7684\u53D8\u5316",routeType:n.inside},p={articleId:"createRoot",content:a,path:"/notes/react/createRoot",title:"createRoot",routeType:n.inside},d={articleId:"404",content:e,path:"/notes/react/404",title:"\u9875\u9762\u627E\u4E0D\u5230\u4E86",routeType:n.inside},l=[i,c,p],f={path:"/notes/react/intro",title:"React",children:l};export{d as _,u as a,f as b,l as t};
