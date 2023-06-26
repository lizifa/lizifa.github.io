import{c as e}from"./common-60de1519.js";import"./index-fe96a177.js";const n=`<h1>前端开发常用工具函数</h1>
<h2>debounce: 函数防抖</h2>
<pre><code>function debounce(fn, delay) {
  delay = delay || 1000;
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() =&gt; {
      fn.apply(context, arg);
    }, delay);
  };
}

</code></pre>
<h2>throttle：节流函数</h2>
<pre><code>function throttle(fn, delay = 300) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args);
        clearTimeout(timer);
      }, delay);
    }
  };
}

</code></pre>
<h2>sleep: 延迟执行函数</h2>
<pre><code>function sleep(ms) {
  return new Promise(r =&gt; setTimeout(() =&gt; r(true), ms))
}
</code></pre>
<h2>isStatic：检测数据是不是除了 symbol 外的原始数据</h2>
<pre><code>function isStatic(value) {
    return(
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value === null
    )
}
</code></pre>
<h2>isPrimitive：检测数据是不是原始数据</h2>
<pre><code>function isPrimitive(value) {
    return isStatic(value) || typeof value === 'symbol'
}
</code></pre>
<h2>randomColor： 随机产生某个颜色</h2>
<pre><code>function randomColor() {
  return \`rgb(\${this.random(0, 255)}, \${this.random(0, 255)}, \${this.random(0, 255)})\`
}

</code></pre>
<h2>getRawType：获取参数类型</h2>
<pre><code>function getRawType(value) {
    return Object.prototype.toString.call(value).slice(8, -1)
}
//getoRawType([]) ==&gt; Array
</code></pre>
<h2>is：判断对象是否属于某个类型</h2>
<pre><code>function is(value, type) {
    return getRawType(value).toLowerCase() === type
}

// is('aaa', 'string') =&gt; true
// is(1, 'number') =&gt; true
// is([], 'array') =&gt; true
</code></pre>
<h2>compareVersion：版本号比较</h2>
<pre><code>function compareVersion(v1, v2) {
  var s1 = v1.split(&quot;.&quot;).map(v =&gt; parseInt(v));
  var s2 = v2.split(&quot;.&quot;).map(v =&gt; parseInt(v));

  var len1 = s1.length, len2 = s2.length, commonLen = Math.min(len1, len2);
  for (var i = 0; i &lt; commonLen; ++i) {
    if (seq1[i] != seq2[i])
      return seq1[i]&lt;seq2[i] ? -1 : 1;
  }

  return len1 === len2 ? 0 : (len1 &lt; len2 ? -1 : 1);
}

</code></pre>
<h2>camelize：横线转驼峰命名</h2>
<pre><code>let camelizeRE = /-(\\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, function(_, c) {
        return c ? c.toUpperCase() : '';
    })
}
//ab-cd-ef ==&gt; abCdEf
//使用记忆函数
let _camelize = cached(camelize)
</code></pre>
<h2>capitalize：字符串首位大写</h2>
<pre><code>function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
// abc ==&gt; Abc
//使用记忆函数
let _capitalize = cached(capitalize)
</code></pre>
<h2>hideMobile：手机号码中间 4 位隐藏星号</h2>
<pre><code>function hideMobile(mobile) {
  return mobile.replace(/^(\\d{3})\\d{4}(\\d{4})$/, &quot;$1****$2&quot;)
}

</code></pre>
<h2>extend：将属性混合到目标对象中</h2>
<pre><code>function extend(to, _from) {
    for(let key in _from) {
        to[key] = _from[key];
    }
    return to
}
</code></pre>
<h2>Object.assign：对象属性复制，浅拷贝</h2>
<pre><code>Object.assign = Object.assign || function(){
    if(arguments.length == 0) throw new TypeError('Cannot convert undefined or null to object');

    let target = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        key
    args.forEach(function(item){
        for(key in item){
            item.hasOwnProperty(key) &amp;&amp; ( target[key] = item[key] )
        }
    })
    return target
}
</code></pre>
<h2>deepClone：克隆数据，可深度克隆</h2>
<pre><code>function deepClone(value, deep){
    if(isPrimitive(value)){
        return value
    }

    if (isArrayLike(value)) { //是类数组
        value = Array.prototype.slice.call(value)
        return value.map(item =&gt; deep ? deepClone(item, deep) : item)
       }else if(isPlainObject(value)){ //是对象
           let target = {}, key;
          for (key in value) {
            value.hasOwnProperty(key) &amp;&amp; ( target[key] = deep ? deepClone(value[key], deep) : value[key] )
        }
    }

    let type = getRawType(value)

    switch(type){
        case 'Date':
        case 'RegExp':
        case 'Error': value = new window[type](value); break;
    }
    return value
}
</code></pre>
<h2>识别各种浏览器及平台</h2>
<pre><code>//运行环境是浏览器
let inBrowser = typeof window !== 'undefined';
//运行环境是微信
let inWeex = typeof WXEnvironment !== 'undefined' &amp;&amp; !!WXEnvironment.platform;
let weexPlatform = inWeex &amp;&amp; WXEnvironment.platform.toLowerCase();
//浏览器 UA 判断
let UA = inBrowser &amp;&amp; window.navigator.userAgent.toLowerCase();
let isIE = UA &amp;&amp; /msie|trident/.test(UA);
let isIE9 = UA &amp;&amp; UA.indexOf('msie 9.0') &gt; 0;
let isEdge = UA &amp;&amp; UA.indexOf('edge/') &gt; 0;
let isAndroid = (UA &amp;&amp; UA.indexOf('android') &gt; 0) || (weexPlatform === 'android');
let isIOS = (UA &amp;&amp; /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
let isChrome = UA &amp;&amp; /chrome\\/\\d+/.test(UA) &amp;&amp; !isEdge;
</code></pre>
<h2>unique：数组去重，返回一个新数组</h2>
<pre><code>function unique(arr){
    if(!isArrayLink(arr)){ //不是类数组对象
        return arr
    }
    let result = []
    let objarr = []
    let obj = Object.create(null)

    arr.forEach(item =&gt; {
        if(isStatic(item)){//是除了symbol外的原始数据
            let key = item + '_' + getRawType(item);
            if(!obj[key]){
                obj[key] = true
                result.push(item)
            }
        }else{//引用类型及symbol
            if(!objarr.includes(item)){
                objarr.push(item)
                result.push(item)
            }
        }
    })

    return resulte
}
</code></pre>
<h2>repeat：生成一个重复的字符串，有 n 个 str 组成，可修改为填充为数组等</h2>
<pre><code>function repeat(str, n) {
    let res = '';
    while(n) {
        if(n % 2 === 1) {
            res += str;
        }
        if(n &gt; 1) {
            str += str;
        }
        n &gt;&gt;= 1;
    }
    return res
};
//repeat('123',3) ==&gt; 123123123
</code></pre>
<h2>dateFormater：格式化时间</h2>
<pre><code>function dateFormater(formater, t){
    let date = t ? new Date(t) : new Date(),
        Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    return formater.replace(/YYYY|yyyy/g,Y)
        .replace(/YY|yy/g,Y.substr(2,2))
        .replace(/MM/g,(M&lt;10?'0':'') + M)
        .replace(/DD/g,(D&lt;10?'0':'') + D)
        .replace(/HH|hh/g,(H&lt;10?'0':'') + H)
        .replace(/mm/g,(m&lt;10?'0':'') + m)
        .replace(/ss/g,(s&lt;10?'0':'') + s)
}
// dateFormater('YYYY-MM-DD HH:mm', t) ==&gt; 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==&gt; 201906261830
</code></pre>
<h2>GetUrlParam：获取 Url 参数，返回一个对象</h2>
<pre><code>function GetUrlParam(){
    let url = document.location.toString();
    let arrObj = url.split(&quot;?&quot;);
    let params = Object.create(null)
    if (arrObj.length &gt; 1){
        arrObj = arrObj[1].split(&quot;&amp;&quot;);
        arrObj.forEach(item=&gt;{
            item = item.split(&quot;=&quot;);
            params[item[0]] = item[1]
        })
    }
    return params;
}
// ?a=1&amp;b=2&amp;c=3 ==&gt; {a: &quot;1&quot;, b: &quot;2&quot;, c: &quot;3&quot;}
</code></pre>
<h2>downloadFile：base64 数据导出文件，文件下载</h2>
<pre><code>function downloadFile(filename, data){
    let DownloadLink = document.createElement('a');
    if ( DownloadLink ){
        document.body.appendChild(DownloadLink);
        DownloadLink.style = 'display: none';
        DownloadLink.download = filename;
        DownloadLink.href = data;

        if ( document.createEvent ){
            let DownloadEvt = document.createEvent('MouseEvents');

            DownloadEvt.initEvent('click', true, false);
            DownloadLink.dispatchEvent(DownloadEvt);
        }
        else if ( document.createEventObject )
            DownloadLink.fireEvent('onclick');
        else if (typeof DownloadLink.onclick == 'function' )
            DownloadLink.onclick();

        document.body.removeChild(DownloadLink);
    }
}
</code></pre>
<h2>toFullScreen：全屏</h2>
<pre><code>function toFullScreen(){
    let elem = document.body;
    elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert(&quot;浏览器不支持全屏&quot;);
}
</code></pre>
<h2>exitFullscreen：退出全屏</h2>
<pre><code>function exitFullscreen(){
    let elem = parent.document;
    elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert(&quot;切换失败,可尝试Esc退出&quot;);
}
</code></pre>
<h2>requestAnimationFrame：window 动画</h2>
<pre><code>
window.requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.setTimeout(callback, 1000 / 60);
    };

window.cancelAnimationFrame = window.cancelAnimationFrame ||
    Window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        window.clearTimeout(id);
    }

</code></pre>
<h2>random：返回一个 lower - upper 之间的随机数</h2>
<pre><code>function random(lower, upper){
    lower = +lower || 0
    upper = +upper || 0
    return Math.random() * (upper - lower) + lower;
}
//random(0, 0.5) ==&gt; 0.3567039135734613
//random(2, 1) ===&gt; 1.6718418553475423
//random(-2, -1) ==&gt; -1.4474325452361945

</code></pre>
<h2>禁止右键、选择、复制</h2>
<pre><code>['contextmenu', 'selectstart', 'copy'].forEach(function(ev){
    document.addEventListener(ev, function(event){
        return event.returnValue = false
    })
});
</code></pre>
`,t=e("intro","简介","/notes/funs/intro",n),r=[],l=e("intro","工具函数",t.path,n,r);export{t as __default,l as __module,r as default,r as page};
