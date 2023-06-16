import{c as n}from"./common-a54cd1af.js";import"./index-63bc61f7.js";const e=`<h1>前端需要去了解的 nodejs 知识</h1>
<h2>node 是什么？</h2>
<ul>
<li>Node.js 是一个基于&quot;Chrome V8 引擎&quot;的 JavaScript&quot;运行环境&quot;。</li>
</ul>
<h2>什么是 V8 引擎？</h2>
<ul>
<li>V8 引擎是一款专门解释和执行 JavaScript 代码的虚拟机。任何程序只要集成了 V8 引擎，就可以执行 JavaScript 代码。</li>
<li>浏览器集成了 V8 引擎，可以执行 JavaScript 代码；</li>
<li>将 V8 引擎嵌入到 NodeJS 中，那么我们写的 JavaScript 代码就会被 NodeJS 所执行。</li>
</ul>
<h2>什么是运行环境？</h2>
<ul>
<li>运行环境是指支持特定软件或应用程序运行的环境，包括硬件和软件环境。</li>
<li>在软件领域中，运行环境通常包括操作系统、运行时库、编程语言解释器、库文件和其他必要的组件。</li>
<li>这些组件都需要与软件应用程序进行交互，以便程序能够在特定环境下运行。</li>
<li>通常，开发者需要为不同的运行环境编写代码以确保软件在不同操作系统、不同设备上具有兼容性。</li>
</ul>
<h2>node 能做什么</h2>
<ul>
<li>写 web 服务器后台（java，php 能做的，node 也能做）</li>
<li>做项目构建工具，例如 webpack、vue-cli 都是用 node 写的</li>
<li>做命令行工具，例如 hexo（一款快速、简洁且高效的博客框架）就是用 node 写的</li>
<li>用于桌面开发</li>
</ul>
<h2>demo</h2>
<pre><code>const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =&gt; {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () =&gt; {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});
</code></pre>
`,o=`<h1>使用 node 开发图片压缩工具</h1>
<h2>知识储备</h2>
<ul>
<li>了解 TinyPNG 的作用</li>
<li>掌握基本的 nodejs</li>
<li>了解 node 的一些第三方库</li>
</ul>
<h2>工程搭建</h2>
<pre><code>1. mkdir tinypng // 创建文件目录
2. cd tinypng // 进入新创建的目录
3. npm init -y // npm 初始化目录
4. npm i commander --save // 安装依赖
5. mkdir command // 创建源码文件夹
6. cd command // 进入源码文件夹
7. echo #!/usr/bin/env node &gt; tinypng.js // 在该文件夹中创建一个JavaScriptw文件
</code></pre>
<p>然后再编辑器中打开<code>tinypng.js</code>和<code>package.json</code>文件</p>
<p>修改 package.json 文件，修改 script 文件</p>
<pre><code>&quot;scripts&quot;: {
    &quot;dev&quot;: &quot;node command/tinypng.js&quot;
},
</code></pre>
<p>开始编辑<code>tinypng.js</code>文件</p>
<pre><code>#!/usr/bin/env node
/**
 * 帮助文档
 * -------
 *
 * 获取帮助
 * 指令 -h
 *
 * 获取命令执行文件夹
 * 指令 -f
 * 参数 ./
 * 必填，待处理的图片文件夹
 *
 * 获取是否深度递归处理图片文件夹
 * 指令 --deep
 * 可选，默认不深度递归
 *
 *  */

const fs = require('fs');
const path = require('path');
const https = require('https');
const URL = require('url').URL;
const EventEmitter = require('events');
const err = msg =&gt; new EventEmitter().emit('error', msg);

(() =&gt; {

    if (getHelp()) {
        return false;
    }

    const config = {
        files: [],
        EntryFolder: getEntryFolder(),
        DeepLoop: getDeepLoop(),
        Exts: ['.jpg', '.png'],
        Max: 5200000, // 5MB == 5242848.754299136
    }

    fileFilter(config.EntryFolder)

    console.log(&quot;本次执行脚本的配置：&quot;, config);
    console.log(&quot;需要处理文件的数量:&quot;, config.files.length)

    config.files.forEach(img =&gt; fileUpload(img));

    //////////////////////////////// 工具函数

    /**
     * 获取帮助命令
     * 指令 -h
     */
    function getHelp() {
        let i = process.argv.findIndex(i =&gt; i === &quot;-h&quot;);
        if (i !== -1) {
            console.log(
                \`
            * 帮助文档
            * -------
            *
            * 获取帮助
            * 指令 -h
            *
            * 获取命令执行文件夹
            * 指令 -f
            * 参数 ./
            * 必填，待处理的图片文件夹
            *
            * 获取是否深度递归处理图片文件夹
            * 指令 --deep
            * 可选，默认不深度递归
            *
            * &gt; node ./tinypng.js -f dir --deep
            *
            *
        \`
            )
            return true;
        }
    }

    /**
     * 获取命令执行文件夹
     * 指令 -f
     * 参数 ./
     * 必填，待处理的图片文件夹
     */
    function getEntryFolder() {
        let i = process.argv.findIndex(i =&gt; i === &quot;-f&quot;);
        if (i === -1 || !process.argv[i + 1]) return err('获取命令执行文件夹：失败');
        return process.argv[i + 1];
    }

    /**
     * 获取是否深度递归处理图片文件夹
     * 指令 --deep
     * 可选，默认不深度递归
     */
    function getDeepLoop() {
        return process.argv.findIndex(i =&gt; i === &quot;--deep&quot;) !== -1;
    }

    /**
     * 过滤待处理文件夹，得到待处理文件列表
     * @param {*} folder 待处理文件夹
     * @param {*} files 待处理文件列表
     */
    function fileFilter(folder) {
        // 读取文件夹
        fs.readdirSync(folder).forEach(file =&gt; {
            let fullFilePath = path.join(folder, file)
            // 读取文件信息
            let fileStat = fs.statSync(fullFilePath);
            // 过滤文件安全性/大小限制/后缀名
            if (fileStat.size &lt;= config.Max &amp;&amp; fileStat.isFile() &amp;&amp; config.Exts.includes(path.extname(file))) config.files.push(fullFilePath);
            // 是都要深度递归处理文件夹
            else if (config.DeepLoop &amp;&amp; fileStat.isDirectory()) fileFilter(fullFilePath);
        });
    }

    /**
     * TinyPng 远程压缩 HTTPS 请求的配置生成方法
     */

    function getAjaxOptions() {
        return {
            method: 'POST',
            hostname: [&quot;tinyjpg.com&quot;, &quot;tinypng.com&quot;][Math.random() &gt;= 0.5 ? 0 : 1], // 随机请求
            path: &quot;/backend/opt/shrink&quot;,
            headers: {
                rejectUnauthorized: false,
                &quot;X-Forwarded-For&quot;: Array(4).fill(1).map(() =&gt; parseInt(Math.random() * 254 + 1)).join('.'),
                'Postman-Token': Date.now(),
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
            }
        }
    }

    /**
     * TinyPng 远程压缩 HTTPS 请求
     * @param {string} img 待处理的文件
     * @success {
     *              &quot;input&quot;: { &quot;size&quot;: 887, &quot;type&quot;: &quot;image/png&quot; },
     *              &quot;output&quot;: { &quot;size&quot;: 785, &quot;type&quot;: &quot;image/png&quot;, &quot;width&quot;: 81, &quot;height&quot;: 81, &quot;ratio&quot;: 0.885, &quot;url&quot;: &quot;https://tinypng.com/web/output/7aztz90nq5p9545zch8gjzqg5ubdatd6&quot; }
     *           }
     * @error  {&quot;error&quot;: &quot;Bad request&quot;, &quot;message&quot; : &quot;Request is invalid&quot;}
     */
    function fileUpload(imgPath) {
        let req = https.request(getAjaxOptions(), (res) =&gt; {
            res.on('data', buf =&gt; {
                let obj = JSON.parse(buf.toString());
                if (obj.error) console.log(\`压缩失败！\\n 当前文件：\${imgPath} \\n \${obj.message}\`);
                else fileUpdate(imgPath, obj);
            });
        });

        req.write(fs.readFileSync(imgPath), 'binary');
        req.on('error', e =&gt; console.error(\`请求错误! \\n 当前文件：\${imgPath} \\n\`, e));
        req.end();
    }

    // 该方法被循环调用,请求图片数据
    function fileUpdate(entryImgPath, obj) {
        let options = new URL(obj.output.url);
        let req = https.request(options, res =&gt; {
            let body = '';
            res.setEncoding('binary');
            res.on('data', (data) =&gt; body += data);
            res.on('end', () =&gt; {
                fs.writeFile(entryImgPath, body, 'binary', err =&gt; {
                    if (err) return console.error(err);
                    let log = '压缩成功';
                    log += \`优化比例: \${((1 - obj.output.ratio) * 100).toFixed(2)}%\`;
                    log += \`原始大小: \${(obj.input.size / 1024).toFixed(2)} KB\`;
                    log += \`压缩大小: \${(obj.output.size / 1024).toFixed(2)} KB\`;
                    log += \`文件：\${entryImgPath}\`
                    console.log(log);
                });
            });
        });
        req.on('error', e =&gt; console.error(e));
        req.end();
    }

})()

</code></pre>
<p>修改<code>package.json</code>文件</p>
<pre><code>&quot;scripts&quot;: {
    &quot;tinypng&quot;: &quot;node command/tinypng.js -f&quot;,
  },
</code></pre>
<p>我们可以在 cmd 中指定一个文件去压缩图片</p>
<pre><code>npm run tinypng imgDir
</code></pre>
<p>但是，如果这是作为一个 node 包的形式，我们不希望将源码暴露，这个时候我们就需要将源代码进行压缩，
可以通过一些 npm 提供的功能，例如<code>uglify-js</code>可以将源代码进行压缩，首先安装这个包</p>
<pre><code>npm i uglify-js --save-dev
</code></pre>
<p>然后修改<code>package.json</code>文件</p>
<pre><code>&quot;scripts&quot;: {
    &quot;tinypng&quot;: &quot;node command/tinypng.js -f&quot;,
    &quot;build:tinypng&quot;: &quot;uglifyjs command/tinypng.js -o index.js -c -m&quot;
  },
</code></pre>
<p>我们需要打包，将源码进行压缩，并输出到程序的根目录，并且命名为 index.js</p>
<pre><code>npm run build:tinypng
</code></pre>
<p>此时，压缩的命令就可以修改成偶们打包后的文件了</p>
<pre><code>&quot;scripts&quot;: {
    &quot;tinypng&quot;: &quot;node index.js -f&quot;,
    &quot;build:tinypng&quot;: &quot;uglifyjs command/tinypng.js -o index.js -c -m&quot;
  },
</code></pre>
<p>然后压缩的命令还是跟之前一样使用</p>
<pre><code>npm run tinypng imgDir
</code></pre>
<p>至此，一个简单的图片压缩工具完成了</p>
`,t=`<h1>Puppeteer 谷歌无头浏览器使用</h1>
<h2>简介</h2>
<p>Puppeteer 是一个 Node.js 库，提供了一组基于 Chrome DevTools 协议的高级 API，可用于通过编程方式控制 Chrome 浏览器或 Chromium 浏览器的操作。</p>
<p>Puppeteer 可以做什么？</p>
<ol>
<li>爬虫：可以使用 Puppeteer 爬取网站，获取数据，并解析结果。</li>
<li>自动化测试：可以使用 Puppeteer 进行 UI 自动化测试，自动执行登录、下单等页面操作，并对这些操作进行测试。</li>
<li>性能分析：可以使用 Puppeteer 访问页面并生成跟踪数据，进而分析页面性能，如加载时间等指标。</li>
<li>截图和生成 PDF：可以使用 Puppeteer 对页面进行截图，生成 PDF 等操作。【该功能比较好用】</li>
<li>模拟用户行为：可以使用 Puppeteer 模拟鼠标和键盘操作，实现自动化。
总之，Puppeteer 可以模拟用户在浏览器中的所有行为，并提供了丰富的 API，方便开发人员进行编程式操作。</li>
</ol>
<h2>Puppeteer 对比 canvas 的优势？</h2>
<p>在国内软件应用中，海报等形式的图片分享是流量裂变的重要手段之一。对于前端而言，利用 Canvas 绘制并通过 HTMLCanvasElement.toDataURL()等 API 最终获得图片数据是一种可选方法。但是这种方法存在很多令人不能容忍的缺点，比如：</p>
<ul>
<li>绘制在其中的图片需要遵循浏览器同源策略，否则生成图片数据时候会失败。</li>
<li>绘制复杂的大图时，会耗费较多客户端性能。</li>
<li>实现简单的布局效果，需要繁琐的 API，并且不一能和 Web 端展示效果一样。</li>
</ul>
<h3>demo</h3>
<pre><code>1. mkdir project
2. cd project
3. npm init -y
4. npm i koa puppeteer koa-router --save
5. mkdir public
6. mkdir src
7. cd src
8. echo  &gt; index.js
</code></pre>
<p>此时文件目录</p>
<pre><code>project
- public
- src
-- index.js
</code></pre>
<p>编辑index.js文件</p>
<pre><code>const Koa = require(&quot;koa&quot;);
const app = new Koa();
const port = 5000;
const Router = require(&quot;koa-router&quot;);
const puppeteer = require(&quot;puppeteer&quot;);
const router = new Router();

// 截取某个dom页面
async function demo1() {
  // 页面是可以注入数据
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // 去京东的官网截取某个dom节点的图
  await page.goto(&quot;https://www.jd.com&quot;, {
    waitUntil: [&quot;domcontentloaded&quot;, &quot;networkidle2&quot;, &quot;load&quot;],
  });
  const domSelector = &quot;J_promotional-top&quot;;
  const dom = await page.$(\`#\${domSelector}\`);
  const domInfos = await dom.boundingBox();
  const options = {
    clip: {
      x: domInfos.x,
      y: domInfos.y,
      width: domInfos.width,
      height: domInfos.height,
    },
    path: \`./public/example-\${Date.now()}-\${domSelector}.png\`,
  };
  await page.screenshot(options);
  await browser.close();
}

// 截取整个页面
async function demo2() {
  // 页面是可以注入数据
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(&quot;https://www.jd.com&quot;, {
    waitUntil: [&quot;domcontentloaded&quot;, &quot;networkidle2&quot;, &quot;load&quot;],
  });
  await page.screenshot({
    path: \`./public/example-\${Date.now()}-fullpage.png\`,
    fullPage: true,
  });
  await browser.close();
}

// 页面转成pdf
async function demo3() {
  // 页面是可以注入数据
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(&quot;https://www.zhihu.com/signin?next=%2F&quot;, {
    waitUntil: [&quot;domcontentloaded&quot;, &quot;networkidle2&quot;, &quot;load&quot;],
  });

  await page.pdf({ path: \`./public/example-\${Date.now()}.pdf\` });
  await browser.close();
}

// 访问这个服务器地址，去执行某个操作，截图生成pdf等
router.get(&quot;/&quot;, async (ctx) =&gt; {
  await demo3();
  ctx.body = &quot;&lt;h1&gt;done&lt;/h1&gt;&quot;;
});

// 注册路由中间件
app.use(router.routes());
app.use(router.allowedMethods({}));
app.listen(port, onStartAfterCb);
app.on(&quot;error&quot;, onError);

// 记录日志或发送告警。
function onError(error, ctx) {
  console.error(&quot;koa error:&quot;, error, ctx);
  // 执行一些处理逻辑
}

// 应用启动后做的一些操作
function onStartAfterCb() {
  console.log(\`app start at: http://0.0.0.0:\${port}\`);
}

</code></pre>
<p>然后我们就可以测试功能，打开命令行win+r 输入cmd,因为我们对外抛出了一个接口，此时我们只需要去调用这个接口便可以执行相应的操作</p>
<p>在命令行中输入如下命令</p>
<pre><code>curl -X GET \`yourIp:\${port}\`
</code></pre>
<p>便可在public文件夹看到相应的文件，至此一个简单的demo完成了</p>
`,r=`<h1>node 业务代码平滑更新</h1>
<h2>负载均衡</h2>
<p>如果要更新 a 进程，但是用户正在使用 a 进程，则需要先将用户请求从 a 进程中移除，确保用户不会受到影响。</p>
<p>一种方法是，在更新 a 进程之前，将 a 进程从 Nginx 负载均衡的后端服务器列表中移除，在更新完成后再将其添加回去。</p>
<p>具体的配置方法取决于你使用的 Nginx 版本和负载均衡方式。以下是一个可能的 Nginx 配置示例，假设你使用的是 upstream 模块实现负载均衡：</p>
<pre><code>http {
    upstream app_servers {
        server 127.0.0.1:3000;  # a进程
        server 127.0.0.1:3001;  # b进程
        server 127.0.0.1:3002;  # c进程
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://app_servers;
        }
    }
}
</code></pre>
<p>在这个例子中，Nginx 将用户请求通过 HTTP 代理转发到 app_servers 上的某个服务器进程。如果要更新 a 进程，可以将其从 upstream 列表中移除，等更新完成后再添加回去。例如：</p>
<pre><code>http {
    upstream app_servers {
        server 127.0.0.1:3001;  # b进程
        server 127.0.0.1:3002;  # c进程
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://app_servers;
        }
    }
}
</code></pre>
<p>这样，在更新 a 进程时，用户的请求就不会被转发到 a 进程上，而是被转发到其他正常运行的进程上，确保用户不会受到影响。</p>
<p>更新完成后，记得将 a 进程重新添加到 upstream 列表中，例如：</p>
<pre><code>http {
    upstream app_servers {
        server 127.0.0.1:3000;  # a进程
        server 127.0.0.1:3001;  # b进程
        server 127.0.0.1:3002;  # c进程
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://app_servers;
        }
    }
}
</code></pre>
<p>这样，Nginx 就会将用户请求平均分配到所有正常运行的进程中，确保服务的稳定性和可用性。</p>
<h2>平滑重启</h2>
<ul>
<li>那么 a 进程如何告知自己要重启呢？</li>
</ul>
<p>首先，在用户发送请求之前，a 进程需要向 Nginx 注册自己的地址和端口，以便 Nginx 能够将请求转发到自己。这可以通过向一个共享的配置文件中写入自己的地址和端口来实现。例如，在 Node.js 中可以使用共享内存来实现：</p>
<pre><code>const cluster = require('cluster');
const fs = require('fs');

if (cluster.isMaster) {
 // 创建共享内存
 const fd = fs.openSync('worker-info.txt', 'w+');

 for (let i = 0; i &lt; numCPUs; i++) {
   const worker = cluster.fork();

   // 监听worker上报自己的地址和端口
   worker.on('message', (message) =&gt; {
     if (message.type === 'REGISTER') {
       // 写入共享文件中
       fs.write(fd, \`\${message.pid} \${message.address} \${message.port}\\n\`);
     }
   });
 }
} else {
 const express = require('express');
 const app = express();

 // 启动HTTP服务器并上报自己的地址和端口
 const server = app.listen(0, () =&gt; {
   const message = {
     type: 'REGISTER',
     pid: process.pid,
     address: server.address().address,
     port: server.address().port
   };
   process.send(message);
 });

 // 处理HTTP请求逻辑
 app.get('/', (req, res) =&gt; {
   // TODO: 处理请求
 });
}
</code></pre>
<p>在上面的例子中，每个进程都会从共享文件中读取其他进程的地址和端口，以便进行Nginx负载均衡。</p>
<p>接下来，在更新a进程之前，可以将a进程从Nginx负载均衡的后端服务器列表中移除，并发送一个信号让a进程重启。例如，在Node.js中可以使用process.kill方法发送信号：</p>
<pre><code>const fs = require('fs');

// 读取共享文件中的地址和端口
const workers = {};
fs.readFileSync('worker-info.txt', 'utf8').split('\\n').forEach((line) =&gt; {
  const [pid, address, port] = line.trim().split(' ');
  if (pid &amp;&amp; address &amp;&amp; port) {
    workers[pid] = { address, port };
  }
});

// 从Nginx负载均衡列表中移除当前进程
delete workers[process.pid];
fs.writeFileSync('worker-info.txt', Object.values(workers).map((w) =&gt; \`\${w.address} \${w.port}\`).join('\\n'));

// 发送重启信号
process.kill(process.pid, 'SIGTERM');
</code></pre>
<p>在这个例子中，首先读取共享文件中的所有进程地址和端口，然后从中移除当前进程的地址和端</p>
`,c=n("intro","简介","/notes/nodejs/intro",e),p=n("tinypng","图片压缩","/notes/nodejs/tinypng",o),s=n("nodeUpdate","升级node业务代码","/notes/nodejs/nodeUpdate",r),i=n("puppeteer","网页截图&PDF生成","/notes/nodejs/puppeteer",t),a=[p,i,s],l=n("intro","node-js","/notes/nodejs/intro",e,a);export{c as __default,l as __module,a as default,s as nodeUpdate,a as page,i as puppeteer,p as tinypng};
