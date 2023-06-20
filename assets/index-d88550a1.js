import{c as n}from"./common-583bb88b.js";import"./index-c154fa53.js";const l=`<h1>个人对 Vue 的一些理解</h1>
<h2>vue 是什么？</h2>
<p>Vue.js是一个用于创建用户界面的开源 JavaScript 框架，也是一个创建单页应用的 Web 应用框架。2016 年一项针对 JavaScript 的调查表明，Vue 有着 89%的开发者满意度。</p>
<p>在 GitHub 上，该项目平均每天能收获 95 颗星，为 Github 有史以来星标数第 3 多的项目同时也是一款流行的 JavaScript 前端框架，旨在更好地组织与简化 Web 开发。</p>
<p>Vue 所关注的核心是 MVC 模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互</p>
<p>PS: Vue 作者尤雨溪是在为 AngularJS 工作之后开发出了这一框架。他声称自己的思路是提取 Angular 中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于 2014 年 2 月</p>
<h2>Vue 核心特性？</h2>
<ul>
<li>
<p>数据驱动</p>
<p>MVVM 表示的是 Model-View-ViewModel</p>
<ul>
<li>Model：模型层，负责处理业务逻辑以及和服务器端进行交互</li>
<li>View：视图层：负责将数据模型转化为 UI 展示出来，可以简单的理解为 HTML 页面</li>
<li>ViewModel：视图模型层，用来连接 Model 和 View，是 Model 和 View 之间的通信桥梁</li>
</ul>
</li>
<li>
<p>组件化</p>
<p>1.什么是组件化一句话来说就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在 Vue 中每一个.vue 文件都可以视为一个组件<br/></p>
<p>2.组件化的优势</p>
<ul>
<li>降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现</li>
<li>调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单</li>
<li>提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级</li>
</ul>
</li>
<li>
<p>指令系统</p>
<p>指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</p>
<ul>
<li>
<p>常用的指令</p>
<ul>
<li>条件渲染指令 v-if</li>
<li>列表渲染指令 v-for</li>
<li>属性绑定指令 v-bind</li>
<li>事件绑定指令 v-on</li>
<li>双向数据绑定指令 v-model</li>
<li>没有指令之前我们是怎么做的？是不是先要获取到 DOM 然后在....干点啥</li>
</ul>
</li>
</ul>
</li>
</ul>
`,i=n("intro","简介","/notes/vuejs/intro",l),e=[],t=n("intro","Vue",i.path,l,e);export{i as __default,t as __module,e as default,e as page};
