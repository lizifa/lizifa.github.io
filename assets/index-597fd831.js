import{c as n}from"./common-82d4845d.js";import"./index-3db1033b.js";const l=`<h1>个人对 React 的一些理解</h1>
<h1>是什么？</h1>
<ul>
<li>
<p>React，用于构建用户界面的 JavaScript 库，只提供了 UI 层面的解决方案</p>
</li>
<li>
<p>遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效</p>
</li>
<li>
<p>使用虚拟 DOM 来有效地操作 DOM，遵循从高阶组件到低阶组件的单向数据流</p>
</li>
<li>
<p>帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面</p>
</li>
<li>
<p>react 类组件使用一个名为 render() 的方法或者函数组件 return，接收输入的数据并返回需要展示的内容</p>
</li>
</ul>
<pre><code>class HelloMessage extends React.Component {
  render() {
    return (
      &lt;div&gt;
        Hello {this.props.name}
      &lt;/div&gt;
    );
  }
}

ReactDOM.render(
  &lt;HelloMessage name=&quot;Taylor&quot; /&gt;,
  document.getElementById('hello-example')
);
</code></pre>
<p>上述这种类似 XML 形式就是 JSX，最终会被 babel 编译为合法的 JS 语句调用</p>
<p>被传入的数据可在组件中通过 props 进行访问</p>
<h2>特性</h2>
<p>React特性有很多，如：</p>
<ul>
<li>JSX语法</li>
<li>单向数据绑定</li>
<li>虚拟DOM</li>
<li>声明式编程</li>
<li>Component</li>
</ul>
<h2>优势</h2>
<ul>
<li>高效灵活</li>
<li>声明式的设计，简单使用</li>
<li>组件式开发，提高代码复用率</li>
<li>单向响应的数据流会比双向绑定的更安全，速度更快</li>
</ul>
`,e=n("intro","简介","/notes/react/intro",l),t=[],o=n("intro","react-js",e.path,l,t);export{e as __default,o as __module,t as default,t as page};
