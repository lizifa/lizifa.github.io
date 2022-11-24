import{l as e}from"./index.5d606104.js";const n=`<p>\u5F00\u53D1\u4E2D....</p>
`,t=`<h1>\u73AF\u5883\u642D\u5EFA</h1>
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
`,p=e("intro","\u7B80\u4ECB","/notes/react/intro",n),o=e("create_env","\u7B80\u4ECB","/notes/react/create_env",t),r=[o],c=e("intro","React","/notes/react/intro",n,r);export{p as __default,c as __module,o as create_env,r as default,r as page};
