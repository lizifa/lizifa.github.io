import{c as A}from"./common-65c1b8cf.js";const n=`<h1>前端需要去了解的 nodejs 知识</h1>
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
`,e=`<h1>使用 node 开发图片压缩工具</h1>
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
`,o=`<h1>Puppeteer 谷歌无头浏览器使用</h1>
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
`,t=`<h1>node 业务代码平滑更新</h1>
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
`,i=`<h1>如何开发一个基于 node.js 的 CLI 工具</h1>
<h2>cli 工具的作用</h2>
<ul>
<li>前端开发中的 CLI 工具（Command Line Interface，命令行界面）可以帮助开发人员提高效率，简化繁琐的工作流程，并且可以提供一些工具和模板，使用者可以在模板基础之上快速创建项目，加快开发进度。</li>
</ul>
<h2>完整 demo</h2>
<ul>
<li>
<p>初始化工程</p>
<pre><code>1. mkdir cli
2. cd cli
3. npm init -y
4. mkdir lib
5. cd lib
6. echo #!/usr/bin/env node &gt; index.js // 在该文件夹中创建一个JavaScriptw文件
</code></pre>
</li>
<li>
<p>编辑 package.json 和 index.js 文件</p>
</li>
</ul>
<p>// package.json</p>
<pre><code>{
  &quot;name&quot;: &quot;@lphva/cli&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;main&quot;: &quot;index.js&quot;,
  &quot;bin&quot;: {
    &quot;lphva&quot;: &quot;lib/index.js&quot; // 我们在cmd中使用的命令
  },
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;nodemon lib/index.js&quot;,
    &quot;dev2&quot;: &quot;lphva&quot;
  },
  &quot;keywords&quot;: [],
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;
}

</code></pre>
<p>lib/index.js</p>
<pre><code>#!/usr/bin/env node

console.log(1) // 随便输出一些信息
</code></pre>
<ul>
<li>在本地安装 lphva 命令</li>
</ul>
<pre><code>yarn link // 如果你本地安装了yarn
npm link // 如果你本地安装了npm
</code></pre>
<ul>
<li>测试，我们启动 dev2 命令</li>
</ul>
<img src="data:image/png;base64,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wAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUCMiMAAAAAAAAECNiMAAAAAAAAAANSICAwAAAAAAANSICAwAAAAAAABQIyIwAAAAAAAAQI2IwAAAAAAAAAA1IgIDAAAAAAAA1IgIDAAAAAAAAFAjIjAAAAAAAABAjYjAAAAAAAAAADUiAgMAAAAAAADUiAgMAAAAAAAAUBv3wv8PfvCAb/8ObDwAAAAASUVORK5CYII=" style="display:block;width:100%"/>
<p><em>说明工具开发功能</em></p>
`,s=`<h1>如何发布一个 npm 包</h1>
<p>发布npm包的步骤如下：</p>
<ol>
<li>创建npm账号</li>
</ol>
<p>首先，你需要创建一个npm账号。如果你已经有了npm账号，可以跳过这一步。</p>
<p>你可以在 <code>https://www.npmjs.com/signup</code> 上注册一个新的账号。</p>
<ol start="2">
<li>创建包</li>
</ol>
<p>在本地创建一个新的文件夹并进入该文件夹，使用以下命令：</p>
<pre><code>mkdir my-package
cd my-package
npm init
</code></pre>
<p>在初始化期间，你需要输入包的名称、版本、描述等信息。</p>
<ol start="3">
<li>编写代码和测试</li>
</ol>
<p>在该文件夹下编写你的库代码，并确保代码符合质量标准。</p>
<p>使用以下命令进行单元测试：</p>
<pre><code>npm test
</code></pre>
<p>确保所有单元测试通过，并符合你的预期。</p>
<ol start="4">
<li>登录npm</li>
</ol>
<p>使用以下命令登录npm：</p>
<pre><code>npm login
</code></pre>
<p>输入你的npm账号信息以进行登录。</p>
<ol start="5">
<li>发布包</li>
</ol>
<p>使用以下命令发布你的包：</p>
<pre><code>npm publish
</code></pre>
<p>你的包现在就可以在npm上下载并使用了。</p>
<p>注意，一旦你发布了一个包，你就不能再修改它。如果你需要修改包，请增加版本号并重新发布。</p>
`,r=`<h1>PM2 进程守护基础使用</h1>
<p>简单搭建一个 <code>node</code> 应用，目录如下：
<img src="data:image/png;base64,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" style="border-radius:8px;width:100%;display:block;"/></p>
<pre><code>1. mkdir autoBuild
2. cd mkdir autoBuild
3. npm init -y
4. npm i koa koa-router --save
</code></pre>
<p>根目录新增 app.js 文件</p>
<pre><code>const Koa = require('koa');
const Router = require('koa-router');
const port = ({}).PORT || 8888;
const app = new Koa();
const router = new Router();

router.get('/', async (ctx) =&gt; {
    ctx.type = 'html';
    ctx.body = '&lt;h1&gt;hello world!&lt;/h1&gt;';
})

app.use(router.routes());
app.use(router.allowedMethods({}));

app.listen(port, () =&gt; {
    console.log(\`应用已经启动，http://localhost:\${port}\`);
})


</code></pre>
<h2>登录服务器</h2>
<p>假设已经存在云服务器的情况下，在服务器录取仓库代码</p>
<pre><code>1. git pull
</code></pre>
<h2>安装 PM2</h2>
<pre><code>npm install pm2 -g
</code></pre>
<h2>使用 PM2 启动应用程序</h2>
<pre><code>pm2 start app.js
</code></pre>
<p>这里的 app.js 是你的 Node.js 应用程序的入口文件。</p>
<h2>重启 node 服务</h2>
<pre><code>pm2 restart app.js
</code></pre>
<p>这里的 app.js 是你的 Node.js 应用程序的入口文件。</p>
<h2>自动重启</h2>
<pre><code>pm2 startup
</code></pre>
<p>该命令会生成一个启动脚本，并将其添加到系统启动项中。</p>
<h2>更新 PM2 重启策略</h2>
<pre><code>pm2 update
</code></pre>
<p>该命令更新 PM2 的自动重启策略，让 PM2 能够检测到应用程序是否正常运行：</p>
<h2>监控进程状态</h2>
<pre><code>pm2 monit
</code></pre>
<p>如果应用程序崩溃，在 PM2 监控界面中，应用程序的状态会变为 errored (script error)。当 PM2 检测到应用程序崩溃后，会自动重启应用程序。</p>
<h2>日志来观察</h2>
<pre><code>pm2 logs
</code></pre>
<p>以上命令查看 PM2 的日志来观察应用程序的运行状况</p>
`,d=A("intro","简介","/notes/nodejs/intro",n),u=A("tinypng","图片压缩","/notes/nodejs/tinypng",e),x=A("nodeUpdate","升级node业务代码","/notes/nodejs/nodeUpdate",t),p=A("puppeteer","网页截图&PDF生成","/notes/nodejs/puppeteer",o),f=A("cli","开发cli工具","/notes/nodejs/cli",i),j=A("npm","npm包发布","/notes/nodejs/npm",s),a=A("pm2","pm2使用","/notes/nodejs/pm2",r),c=[j,f,a,u,p,x],l=A("intro","node-js","/notes/nodejs/intro",n,c);export{d as __default,l as __module,f as cli,c as default,x as nodeUpdate,j as npm,c as page,a as pm2,p as puppeteer,u as tinypng};
