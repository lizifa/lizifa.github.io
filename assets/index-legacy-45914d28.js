System.register(["./index-legacy-e4369d5c.js"],(function(n,l){"use strict";var i;return{setters:[n=>{i=n.E}],execute:function(){const l=n("__default",{articleId:"intro",content:"<h1>前端性能优化篇</h1>\n<h2>性能优化方案</h2>\n<ul>\n<li>CDN</li>\n<li>懒加载</li>\n<li>节流防抖</li>\n<li>图片优化</li>\n<li>打包器</li>\n<li>服务端渲染</li>\n<li>离线包</li>\n<li>浏览器和 webview</li>\n<li>webworker</li>\n</ul>\n<h2>1. CDN</h2>\n<ul>\n<li>\n<p>cdn 的概念</p>\n<p>CDN（Content Delivery Network，内容分发网络）是一种构建在现有互联网之上的智能虚拟网络，它将用户的请求自动分配到最适合用户的缓存服务器上，以达到更快的内容加载速度和更高的可用性、并降低原始服务器的负载压力。</p>\n</li>\n<li>\n<p>cdn 原理</p>\n<p>CDN 和 DNS 有着密不可分的联系，先来看一下 DNS 的解析域名过程，在浏览器输入 www.test.com 的解析过程如下：</p>\n<p>（1）检查浏览器缓存<br/>\n（2）检查操作系统缓存，常见的如 hosts 文件<br/>\n（3）检查路由器缓存<br/>\n（4）如果前几步都没没找到，会向 ISP(网络服务提供商)的 LDNS 服务器查询<br/>\n（5）如果 LDNS 服务器没找到，会向根域名服务器(Root Server)请求解析，分为以下几步：<br/></p>\n<ul>\n<li>根服务器返回顶级域名(TLD)服务器如.com，.cn，.org 等的地址，该例子中会返回.com 的地址</li>\n<li>接着向顶级域名服务器发送请求，然后会返回次级域名(SLD)服务器的地址，本例子会返回.test 的地址</li>\n<li>接着向次级域名服务器发送请求，然后会返回通过域名查询到的目标 IP，本例子会返回www.test.com的地址</li>\n<li>Local DNS Server 会缓存结果，并返回给用户，缓存在系统中</li>\n</ul>\n</li>\n<li>\n<p>cdn 优点</p>\n<ul>\n<li>加速网站的访问：由于用户的请求被映射到最佳节点上，所以可以大大降低访问延迟，提高网站的访问速度和用户体验。</li>\n<li>提高网站的稳定性：由于节点间会自动备份，一旦某个节点故障，请求会自动转发到备用节点上，保证网站不会因节点故障而不可用。</li>\n<li>减轻源站负载压力：由于 CDN 可以缓存热点资源，用户请求会直接被转发到节点上，减少了源站的压力，提高了源站的可用性和性能。</li>\n<li>可靠的安全保障：CDN 服务商会为用户提供多样化的安全服务，例如防盗链、DDoS 攻击防护等。</li>\n</ul>\n</li>\n<li>\n<p>cdn 使用场景</p>\n<ul>\n<li>使用第三方的 CDN 服务：如果想要开源一些项目，可以使用第三方的 CDN 服务</li>\n<li>使用 CDN 进行静态资源的缓存：将自己网站的静态资源放在 CDN 上，比如 js、css、图片等。可以将整个项目放在 CDN 上，完成一键部署。</li>\n<li>直播传送：直播本质上是使用流媒体进行传送，CDN 也是支持流媒体传送的，所以直播完全可以使用 CDN 来提高访问速度。CDN 在处理流媒体的时候与处理普通静态文件有所不同，普通文件如果在边缘节点没有找到的话，就会去上一层接着寻找，但是流媒体本身数据量就非常大，如果使用回源的方式，必然会带来性能问题，所以流媒体一般采用的都是主动推送的方式来进行。</li>\n</ul>\n</li>\n</ul>\n<h2>2. 懒加载</h2>\n<ul>\n<li>\n<p>懒加载的概念</p>\n<p>懒加载是一种性能优化技术，它将网页的某些资源（如图片、视频、脚本等）延迟加载，直到用户需要访问它们的时候再去下载和渲染显示。这样做可以减少网页的初始加载时间，提升用户体验。</p>\n</li>\n<li>\n<p>懒加载的特点</p>\n<ul>\n<li>提高网页的加载速度: 懒加载能够减少首次加载的资源量，加快网页加载速度，提升用户体验。</li>\n<li>减少带宽的占用: 懒加载可以延迟请求那些不必要的资源，减轻服务器的负担，节省带宽的使用。</li>\n<li>提升网页的性能: 懒加载可以避免一次性加载太多文件，避免资源浪费，减少浏览器的内存占用。</li>\n<li>改善用户体验: 懒加载可以使用户体验更佳，因为他们可以更快地访问所需的内容。如果网页包含大量图片或视频，用户可以更快地访问和浏览内容。\n总的来说，懒加载是一种非常实用的性能优化技术，可以提高网站的响应速度，改善用户体验，并且减少带宽和资源浪费。</li>\n</ul>\n</li>\n<li>\n<p>懒加载的实现原理</p>\n<ul>\n<li>预先设定占位符：在页面显示之前，我们通常先用一张相同大小的待替换占位符，渲染到页面上。这样，在页面显示完成之前，我们总能确定图片或者各种其他资源的占用位置。</li>\n<li>检测视口范围：用 JavaScript 监听滚动事件，获取屏幕视口的大小和当前滚动的位置，用于判断哪些资源应该被加载。</li>\n<li>加载对应的资源：当浏览器滚动到需要展示的资源位置时，我们就用异步的方式去请求对应位置的资源。</li>\n<li>替换占位符：当图片或其他资源加载完成后，直接修改其 src 属性，然后将占位符替换。\n需要注意的是，不仅是图片和视频可以进行懒加载，很多 JS 文件和 CSS 文件同样可以进行懒加载。懒加载这个技术不仅可以提高页面载入速度，而且也可以节省带宽，大大提升了用户体验。</li>\n</ul>\n</li>\n</ul>\n<h2>3. 节流防抖</h2>\n<p>整理中。。。</p>\n<h2>4. 图片优化</h2>\n<p>整理中。。。</p>\n<h2>5. 打包器（webpack,vitejs,rollup）</h2>\n<p>整理中。。。</p>\n<h2>6. 服务端渲染</h2>\n<p>整理中。。。</p>\n<h2>7. 离线包</h2>\n<p>整理中。。。</p>\n<h2>8. 浏览器和 webview</h2>\n<p>整理中。。。</p>\n<h2>9. webworker</h2>\n<p>整理中。。。</p>\n",path:"/notes/web-optimization/intro",title:"简介",routeType:i.inside}),e=[];n({page:e,default:e}),n("__module",{path:l.path,title:"性能优化",children:[]})}}}));
