import{E as n}from"./index.ea8a8911.js";const l=`<h1>\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u7BC7</h1>
<h2>\u6027\u80FD\u4F18\u5316\u65B9\u6848</h2>
<ul>
<li>CDN</li>
<li>\u61D2\u52A0\u8F7D</li>
<li>\u8282\u6D41\u9632\u6296</li>
<li>\u56FE\u7247\u4F18\u5316</li>
<li>\u6253\u5305\u5668</li>
<li>\u670D\u52A1\u7AEF\u6E32\u67D3</li>
<li>\u79BB\u7EBF\u5305</li>
<li>\u6D4F\u89C8\u5668\u548C webview</li>
<li>webworker</li>
</ul>
<h2>1. CDN</h2>
<ul>
<li>
<p>cdn \u7684\u6982\u5FF5</p>
<p>CDN\uFF08Content Delivery Network\uFF0C\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC\uFF09\u662F\u4E00\u79CD\u6784\u5EFA\u5728\u73B0\u6709\u4E92\u8054\u7F51\u4E4B\u4E0A\u7684\u667A\u80FD\u865A\u62DF\u7F51\u7EDC\uFF0C\u5B83\u5C06\u7528\u6237\u7684\u8BF7\u6C42\u81EA\u52A8\u5206\u914D\u5230\u6700\u9002\u5408\u7528\u6237\u7684\u7F13\u5B58\u670D\u52A1\u5668\u4E0A\uFF0C\u4EE5\u8FBE\u5230\u66F4\u5FEB\u7684\u5185\u5BB9\u52A0\u8F7D\u901F\u5EA6\u548C\u66F4\u9AD8\u7684\u53EF\u7528\u6027\u3001\u5E76\u964D\u4F4E\u539F\u59CB\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\u538B\u529B\u3002</p>
</li>
<li>
<p>cdn \u539F\u7406</p>
<p>CDN \u548C DNS \u6709\u7740\u5BC6\u4E0D\u53EF\u5206\u7684\u8054\u7CFB\uFF0C\u5148\u6765\u770B\u4E00\u4E0B DNS \u7684\u89E3\u6790\u57DF\u540D\u8FC7\u7A0B\uFF0C\u5728\u6D4F\u89C8\u5668\u8F93\u5165 www.test.com \u7684\u89E3\u6790\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p>
<p>\uFF081\uFF09\u68C0\u67E5\u6D4F\u89C8\u5668\u7F13\u5B58<br/>
\uFF082\uFF09\u68C0\u67E5\u64CD\u4F5C\u7CFB\u7EDF\u7F13\u5B58\uFF0C\u5E38\u89C1\u7684\u5982 hosts \u6587\u4EF6<br/>
\uFF083\uFF09\u68C0\u67E5\u8DEF\u7531\u5668\u7F13\u5B58<br/>
\uFF084\uFF09\u5982\u679C\u524D\u51E0\u6B65\u90FD\u6CA1\u6CA1\u627E\u5230\uFF0C\u4F1A\u5411 ISP(\u7F51\u7EDC\u670D\u52A1\u63D0\u4F9B\u5546)\u7684 LDNS \u670D\u52A1\u5668\u67E5\u8BE2<br/>
\uFF085\uFF09\u5982\u679C LDNS \u670D\u52A1\u5668\u6CA1\u627E\u5230\uFF0C\u4F1A\u5411\u6839\u57DF\u540D\u670D\u52A1\u5668(Root Server)\u8BF7\u6C42\u89E3\u6790\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u6B65\uFF1A<br/></p>
<ul>
<li>\u6839\u670D\u52A1\u5668\u8FD4\u56DE\u9876\u7EA7\u57DF\u540D(TLD)\u670D\u52A1\u5668\u5982.com\uFF0C.cn\uFF0C.org \u7B49\u7684\u5730\u5740\uFF0C\u8BE5\u4F8B\u5B50\u4E2D\u4F1A\u8FD4\u56DE.com \u7684\u5730\u5740</li>
<li>\u63A5\u7740\u5411\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u7136\u540E\u4F1A\u8FD4\u56DE\u6B21\u7EA7\u57DF\u540D(SLD)\u670D\u52A1\u5668\u7684\u5730\u5740\uFF0C\u672C\u4F8B\u5B50\u4F1A\u8FD4\u56DE.test \u7684\u5730\u5740</li>
<li>\u63A5\u7740\u5411\u6B21\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u7136\u540E\u4F1A\u8FD4\u56DE\u901A\u8FC7\u57DF\u540D\u67E5\u8BE2\u5230\u7684\u76EE\u6807 IP\uFF0C\u672C\u4F8B\u5B50\u4F1A\u8FD4\u56DEwww.test.com\u7684\u5730\u5740</li>
<li>Local DNS Server \u4F1A\u7F13\u5B58\u7ED3\u679C\uFF0C\u5E76\u8FD4\u56DE\u7ED9\u7528\u6237\uFF0C\u7F13\u5B58\u5728\u7CFB\u7EDF\u4E2D</li>
</ul>
</li>
<li>
<p>cdn \u4F18\u70B9</p>
<ul>
<li>\u52A0\u901F\u7F51\u7AD9\u7684\u8BBF\u95EE\uFF1A\u7531\u4E8E\u7528\u6237\u7684\u8BF7\u6C42\u88AB\u6620\u5C04\u5230\u6700\u4F73\u8282\u70B9\u4E0A\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5927\u5927\u964D\u4F4E\u8BBF\u95EE\u5EF6\u8FDF\uFF0C\u63D0\u9AD8\u7F51\u7AD9\u7684\u8BBF\u95EE\u901F\u5EA6\u548C\u7528\u6237\u4F53\u9A8C\u3002</li>
<li>\u63D0\u9AD8\u7F51\u7AD9\u7684\u7A33\u5B9A\u6027\uFF1A\u7531\u4E8E\u8282\u70B9\u95F4\u4F1A\u81EA\u52A8\u5907\u4EFD\uFF0C\u4E00\u65E6\u67D0\u4E2A\u8282\u70B9\u6545\u969C\uFF0C\u8BF7\u6C42\u4F1A\u81EA\u52A8\u8F6C\u53D1\u5230\u5907\u7528\u8282\u70B9\u4E0A\uFF0C\u4FDD\u8BC1\u7F51\u7AD9\u4E0D\u4F1A\u56E0\u8282\u70B9\u6545\u969C\u800C\u4E0D\u53EF\u7528\u3002</li>
<li>\u51CF\u8F7B\u6E90\u7AD9\u8D1F\u8F7D\u538B\u529B\uFF1A\u7531\u4E8E CDN \u53EF\u4EE5\u7F13\u5B58\u70ED\u70B9\u8D44\u6E90\uFF0C\u7528\u6237\u8BF7\u6C42\u4F1A\u76F4\u63A5\u88AB\u8F6C\u53D1\u5230\u8282\u70B9\u4E0A\uFF0C\u51CF\u5C11\u4E86\u6E90\u7AD9\u7684\u538B\u529B\uFF0C\u63D0\u9AD8\u4E86\u6E90\u7AD9\u7684\u53EF\u7528\u6027\u548C\u6027\u80FD\u3002</li>
<li>\u53EF\u9760\u7684\u5B89\u5168\u4FDD\u969C\uFF1ACDN \u670D\u52A1\u5546\u4F1A\u4E3A\u7528\u6237\u63D0\u4F9B\u591A\u6837\u5316\u7684\u5B89\u5168\u670D\u52A1\uFF0C\u4F8B\u5982\u9632\u76D7\u94FE\u3001DDoS \u653B\u51FB\u9632\u62A4\u7B49\u3002</li>
</ul>
</li>
<li>
<p>cdn \u4F7F\u7528\u573A\u666F</p>
<ul>
<li>\u4F7F\u7528\u7B2C\u4E09\u65B9\u7684 CDN \u670D\u52A1\uFF1A\u5982\u679C\u60F3\u8981\u5F00\u6E90\u4E00\u4E9B\u9879\u76EE\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7B2C\u4E09\u65B9\u7684 CDN \u670D\u52A1</li>
<li>\u4F7F\u7528 CDN \u8FDB\u884C\u9759\u6001\u8D44\u6E90\u7684\u7F13\u5B58\uFF1A\u5C06\u81EA\u5DF1\u7F51\u7AD9\u7684\u9759\u6001\u8D44\u6E90\u653E\u5728 CDN \u4E0A\uFF0C\u6BD4\u5982 js\u3001css\u3001\u56FE\u7247\u7B49\u3002\u53EF\u4EE5\u5C06\u6574\u4E2A\u9879\u76EE\u653E\u5728 CDN \u4E0A\uFF0C\u5B8C\u6210\u4E00\u952E\u90E8\u7F72\u3002</li>
<li>\u76F4\u64AD\u4F20\u9001\uFF1A\u76F4\u64AD\u672C\u8D28\u4E0A\u662F\u4F7F\u7528\u6D41\u5A92\u4F53\u8FDB\u884C\u4F20\u9001\uFF0CCDN \u4E5F\u662F\u652F\u6301\u6D41\u5A92\u4F53\u4F20\u9001\u7684\uFF0C\u6240\u4EE5\u76F4\u64AD\u5B8C\u5168\u53EF\u4EE5\u4F7F\u7528 CDN \u6765\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002CDN \u5728\u5904\u7406\u6D41\u5A92\u4F53\u7684\u65F6\u5019\u4E0E\u5904\u7406\u666E\u901A\u9759\u6001\u6587\u4EF6\u6709\u6240\u4E0D\u540C\uFF0C\u666E\u901A\u6587\u4EF6\u5982\u679C\u5728\u8FB9\u7F18\u8282\u70B9\u6CA1\u6709\u627E\u5230\u7684\u8BDD\uFF0C\u5C31\u4F1A\u53BB\u4E0A\u4E00\u5C42\u63A5\u7740\u5BFB\u627E\uFF0C\u4F46\u662F\u6D41\u5A92\u4F53\u672C\u8EAB\u6570\u636E\u91CF\u5C31\u975E\u5E38\u5927\uFF0C\u5982\u679C\u4F7F\u7528\u56DE\u6E90\u7684\u65B9\u5F0F\uFF0C\u5FC5\u7136\u4F1A\u5E26\u6765\u6027\u80FD\u95EE\u9898\uFF0C\u6240\u4EE5\u6D41\u5A92\u4F53\u4E00\u822C\u91C7\u7528\u7684\u90FD\u662F\u4E3B\u52A8\u63A8\u9001\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u3002</li>
</ul>
</li>
</ul>
<h2>2. \u61D2\u52A0\u8F7D</h2>
<ul>
<li>
<p>\u61D2\u52A0\u8F7D\u7684\u6982\u5FF5</p>
<p>\u61D2\u52A0\u8F7D\u662F\u4E00\u79CD\u6027\u80FD\u4F18\u5316\u6280\u672F\uFF0C\u5B83\u5C06\u7F51\u9875\u7684\u67D0\u4E9B\u8D44\u6E90\uFF08\u5982\u56FE\u7247\u3001\u89C6\u9891\u3001\u811A\u672C\u7B49\uFF09\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u76F4\u5230\u7528\u6237\u9700\u8981\u8BBF\u95EE\u5B83\u4EEC\u7684\u65F6\u5019\u518D\u53BB\u4E0B\u8F7D\u548C\u6E32\u67D3\u663E\u793A\u3002\u8FD9\u6837\u505A\u53EF\u4EE5\u51CF\u5C11\u7F51\u9875\u7684\u521D\u59CB\u52A0\u8F7D\u65F6\u95F4\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002</p>
</li>
<li>
<p>\u61D2\u52A0\u8F7D\u7684\u7279\u70B9</p>
<ul>
<li>\u63D0\u9AD8\u7F51\u9875\u7684\u52A0\u8F7D\u901F\u5EA6: \u61D2\u52A0\u8F7D\u80FD\u591F\u51CF\u5C11\u9996\u6B21\u52A0\u8F7D\u7684\u8D44\u6E90\u91CF\uFF0C\u52A0\u5FEB\u7F51\u9875\u52A0\u8F7D\u901F\u5EA6\uFF0C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002</li>
<li>\u51CF\u5C11\u5E26\u5BBD\u7684\u5360\u7528: \u61D2\u52A0\u8F7D\u53EF\u4EE5\u5EF6\u8FDF\u8BF7\u6C42\u90A3\u4E9B\u4E0D\u5FC5\u8981\u7684\u8D44\u6E90\uFF0C\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u8D1F\u62C5\uFF0C\u8282\u7701\u5E26\u5BBD\u7684\u4F7F\u7528\u3002</li>
<li>\u63D0\u5347\u7F51\u9875\u7684\u6027\u80FD: \u61D2\u52A0\u8F7D\u53EF\u4EE5\u907F\u514D\u4E00\u6B21\u6027\u52A0\u8F7D\u592A\u591A\u6587\u4EF6\uFF0C\u907F\u514D\u8D44\u6E90\u6D6A\u8D39\uFF0C\u51CF\u5C11\u6D4F\u89C8\u5668\u7684\u5185\u5B58\u5360\u7528\u3002</li>
<li>\u6539\u5584\u7528\u6237\u4F53\u9A8C: \u61D2\u52A0\u8F7D\u53EF\u4EE5\u4F7F\u7528\u6237\u4F53\u9A8C\u66F4\u4F73\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u53EF\u4EE5\u66F4\u5FEB\u5730\u8BBF\u95EE\u6240\u9700\u7684\u5185\u5BB9\u3002\u5982\u679C\u7F51\u9875\u5305\u542B\u5927\u91CF\u56FE\u7247\u6216\u89C6\u9891\uFF0C\u7528\u6237\u53EF\u4EE5\u66F4\u5FEB\u5730\u8BBF\u95EE\u548C\u6D4F\u89C8\u5185\u5BB9\u3002
\u603B\u7684\u6765\u8BF4\uFF0C\u61D2\u52A0\u8F7D\u662F\u4E00\u79CD\u975E\u5E38\u5B9E\u7528\u7684\u6027\u80FD\u4F18\u5316\u6280\u672F\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u7F51\u7AD9\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u6539\u5584\u7528\u6237\u4F53\u9A8C\uFF0C\u5E76\u4E14\u51CF\u5C11\u5E26\u5BBD\u548C\u8D44\u6E90\u6D6A\u8D39\u3002</li>
</ul>
</li>
<li>
<p>\u61D2\u52A0\u8F7D\u7684\u5B9E\u73B0\u539F\u7406</p>
<ul>
<li>\u9884\u5148\u8BBE\u5B9A\u5360\u4F4D\u7B26\uFF1A\u5728\u9875\u9762\u663E\u793A\u4E4B\u524D\uFF0C\u6211\u4EEC\u901A\u5E38\u5148\u7528\u4E00\u5F20\u76F8\u540C\u5927\u5C0F\u7684\u5F85\u66FF\u6362\u5360\u4F4D\u7B26\uFF0C\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u3002\u8FD9\u6837\uFF0C\u5728\u9875\u9762\u663E\u793A\u5B8C\u6210\u4E4B\u524D\uFF0C\u6211\u4EEC\u603B\u80FD\u786E\u5B9A\u56FE\u7247\u6216\u8005\u5404\u79CD\u5176\u4ED6\u8D44\u6E90\u7684\u5360\u7528\u4F4D\u7F6E\u3002</li>
<li>\u68C0\u6D4B\u89C6\u53E3\u8303\u56F4\uFF1A\u7528 JavaScript \u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u83B7\u53D6\u5C4F\u5E55\u89C6\u53E3\u7684\u5927\u5C0F\u548C\u5F53\u524D\u6EDA\u52A8\u7684\u4F4D\u7F6E\uFF0C\u7528\u4E8E\u5224\u65AD\u54EA\u4E9B\u8D44\u6E90\u5E94\u8BE5\u88AB\u52A0\u8F7D\u3002</li>
<li>\u52A0\u8F7D\u5BF9\u5E94\u7684\u8D44\u6E90\uFF1A\u5F53\u6D4F\u89C8\u5668\u6EDA\u52A8\u5230\u9700\u8981\u5C55\u793A\u7684\u8D44\u6E90\u4F4D\u7F6E\u65F6\uFF0C\u6211\u4EEC\u5C31\u7528\u5F02\u6B65\u7684\u65B9\u5F0F\u53BB\u8BF7\u6C42\u5BF9\u5E94\u4F4D\u7F6E\u7684\u8D44\u6E90\u3002</li>
<li>\u66FF\u6362\u5360\u4F4D\u7B26\uFF1A\u5F53\u56FE\u7247\u6216\u5176\u4ED6\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u76F4\u63A5\u4FEE\u6539\u5176 src \u5C5E\u6027\uFF0C\u7136\u540E\u5C06\u5360\u4F4D\u7B26\u66FF\u6362\u3002
\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u4EC5\u662F\u56FE\u7247\u548C\u89C6\u9891\u53EF\u4EE5\u8FDB\u884C\u61D2\u52A0\u8F7D\uFF0C\u5F88\u591A JS \u6587\u4EF6\u548C CSS \u6587\u4EF6\u540C\u6837\u53EF\u4EE5\u8FDB\u884C\u61D2\u52A0\u8F7D\u3002\u61D2\u52A0\u8F7D\u8FD9\u4E2A\u6280\u672F\u4E0D\u4EC5\u53EF\u4EE5\u63D0\u9AD8\u9875\u9762\u8F7D\u5165\u901F\u5EA6\uFF0C\u800C\u4E14\u4E5F\u53EF\u4EE5\u8282\u7701\u5E26\u5BBD\uFF0C\u5927\u5927\u63D0\u5347\u4E86\u7528\u6237\u4F53\u9A8C\u3002</li>
</ul>
</li>
</ul>
<h2>3. \u8282\u6D41\u9632\u6296</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
<h2>4. \u56FE\u7247\u4F18\u5316</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
<h2>5. \u6253\u5305\u5668\uFF08webpack,vitejs,rollup\uFF09</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
<h2>6. \u670D\u52A1\u7AEF\u6E32\u67D3</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
<h2>7. \u79BB\u7EBF\u5305</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
<h2>8. \u6D4F\u89C8\u5668\u548C webview</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
<h2>9. webworker</h2>
<p>\u6574\u7406\u4E2D\u3002\u3002\u3002</p>
`,i={articleId:"intro",content:l,path:"/notes/web-optimization/intro",title:"\u7B80\u4ECB",routeType:n.inside},t=[],e={path:i.path,title:"\u6027\u80FD\u4F18\u5316",children:[]};export{i as __default,e as __module,t as default,t as page};
