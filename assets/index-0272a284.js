import{c as A}from"./common-40d4c297.js";import"./index-12fb60fd.js";const n=`<h1>前端需要去了解的 nodejs 知识</h1>
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
`,o=`<h1>node 业务代码平滑更新</h1>
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
`,r=`<h1>如何开发一个基于 node.js 的 CLI 工具</h1>
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
`,i=`<h1>如何发布一个 npm 包</h1>
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
`,f=A("intro","简介","/notes/nodejs/intro",n),s=A("tinypng","图片压缩","/notes/nodejs/tinypng",e),p=A("nodeUpdate","升级node业务代码","/notes/nodejs/nodeUpdate",o),u=A("puppeteer","网页截图&PDF生成","/notes/nodejs/puppeteer",t),d=A("cli","开发cli工具","/notes/nodejs/cli",r),c=A("npm","npm包发布","/notes/nodejs/npm",i),a=[c,d,s,u,p],j=A("intro","node-js","/notes/nodejs/intro",n,a);export{f as __default,j as __module,d as cli,a as default,p as nodeUpdate,c as npm,a as page,u as puppeteer,s as tinypng};
