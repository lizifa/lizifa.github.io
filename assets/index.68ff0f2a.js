import{c as n}from"./common.5866de18.js";import"./index.71a5d6b9.js";const e=`<p>\u5F00\u53D1\u4E2D....</p>
`,t=`<h1>\u4F7F\u7528 node \u5F00\u53D1\u56FE\u7247\u538B\u7F29\u5DE5\u5177</h1>
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
`,o="",d=n("intro","\u7B80\u4ECB","/notes/nodejs/intro",e),i=n("tinypng","\u56FE\u7247\u538B\u7F29","/notes/nodejs/tinypng",t),r=n("puppeteer","\u7F51\u9875\u622A\u56FE&PDF\u751F\u6210","/notes/nodejs/puppeteer",o),p=[i,r],c=n("intro","node-js","/notes/nodejs/intro",e,p);export{d as __default,c as __module,p as default,p as page,r as puppeteer,i as tinypng};
