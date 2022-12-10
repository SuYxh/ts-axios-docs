import{_ as s,c as a,o as n,a as p}from"./app.494a6664.js";const d=JSON.parse('{"title":"\u5904\u7406\u54CD\u5E94 header","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9700\u6C42\u5206\u6790","slug":"\u9700\u6C42\u5206\u6790","link":"#\u9700\u6C42\u5206\u6790","children":[]},{"level":2,"title":"parseHeaders \u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528","slug":"parseheaders-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528","link":"#parseheaders-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528","children":[]}],"relativePath":"guide/chapter4/response-header.md"}'),l={name:"guide/chapter4/response-header.md"},o=p(`<h1 id="\u5904\u7406\u54CD\u5E94-header" tabindex="-1">\u5904\u7406\u54CD\u5E94 header <a class="header-anchor" href="#\u5904\u7406\u54CD\u5E94-header" aria-hidden="true">#</a></h1><h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1">\u9700\u6C42\u5206\u6790 <a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u901A\u8FC7 <code>XMLHttpRequest</code> \u5BF9\u8C61\u7684 <code>getAllResponseHeaders</code> \u65B9\u6CD5\u83B7\u53D6\u5230\u7684\u503C\u662F\u5982\u4E0B\u4E00\u6BB5\u5B57\u7B26\u4E32\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">date: Fri, 05 Apr 2019 12:40:49 GMT</span></span>
<span class="line"><span style="color:#dbd7caee;">etag: W/&quot;d-Ssxx4FRxEutDLwo2+xkkxKc4y0k&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">connection: keep-alive</span></span>
<span class="line"><span style="color:#dbd7caee;">x-powered-by: Express</span></span>
<span class="line"><span style="color:#dbd7caee;">content-length: 13</span></span>
<span class="line"><span style="color:#dbd7caee;">content-type: application/json; charset=utf-8</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;">date: Fri, 05 Apr 2019 12:40:49 GMT</span></span>
<span class="line"><span style="color:#393a34;">etag: W/&quot;d-Ssxx4FRxEutDLwo2+xkkxKc4y0k&quot;</span></span>
<span class="line"><span style="color:#393a34;">connection: keep-alive</span></span>
<span class="line"><span style="color:#393a34;">x-powered-by: Express</span></span>
<span class="line"><span style="color:#393a34;">content-length: 13</span></span>
<span class="line"><span style="color:#393a34;">content-type: application/json; charset=utf-8</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>\u6BCF\u4E00\u884C\u90FD\u662F\u4EE5\u56DE\u8F66\u7B26\u548C\u6362\u884C\u7B26 <code>\\r\\n</code> \u7ED3\u675F\uFF0C\u5B83\u4EEC\u662F\u6BCF\u4E2A <code>header</code> \u5C5E\u6027\u7684\u5206\u9694\u7B26\u3002\u5BF9\u4E8E\u4E0A\u9762\u8FD9\u4E32\u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u5E0C\u671B\u6700\u7EC8\u89E3\u6790\u6210\u4E00\u4E2A\u5BF9\u8C61\u7ED3\u6784\uFF1A</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;">date</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">&#39;Fri</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">05</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">Apr</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">2019</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">12</span><span style="color:#666666;">:</span><span style="color:#4C9A91;">40</span><span style="color:#FDAEB7;">:</span><span style="color:#4C9A91;">49</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">GMT&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;">etag:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">&#39;W/</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">d-Ssxx4FRxEutDLwo2+xkkxKc4y0k</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#FDAEB7;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;">connection</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">&#39;keep-alive&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;">&#39;x-powered-by&#39;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">&#39;Express&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;">&#39;content-length&#39;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">&#39;</span><span style="color:#4C9A91;">13</span><span style="color:#FDAEB7;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#FDAEB7;">&#39;content-type&#39;:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">&#39;application/json;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#FDAEB7;">charset=utf</span><span style="color:#4C9A91;">-8</span><span style="color:#FDAEB7;">&#39;</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;">date</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">&#39;Fri</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">05</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">Apr</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">2019</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">12</span><span style="color:#999999;">:</span><span style="color:#2F798A;">40</span><span style="color:#B31D28;">:</span><span style="color:#2F798A;">49</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">GMT&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;">etag:</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">&#39;W/</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">d-Ssxx4FRxEutDLwo2+xkkxKc4y0k</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B31D28;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;">connection</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">&#39;keep-alive&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;">&#39;x-powered-by&#39;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">&#39;Express&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;">&#39;content-length&#39;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">&#39;</span><span style="color:#2F798A;">13</span><span style="color:#B31D28;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B31D28;">&#39;content-type&#39;:</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">&#39;application/json;</span><span style="color:#393A34;"> </span><span style="color:#B31D28;">charset=utf</span><span style="color:#2F798A;">-8</span><span style="color:#B31D28;">&#39;</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="parseheaders-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528" tabindex="-1">parseHeaders \u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528 <a class="header-anchor" href="#parseheaders-\u51FD\u6570\u5B9E\u73B0\u53CA\u5E94\u7528" aria-hidden="true">#</a></h2><p>\u6839\u636E\u9700\u6C42\u5206\u6790\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u4E00\u4E2A <code>parseHeaders</code> \u5DE5\u5177\u51FD\u6570\u3002</p><p><code>helpers/headers.ts</code>\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">parseHeaders</span><span style="color:#666666;">(</span><span style="color:#BD976A;">headers</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">any</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">let </span><span style="color:#BD976A;">parsed</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">Object</span><span style="color:#666666;">.</span><span style="color:#80A665;">create</span><span style="color:#666666;">(</span><span style="color:#CB7676;">null</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">!</span><span style="color:#BD976A;">headers</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">parsed</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">headers</span><span style="color:#666666;">.</span><span style="color:#80A665;">split</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C99076;">\\r\\n</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">).</span><span style="color:#80A665;">forEach</span><span style="color:#666666;">(</span><span style="color:#BD976A;">line</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=&gt;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#CB7676;">let </span><span style="color:#666666;">[</span><span style="color:#BD976A;">key</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">val</span><span style="color:#666666;">]</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">line</span><span style="color:#666666;">.</span><span style="color:#80A665;">split</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">:</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">key</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">key</span><span style="color:#666666;">.</span><span style="color:#80A665;">trim</span><span style="color:#666666;">().</span><span style="color:#80A665;">toLowerCase</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">!</span><span style="color:#BD976A;">key</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">return</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#BD976A;">val</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">val</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">val</span><span style="color:#666666;">.</span><span style="color:#80A665;">trim</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">parsed</span><span style="color:#666666;">[</span><span style="color:#BD976A;">key</span><span style="color:#666666;">]</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">val</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">parsed</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">parseHeaders</span><span style="color:#999999;">(</span><span style="color:#B07D48;">headers</span><span style="color:#999999;">: </span><span style="color:#2E808F;">string</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">any</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">let </span><span style="color:#B07D48;">parsed</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">Object</span><span style="color:#999999;">.</span><span style="color:#59873A;">create</span><span style="color:#999999;">(</span><span style="color:#AB5959;">null</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">!</span><span style="color:#B07D48;">headers</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">parsed</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">headers</span><span style="color:#999999;">.</span><span style="color:#59873A;">split</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#A65E2B;">\\r\\n</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">).</span><span style="color:#59873A;">forEach</span><span style="color:#999999;">(</span><span style="color:#B07D48;">line</span><span style="color:#393A34;"> </span><span style="color:#999999;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">let </span><span style="color:#999999;">[</span><span style="color:#B07D48;">key</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">val</span><span style="color:#999999;">]</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">line</span><span style="color:#999999;">.</span><span style="color:#59873A;">split</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">:</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">key</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">key</span><span style="color:#999999;">.</span><span style="color:#59873A;">trim</span><span style="color:#999999;">().</span><span style="color:#59873A;">toLowerCase</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">!</span><span style="color:#B07D48;">key</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">return</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#B07D48;">val</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">val</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">val</span><span style="color:#999999;">.</span><span style="color:#59873A;">trim</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">parsed</span><span style="color:#999999;">[</span><span style="color:#B07D48;">key</span><span style="color:#999999;">]</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">val</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">parsed</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u6211\u4EEC\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u51FD\u6570\uFF1A</p><p><code>xhr.ts</code>\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">responseHeaders</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">parseHeaders</span><span style="color:#666666;">(</span><span style="color:#BD976A;">request</span><span style="color:#666666;">.</span><span style="color:#80A665;">getAllResponseHeaders</span><span style="color:#666666;">())</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">responseHeaders</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">parseHeaders</span><span style="color:#999999;">(</span><span style="color:#B07D48;">request</span><span style="color:#999999;">.</span><span style="color:#59873A;">getAllResponseHeaders</span><span style="color:#999999;">())</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u7740\u6211\u4EEC\u518D\u53BB\u770B\u521A\u624D\u7684 demo\uFF0C\u53D1\u73B0\u6211\u4EEC\u5DF2\u7ECF\u628A\u54CD\u5E94\u7684 <code>headers</code> \u5B57\u6BB5\u4ECE\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u5BF9\u8C61\u7ED3\u6784\u4E86\u3002\u90A3\u4E48\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5728\u89E3\u51B3\u4E4B\u524D\u9057\u7559\u7684\u7B2C\u4E8C\u4E2A\u95EE\u9898\uFF1A\u5BF9\u54CD\u5E94 <code>data</code> \u5B57\u6BB5\u7684\u5904\u7406\u3002</p>`,14),e=[o];function c(t,r,y,A,D,i){return n(),a("div",null,e)}const E=s(l,[["render",c]]);export{d as __pageData,E as default};