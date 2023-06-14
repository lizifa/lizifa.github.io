import{c as n}from"./common.e3382f4b.js";import"./index.94ec84fd.js";const e=`<h1>\u524D\u7AEF\u9700\u8981\u53BB\u4E86\u89E3\u7684nodejs\u77E5\u8BC6</h1>
<h2>\u524D\u8A00</h2>
<ul>
<li>Node.js \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u3001\u8DE8\u5E73\u53F0\u7684 JavaScript \u8FD0\u884C\u73AF\u5883\uFF0C\u5B83\u53EF\u4EE5\u8BA9 JavaScript \u5728\u670D\u52A1\u5668\u7AEF\u8FD0\u884C\uFF0C\u4F7F\u5F97 JavaScript \u4E5F\u53EF\u4EE5\u7528\u4E8E\u6784\u5EFA\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u7AEF\u4EE3\u7801\u3002</li>
<li>Node.js \u8FD0\u884C\u5728 Google V8 \u5F15\u64CE\u4E4B\u4E0A\uFF0C\u652F\u6301\u975E\u963B\u585E I/O \u548C\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B\uFF0C\u4F7F\u5F97\u5B83\u975E\u5E38\u9002\u5408\u7F16\u5199\u9AD8\u6027\u80FD\u3001\u53EF\u6269\u5C55\u7684\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u3002</li>
<li>Node.js \u4E5F\u62E5\u6709\u4E30\u5BCC\u7684\u7B2C\u4E09\u65B9\u6A21\u5757\u5E93\uFF0C\u53EF\u4F9B\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u5E76\u4E14\u5176\u4F7F\u7528\u7B80\u5355\u7075\u6D3B\uFF0C\u6613\u4E8E\u5B66\u4E60\u548C\u5E94\u7528\u3002</li>
<li>\u65E0\u8BBA\u662F\u6784\u5EFA Web \u5E94\u7528\u3001API \u670D\u52A1\uFF0C\u8FD8\u662F\u7F16\u5199\u5DE5\u5177\u3001\u811A\u672C\u548C\u670D\u52A1\u7AEF\u7A0B\u5E8F\uFF0CNode.js \u90FD\u662F\u4E00\u4E2A\u5F3A\u5927\u800C\u4F18\u79C0\u7684\u9009\u62E9\u3002</li>
</ul>
`,o=`<h1>\u4F7F\u7528 node \u5F00\u53D1\u56FE\u7247\u538B\u7F29\u5DE5\u5177</h1>
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
<p>\u5F00\u59CB\u7F16\u8F91<code>tinypng.js</code>\u6587\u4EF6</p>
<pre><code>#!/usr/bin/env node
/**
 * \u5E2E\u52A9\u6587\u6863
 * -------
 *
 * \u83B7\u53D6\u5E2E\u52A9
 * \u6307\u4EE4 -h
 *
 * \u83B7\u53D6\u547D\u4EE4\u6267\u884C\u6587\u4EF6\u5939
 * \u6307\u4EE4 -f
 * \u53C2\u6570 ./
 * \u5FC5\u586B\uFF0C\u5F85\u5904\u7406\u7684\u56FE\u7247\u6587\u4EF6\u5939
 *
 * \u83B7\u53D6\u662F\u5426\u6DF1\u5EA6\u9012\u5F52\u5904\u7406\u56FE\u7247\u6587\u4EF6\u5939
 * \u6307\u4EE4 --deep
 * \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E0D\u6DF1\u5EA6\u9012\u5F52
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

    console.log(&quot;\u672C\u6B21\u6267\u884C\u811A\u672C\u7684\u914D\u7F6E\uFF1A&quot;, config);
    console.log(&quot;\u9700\u8981\u5904\u7406\u6587\u4EF6\u7684\u6570\u91CF:&quot;, config.files.length)

    config.files.forEach(img =&gt; fileUpload(img));

    //////////////////////////////// \u5DE5\u5177\u51FD\u6570

    /**
     * \u83B7\u53D6\u5E2E\u52A9\u547D\u4EE4
     * \u6307\u4EE4 -h
     */
    function getHelp() {
        let i = process.argv.findIndex(i =&gt; i === &quot;-h&quot;);
        if (i !== -1) {
            console.log(
                \`
            * \u5E2E\u52A9\u6587\u6863
            * -------
            *
            * \u83B7\u53D6\u5E2E\u52A9
            * \u6307\u4EE4 -h
            *
            * \u83B7\u53D6\u547D\u4EE4\u6267\u884C\u6587\u4EF6\u5939
            * \u6307\u4EE4 -f
            * \u53C2\u6570 ./
            * \u5FC5\u586B\uFF0C\u5F85\u5904\u7406\u7684\u56FE\u7247\u6587\u4EF6\u5939
            *
            * \u83B7\u53D6\u662F\u5426\u6DF1\u5EA6\u9012\u5F52\u5904\u7406\u56FE\u7247\u6587\u4EF6\u5939
            * \u6307\u4EE4 --deep
            * \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E0D\u6DF1\u5EA6\u9012\u5F52
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
     * \u83B7\u53D6\u547D\u4EE4\u6267\u884C\u6587\u4EF6\u5939
     * \u6307\u4EE4 -f
     * \u53C2\u6570 ./
     * \u5FC5\u586B\uFF0C\u5F85\u5904\u7406\u7684\u56FE\u7247\u6587\u4EF6\u5939
     */
    function getEntryFolder() {
        let i = process.argv.findIndex(i =&gt; i === &quot;-f&quot;);
        if (i === -1 || !process.argv[i + 1]) return err('\u83B7\u53D6\u547D\u4EE4\u6267\u884C\u6587\u4EF6\u5939\uFF1A\u5931\u8D25');
        return process.argv[i + 1];
    }

    /**
     * \u83B7\u53D6\u662F\u5426\u6DF1\u5EA6\u9012\u5F52\u5904\u7406\u56FE\u7247\u6587\u4EF6\u5939
     * \u6307\u4EE4 --deep
     * \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E0D\u6DF1\u5EA6\u9012\u5F52
     */
    function getDeepLoop() {
        return process.argv.findIndex(i =&gt; i === &quot;--deep&quot;) !== -1;
    }

    /**
     * \u8FC7\u6EE4\u5F85\u5904\u7406\u6587\u4EF6\u5939\uFF0C\u5F97\u5230\u5F85\u5904\u7406\u6587\u4EF6\u5217\u8868
     * @param {*} folder \u5F85\u5904\u7406\u6587\u4EF6\u5939
     * @param {*} files \u5F85\u5904\u7406\u6587\u4EF6\u5217\u8868
     */
    function fileFilter(folder) {
        // \u8BFB\u53D6\u6587\u4EF6\u5939
        fs.readdirSync(folder).forEach(file =&gt; {
            let fullFilePath = path.join(folder, file)
            // \u8BFB\u53D6\u6587\u4EF6\u4FE1\u606F
            let fileStat = fs.statSync(fullFilePath);
            // \u8FC7\u6EE4\u6587\u4EF6\u5B89\u5168\u6027/\u5927\u5C0F\u9650\u5236/\u540E\u7F00\u540D
            if (fileStat.size &lt;= config.Max &amp;&amp; fileStat.isFile() &amp;&amp; config.Exts.includes(path.extname(file))) config.files.push(fullFilePath);
            // \u662F\u90FD\u8981\u6DF1\u5EA6\u9012\u5F52\u5904\u7406\u6587\u4EF6\u5939
            else if (config.DeepLoop &amp;&amp; fileStat.isDirectory()) fileFilter(fullFilePath);
        });
    }

    /**
     * TinyPng \u8FDC\u7A0B\u538B\u7F29 HTTPS \u8BF7\u6C42\u7684\u914D\u7F6E\u751F\u6210\u65B9\u6CD5
     */

    function getAjaxOptions() {
        return {
            method: 'POST',
            hostname: [&quot;tinyjpg.com&quot;, &quot;tinypng.com&quot;][Math.random() &gt;= 0.5 ? 0 : 1], // \u968F\u673A\u8BF7\u6C42
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
     * TinyPng \u8FDC\u7A0B\u538B\u7F29 HTTPS \u8BF7\u6C42
     * @param {string} img \u5F85\u5904\u7406\u7684\u6587\u4EF6
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
                if (obj.error) console.log(\`\u538B\u7F29\u5931\u8D25\uFF01\\n \u5F53\u524D\u6587\u4EF6\uFF1A\${imgPath} \\n \${obj.message}\`);
                else fileUpdate(imgPath, obj);
            });
        });

        req.write(fs.readFileSync(imgPath), 'binary');
        req.on('error', e =&gt; console.error(\`\u8BF7\u6C42\u9519\u8BEF! \\n \u5F53\u524D\u6587\u4EF6\uFF1A\${imgPath} \\n\`, e));
        req.end();
    }

    // \u8BE5\u65B9\u6CD5\u88AB\u5FAA\u73AF\u8C03\u7528,\u8BF7\u6C42\u56FE\u7247\u6570\u636E
    function fileUpdate(entryImgPath, obj) {
        let options = new URL(obj.output.url);
        let req = https.request(options, res =&gt; {
            let body = '';
            res.setEncoding('binary');
            res.on('data', (data) =&gt; body += data);
            res.on('end', () =&gt; {
                fs.writeFile(entryImgPath, body, 'binary', err =&gt; {
                    if (err) return console.error(err);
                    let log = '\u538B\u7F29\u6210\u529F';
                    log += \`\u4F18\u5316\u6BD4\u4F8B: \${((1 - obj.output.ratio) * 100).toFixed(2)}%\`;
                    log += \`\u539F\u59CB\u5927\u5C0F: \${(obj.input.size / 1024).toFixed(2)} KB\`;
                    log += \`\u538B\u7F29\u5927\u5C0F: \${(obj.output.size / 1024).toFixed(2)} KB\`;
                    log += \`\u6587\u4EF6\uFF1A\${entryImgPath}\`
                    console.log(log);
                });
            });
        });
        req.on('error', e =&gt; console.error(e));
        req.end();
    }

})()

</code></pre>
<p>\u4FEE\u6539<code>package.json</code>\u6587\u4EF6</p>
<pre><code>&quot;scripts&quot;: {
    &quot;tinypng&quot;: &quot;node command/tinypng.js -f&quot;,
  },
</code></pre>
<p>\u6211\u4EEC\u53EF\u4EE5\u5728 cmd \u4E2D\u6307\u5B9A\u4E00\u4E2A\u6587\u4EF6\u53BB\u538B\u7F29\u56FE\u7247</p>
<pre><code>npm run tinypng imgDir
</code></pre>
<p>\u4F46\u662F\uFF0C\u5982\u679C\u8FD9\u662F\u4F5C\u4E3A\u4E00\u4E2A node \u5305\u7684\u5F62\u5F0F\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u5C06\u6E90\u7801\u66B4\u9732\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u5C06\u6E90\u4EE3\u7801\u8FDB\u884C\u538B\u7F29\uFF0C
\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B npm \u63D0\u4F9B\u7684\u529F\u80FD\uFF0C\u4F8B\u5982<code>uglify-js</code>\u53EF\u4EE5\u5C06\u6E90\u4EE3\u7801\u8FDB\u884C\u538B\u7F29\uFF0C\u9996\u5148\u5B89\u88C5\u8FD9\u4E2A\u5305</p>
<pre><code>npm i uglify-js --save-dev
</code></pre>
<p>\u7136\u540E\u4FEE\u6539<code>package.json</code>\u6587\u4EF6</p>
<pre><code>&quot;scripts&quot;: {
    &quot;tinypng&quot;: &quot;node command/tinypng.js -f&quot;,
    &quot;build:tinypng&quot;: &quot;uglifyjs command/tinypng.js -o index.js -c -m&quot;
  },
</code></pre>
<p>\u6211\u4EEC\u9700\u8981\u6253\u5305\uFF0C\u5C06\u6E90\u7801\u8FDB\u884C\u538B\u7F29\uFF0C\u5E76\u8F93\u51FA\u5230\u7A0B\u5E8F\u7684\u6839\u76EE\u5F55\uFF0C\u5E76\u4E14\u547D\u540D\u4E3A index.js</p>
<pre><code>npm run build:tinypng
</code></pre>
<p>\u6B64\u65F6\uFF0C\u538B\u7F29\u7684\u547D\u4EE4\u5C31\u53EF\u4EE5\u4FEE\u6539\u6210\u5076\u4EEC\u6253\u5305\u540E\u7684\u6587\u4EF6\u4E86</p>
<pre><code>&quot;scripts&quot;: {
    &quot;tinypng&quot;: &quot;node index.js -f&quot;,
    &quot;build:tinypng&quot;: &quot;uglifyjs command/tinypng.js -o index.js -c -m&quot;
  },
</code></pre>
<p>\u7136\u540E\u538B\u7F29\u7684\u547D\u4EE4\u8FD8\u662F\u8DDF\u4E4B\u524D\u4E00\u6837\u4F7F\u7528</p>
<pre><code>npm run tinypng imgDir
</code></pre>
<p>\u81F3\u6B64\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u56FE\u7247\u538B\u7F29\u5DE5\u5177\u5B8C\u6210\u4E86</p>
`,t=`<h1>Puppeteer \u8C37\u6B4C\u65E0\u5934\u6D4F\u89C8\u5668\u4F7F\u7528</h1>
<h2>\u7B80\u4ECB</h2>
<p>Puppeteer \u662F\u4E00\u4E2A Node.js \u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7EC4\u57FA\u4E8E Chrome DevTools \u534F\u8BAE\u7684\u9AD8\u7EA7 API\uFF0C\u53EF\u7528\u4E8E\u901A\u8FC7\u7F16\u7A0B\u65B9\u5F0F\u63A7\u5236 Chrome \u6D4F\u89C8\u5668\u6216 Chromium \u6D4F\u89C8\u5668\u7684\u64CD\u4F5C\u3002</p>
<p>Puppeteer \u53EF\u4EE5\u505A\u4EC0\u4E48\uFF1F</p>
<ol>
<li>\u722C\u866B\uFF1A\u53EF\u4EE5\u4F7F\u7528 Puppeteer \u722C\u53D6\u7F51\u7AD9\uFF0C\u83B7\u53D6\u6570\u636E\uFF0C\u5E76\u89E3\u6790\u7ED3\u679C\u3002</li>
<li>\u81EA\u52A8\u5316\u6D4B\u8BD5\uFF1A\u53EF\u4EE5\u4F7F\u7528 Puppeteer \u8FDB\u884C UI \u81EA\u52A8\u5316\u6D4B\u8BD5\uFF0C\u81EA\u52A8\u6267\u884C\u767B\u5F55\u3001\u4E0B\u5355\u7B49\u9875\u9762\u64CD\u4F5C\uFF0C\u5E76\u5BF9\u8FD9\u4E9B\u64CD\u4F5C\u8FDB\u884C\u6D4B\u8BD5\u3002</li>
<li>\u6027\u80FD\u5206\u6790\uFF1A\u53EF\u4EE5\u4F7F\u7528 Puppeteer \u8BBF\u95EE\u9875\u9762\u5E76\u751F\u6210\u8DDF\u8E2A\u6570\u636E\uFF0C\u8FDB\u800C\u5206\u6790\u9875\u9762\u6027\u80FD\uFF0C\u5982\u52A0\u8F7D\u65F6\u95F4\u7B49\u6307\u6807\u3002</li>
<li>\u622A\u56FE\u548C\u751F\u6210 PDF\uFF1A\u53EF\u4EE5\u4F7F\u7528 Puppeteer \u5BF9\u9875\u9762\u8FDB\u884C\u622A\u56FE\uFF0C\u751F\u6210 PDF \u7B49\u64CD\u4F5C\u3002\u3010\u8BE5\u529F\u80FD\u6BD4\u8F83\u597D\u7528\u3011</li>
<li>\u6A21\u62DF\u7528\u6237\u884C\u4E3A\uFF1A\u53EF\u4EE5\u4F7F\u7528 Puppeteer \u6A21\u62DF\u9F20\u6807\u548C\u952E\u76D8\u64CD\u4F5C\uFF0C\u5B9E\u73B0\u81EA\u52A8\u5316\u3002
\u603B\u4E4B\uFF0CPuppeteer \u53EF\u4EE5\u6A21\u62DF\u7528\u6237\u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u6240\u6709\u884C\u4E3A\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684 API\uFF0C\u65B9\u4FBF\u5F00\u53D1\u4EBA\u5458\u8FDB\u884C\u7F16\u7A0B\u5F0F\u64CD\u4F5C\u3002</li>
</ol>
<h2>Puppeteer \u5BF9\u6BD4 canvas \u7684\u4F18\u52BF\uFF1F</h2>
<p>\u5728\u56FD\u5185\u8F6F\u4EF6\u5E94\u7528\u4E2D\uFF0C\u6D77\u62A5\u7B49\u5F62\u5F0F\u7684\u56FE\u7247\u5206\u4EAB\u662F\u6D41\u91CF\u88C2\u53D8\u7684\u91CD\u8981\u624B\u6BB5\u4E4B\u4E00\u3002\u5BF9\u4E8E\u524D\u7AEF\u800C\u8A00\uFF0C\u5229\u7528 Canvas \u7ED8\u5236\u5E76\u901A\u8FC7 HTMLCanvasElement.toDataURL()\u7B49 API \u6700\u7EC8\u83B7\u5F97\u56FE\u7247\u6570\u636E\u662F\u4E00\u79CD\u53EF\u9009\u65B9\u6CD5\u3002\u4F46\u662F\u8FD9\u79CD\u65B9\u6CD5\u5B58\u5728\u5F88\u591A\u4EE4\u4EBA\u4E0D\u80FD\u5BB9\u5FCD\u7684\u7F3A\u70B9\uFF0C\u6BD4\u5982\uFF1A</p>
<ul>
<li>\u7ED8\u5236\u5728\u5176\u4E2D\u7684\u56FE\u7247\u9700\u8981\u9075\u5FAA\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\uFF0C\u5426\u5219\u751F\u6210\u56FE\u7247\u6570\u636E\u65F6\u5019\u4F1A\u5931\u8D25\u3002</li>
<li>\u7ED8\u5236\u590D\u6742\u7684\u5927\u56FE\u65F6\uFF0C\u4F1A\u8017\u8D39\u8F83\u591A\u5BA2\u6237\u7AEF\u6027\u80FD\u3002</li>
<li>\u5B9E\u73B0\u7B80\u5355\u7684\u5E03\u5C40\u6548\u679C\uFF0C\u9700\u8981\u7E41\u7410\u7684 API\uFF0C\u5E76\u4E14\u4E0D\u4E00\u80FD\u548C Web \u7AEF\u5C55\u793A\u6548\u679C\u4E00\u6837\u3002</li>
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
<p>\u6B64\u65F6\u6587\u4EF6\u76EE\u5F55</p>
<pre><code>project
- public
- src
-- index.js
</code></pre>
<p>\u7F16\u8F91index.js\u6587\u4EF6</p>
<pre><code>const Koa = require(&quot;koa&quot;);
const app = new Koa();
const port = 5000;
const Router = require(&quot;koa-router&quot;);
const puppeteer = require(&quot;puppeteer&quot;);
const router = new Router();

// \u622A\u53D6\u67D0\u4E2Adom\u9875\u9762
async function demo1() {
  // \u9875\u9762\u662F\u53EF\u4EE5\u6CE8\u5165\u6570\u636E
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // \u53BB\u4EAC\u4E1C\u7684\u5B98\u7F51\u622A\u53D6\u67D0\u4E2Adom\u8282\u70B9\u7684\u56FE
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

// \u622A\u53D6\u6574\u4E2A\u9875\u9762
async function demo2() {
  // \u9875\u9762\u662F\u53EF\u4EE5\u6CE8\u5165\u6570\u636E
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

// \u9875\u9762\u8F6C\u6210pdf
async function demo3() {
  // \u9875\u9762\u662F\u53EF\u4EE5\u6CE8\u5165\u6570\u636E
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(&quot;https://www.zhihu.com/signin?next=%2F&quot;, {
    waitUntil: [&quot;domcontentloaded&quot;, &quot;networkidle2&quot;, &quot;load&quot;],
  });

  await page.pdf({ path: \`./public/example-\${Date.now()}.pdf\` });
  await browser.close();
}

// \u8BBF\u95EE\u8FD9\u4E2A\u670D\u52A1\u5668\u5730\u5740\uFF0C\u53BB\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C\uFF0C\u622A\u56FE\u751F\u6210pdf\u7B49
router.get(&quot;/&quot;, async (ctx) =&gt; {
  await demo3();
  ctx.body = &quot;&lt;h1&gt;done&lt;/h1&gt;&quot;;
});

// \u6CE8\u518C\u8DEF\u7531\u4E2D\u95F4\u4EF6
app.use(router.routes());
app.use(router.allowedMethods({}));
app.listen(port, onStartAfterCb);
app.on(&quot;error&quot;, onError);

// \u8BB0\u5F55\u65E5\u5FD7\u6216\u53D1\u9001\u544A\u8B66\u3002
function onError(error, ctx) {
  console.error(&quot;koa error:&quot;, error, ctx);
  // \u6267\u884C\u4E00\u4E9B\u5904\u7406\u903B\u8F91
}

// \u5E94\u7528\u542F\u52A8\u540E\u505A\u7684\u4E00\u4E9B\u64CD\u4F5C
function onStartAfterCb() {
  console.log(\`app start at: http://0.0.0.0:\${port}\`);
}

</code></pre>
<p>\u7136\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u6D4B\u8BD5\u529F\u80FD\uFF0C\u6253\u5F00\u547D\u4EE4\u884Cwin+r \u8F93\u5165cmd,\u56E0\u4E3A\u6211\u4EEC\u5BF9\u5916\u629B\u51FA\u4E86\u4E00\u4E2A\u63A5\u53E3\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EA\u9700\u8981\u53BB\u8C03\u7528\u8FD9\u4E2A\u63A5\u53E3\u4FBF\u53EF\u4EE5\u6267\u884C\u76F8\u5E94\u7684\u64CD\u4F5C</p>
<p>\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u5982\u4E0B\u547D\u4EE4</p>
<pre><code>curl -X GET \`yourIp:\${port}\`
</code></pre>
<p>\u4FBF\u53EF\u5728public\u6587\u4EF6\u5939\u770B\u5230\u76F8\u5E94\u7684\u6587\u4EF6\uFF0C\u81F3\u6B64\u4E00\u4E2A\u7B80\u5355\u7684demo\u5B8C\u6210\u4E86</p>
`,r=`<h1>node \u4E1A\u52A1\u4EE3\u7801\u5E73\u6ED1\u66F4\u65B0</h1>
<h2>\u8D1F\u8F7D\u5747\u8861</h2>
<p>\u5982\u679C\u8981\u66F4\u65B0 a \u8FDB\u7A0B\uFF0C\u4F46\u662F\u7528\u6237\u6B63\u5728\u4F7F\u7528 a \u8FDB\u7A0B\uFF0C\u5219\u9700\u8981\u5148\u5C06\u7528\u6237\u8BF7\u6C42\u4ECE a \u8FDB\u7A0B\u4E2D\u79FB\u9664\uFF0C\u786E\u4FDD\u7528\u6237\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p>
<p>\u4E00\u79CD\u65B9\u6CD5\u662F\uFF0C\u5728\u66F4\u65B0 a \u8FDB\u7A0B\u4E4B\u524D\uFF0C\u5C06 a \u8FDB\u7A0B\u4ECE Nginx \u8D1F\u8F7D\u5747\u8861\u7684\u540E\u7AEF\u670D\u52A1\u5668\u5217\u8868\u4E2D\u79FB\u9664\uFF0C\u5728\u66F4\u65B0\u5B8C\u6210\u540E\u518D\u5C06\u5176\u6DFB\u52A0\u56DE\u53BB\u3002</p>
<p>\u5177\u4F53\u7684\u914D\u7F6E\u65B9\u6CD5\u53D6\u51B3\u4E8E\u4F60\u4F7F\u7528\u7684 Nginx \u7248\u672C\u548C\u8D1F\u8F7D\u5747\u8861\u65B9\u5F0F\u3002\u4EE5\u4E0B\u662F\u4E00\u4E2A\u53EF\u80FD\u7684 Nginx \u914D\u7F6E\u793A\u4F8B\uFF0C\u5047\u8BBE\u4F60\u4F7F\u7528\u7684\u662F upstream \u6A21\u5757\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF1A</p>
<pre><code>http {
    upstream app_servers {
        server 127.0.0.1:3000;  # a\u8FDB\u7A0B
        server 127.0.0.1:3001;  # b\u8FDB\u7A0B
        server 127.0.0.1:3002;  # c\u8FDB\u7A0B
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
<p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0CNginx \u5C06\u7528\u6237\u8BF7\u6C42\u901A\u8FC7 HTTP \u4EE3\u7406\u8F6C\u53D1\u5230 app_servers \u4E0A\u7684\u67D0\u4E2A\u670D\u52A1\u5668\u8FDB\u7A0B\u3002\u5982\u679C\u8981\u66F4\u65B0 a \u8FDB\u7A0B\uFF0C\u53EF\u4EE5\u5C06\u5176\u4ECE upstream \u5217\u8868\u4E2D\u79FB\u9664\uFF0C\u7B49\u66F4\u65B0\u5B8C\u6210\u540E\u518D\u6DFB\u52A0\u56DE\u53BB\u3002\u4F8B\u5982\uFF1A</p>
<pre><code>http {
    upstream app_servers {
        server 127.0.0.1:3001;  # b\u8FDB\u7A0B
        server 127.0.0.1:3002;  # c\u8FDB\u7A0B
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
<p>\u8FD9\u6837\uFF0C\u5728\u66F4\u65B0 a \u8FDB\u7A0B\u65F6\uFF0C\u7528\u6237\u7684\u8BF7\u6C42\u5C31\u4E0D\u4F1A\u88AB\u8F6C\u53D1\u5230 a \u8FDB\u7A0B\u4E0A\uFF0C\u800C\u662F\u88AB\u8F6C\u53D1\u5230\u5176\u4ED6\u6B63\u5E38\u8FD0\u884C\u7684\u8FDB\u7A0B\u4E0A\uFF0C\u786E\u4FDD\u7528\u6237\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002</p>
<p>\u66F4\u65B0\u5B8C\u6210\u540E\uFF0C\u8BB0\u5F97\u5C06 a \u8FDB\u7A0B\u91CD\u65B0\u6DFB\u52A0\u5230 upstream \u5217\u8868\u4E2D\uFF0C\u4F8B\u5982\uFF1A</p>
<pre><code>http {
    upstream app_servers {
        server 127.0.0.1:3000;  # a\u8FDB\u7A0B
        server 127.0.0.1:3001;  # b\u8FDB\u7A0B
        server 127.0.0.1:3002;  # c\u8FDB\u7A0B
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
<p>\u8FD9\u6837\uFF0CNginx \u5C31\u4F1A\u5C06\u7528\u6237\u8BF7\u6C42\u5E73\u5747\u5206\u914D\u5230\u6240\u6709\u6B63\u5E38\u8FD0\u884C\u7684\u8FDB\u7A0B\u4E2D\uFF0C\u786E\u4FDD\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u548C\u53EF\u7528\u6027\u3002</p>
<h2>\u5E73\u6ED1\u91CD\u542F</h2>
<ul>
<li>\u90A3\u4E48 a \u8FDB\u7A0B\u5982\u4F55\u544A\u77E5\u81EA\u5DF1\u8981\u91CD\u542F\u5462\uFF1F</li>
</ul>
<p>\u9996\u5148\uFF0C\u5728\u7528\u6237\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\uFF0Ca \u8FDB\u7A0B\u9700\u8981\u5411 Nginx \u6CE8\u518C\u81EA\u5DF1\u7684\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u4EE5\u4FBF Nginx \u80FD\u591F\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u81EA\u5DF1\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u5411\u4E00\u4E2A\u5171\u4EAB\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u5199\u5165\u81EA\u5DF1\u7684\u5730\u5740\u548C\u7AEF\u53E3\u6765\u5B9E\u73B0\u3002\u4F8B\u5982\uFF0C\u5728 Node.js \u4E2D\u53EF\u4EE5\u4F7F\u7528\u5171\u4EAB\u5185\u5B58\u6765\u5B9E\u73B0\uFF1A</p>
<pre><code>const cluster = require('cluster');
const fs = require('fs');

if (cluster.isMaster) {
 // \u521B\u5EFA\u5171\u4EAB\u5185\u5B58
 const fd = fs.openSync('worker-info.txt', 'w+');

 for (let i = 0; i &lt; numCPUs; i++) {
   const worker = cluster.fork();

   // \u76D1\u542Cworker\u4E0A\u62A5\u81EA\u5DF1\u7684\u5730\u5740\u548C\u7AEF\u53E3
   worker.on('message', (message) =&gt; {
     if (message.type === 'REGISTER') {
       // \u5199\u5165\u5171\u4EAB\u6587\u4EF6\u4E2D
       fs.write(fd, \`\${message.pid} \${message.address} \${message.port}\\n\`);
     }
   });
 }
} else {
 const express = require('express');
 const app = express();

 // \u542F\u52A8HTTP\u670D\u52A1\u5668\u5E76\u4E0A\u62A5\u81EA\u5DF1\u7684\u5730\u5740\u548C\u7AEF\u53E3
 const server = app.listen(0, () =&gt; {
   const message = {
     type: 'REGISTER',
     pid: process.pid,
     address: server.address().address,
     port: server.address().port
   };
   process.send(message);
 });

 // \u5904\u7406HTTP\u8BF7\u6C42\u903B\u8F91
 app.get('/', (req, res) =&gt; {
   // TODO: \u5904\u7406\u8BF7\u6C42
 });
}
</code></pre>
<p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u4F1A\u4ECE\u5171\u4EAB\u6587\u4EF6\u4E2D\u8BFB\u53D6\u5176\u4ED6\u8FDB\u7A0B\u7684\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u4EE5\u4FBF\u8FDB\u884CNginx\u8D1F\u8F7D\u5747\u8861\u3002</p>
<p>\u63A5\u4E0B\u6765\uFF0C\u5728\u66F4\u65B0a\u8FDB\u7A0B\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5C06a\u8FDB\u7A0B\u4ECENginx\u8D1F\u8F7D\u5747\u8861\u7684\u540E\u7AEF\u670D\u52A1\u5668\u5217\u8868\u4E2D\u79FB\u9664\uFF0C\u5E76\u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7\u8BA9a\u8FDB\u7A0B\u91CD\u542F\u3002\u4F8B\u5982\uFF0C\u5728Node.js\u4E2D\u53EF\u4EE5\u4F7F\u7528process.kill\u65B9\u6CD5\u53D1\u9001\u4FE1\u53F7\uFF1A</p>
<pre><code>const fs = require('fs');

// \u8BFB\u53D6\u5171\u4EAB\u6587\u4EF6\u4E2D\u7684\u5730\u5740\u548C\u7AEF\u53E3
const workers = {};
fs.readFileSync('worker-info.txt', 'utf8').split('\\n').forEach((line) =&gt; {
  const [pid, address, port] = line.trim().split(' ');
  if (pid &amp;&amp; address &amp;&amp; port) {
    workers[pid] = { address, port };
  }
});

// \u4ECENginx\u8D1F\u8F7D\u5747\u8861\u5217\u8868\u4E2D\u79FB\u9664\u5F53\u524D\u8FDB\u7A0B
delete workers[process.pid];
fs.writeFileSync('worker-info.txt', Object.values(workers).map((w) =&gt; \`\${w.address} \${w.port}\`).join('\\n'));

// \u53D1\u9001\u91CD\u542F\u4FE1\u53F7
process.kill(process.pid, 'SIGTERM');
</code></pre>
<p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u9996\u5148\u8BFB\u53D6\u5171\u4EAB\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u8FDB\u7A0B\u5730\u5740\u548C\u7AEF\u53E3\uFF0C\u7136\u540E\u4ECE\u4E2D\u79FB\u9664\u5F53\u524D\u8FDB\u7A0B\u7684\u5730\u5740\u548C\u7AEF</p>
`,c=n("intro","\u7B80\u4ECB","/notes/nodejs/intro",e),p=n("tinypng","\u56FE\u7247\u538B\u7F29","/notes/nodejs/tinypng",o),s=n("nodeUpdate","\u5347\u7EA7node\u4E1A\u52A1\u4EE3\u7801","/notes/nodejs/nodeUpdate",r),i=n("puppeteer","\u7F51\u9875\u622A\u56FE&PDF\u751F\u6210","/notes/nodejs/puppeteer",t),a=[p,i,s],l=n("intro","node-js","/notes/nodejs/intro",e,a);export{c as __default,l as __module,a as default,s as nodeUpdate,a as page,i as puppeteer,p as tinypng};
