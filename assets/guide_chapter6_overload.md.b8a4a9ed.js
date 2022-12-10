import{_ as s,c as n,o as a,a as p}from"./app.494a6664.js";const B=JSON.parse('{"title":"axios \u51FD\u6570\u91CD\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9700\u6C42\u5206\u6790","slug":"\u9700\u6C42\u5206\u6790","link":"#\u9700\u6C42\u5206\u6790","children":[]},{"level":2,"title":"\u91CD\u8F7D\u5B9E\u73B0","slug":"\u91CD\u8F7D\u5B9E\u73B0","link":"#\u91CD\u8F7D\u5B9E\u73B0","children":[]},{"level":2,"title":"\u7F16\u5199 demo","slug":"\u7F16\u5199-demo","link":"#\u7F16\u5199-demo","children":[]}],"relativePath":"guide/chapter6/overload.md"}'),l={name:"guide/chapter6/overload.md"},o=p(`<h1 id="axios-\u51FD\u6570\u91CD\u8F7D" tabindex="-1">axios \u51FD\u6570\u91CD\u8F7D <a class="header-anchor" href="#axios-\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a></h1><h2 id="\u9700\u6C42\u5206\u6790" tabindex="-1">\u9700\u6C42\u5206\u6790 <a class="header-anchor" href="#\u9700\u6C42\u5206\u6790" aria-hidden="true">#</a></h2><p>\u76EE\u524D\u6211\u4EEC\u7684 axios \u51FD\u6570\u53EA\u652F\u6301\u4F20\u5165 1 \u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#80A665;">axios</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">url</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">/extend/post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">method</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">msg</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hi</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#59873A;">axios</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">url</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">/extend/post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">method</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">data</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">msg</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hi</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u5E0C\u671B\u8BE5\u51FD\u6570\u4E5F\u80FD\u652F\u6301\u4F20\u5165 2 \u4E2A\u53C2\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#80A665;">axios</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">/extend/post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">method</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">msg</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#59873A;">axios</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">/extend/post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">method</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">data</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">msg</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F <code>url</code>\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F <code>config</code>\uFF0C\u8FD9\u4E2A\u51FD\u6570\u6709\u70B9\u7C7B\u4F3C <code>axios.get</code> \u65B9\u6CD5\u652F\u6301\u7684\u53C2\u6570\u7C7B\u578B\uFF0C\u4E0D\u540C\u7684\u662F\u5982\u679C\u6211\u4EEC\u60F3\u8981\u6307\u5B9A HTTP \u65B9\u6CD5\u7C7B\u578B\uFF0C\u4ECD\u7136\u9700\u8981\u5728 <code>config</code> \u4F20\u5165 <code>method</code>\u3002</p><p>\u8FD9\u5C31\u7528\u5230\u6211\u4EEC\u4E4B\u524D\u6240\u5B66\u7684\u51FD\u6570\u91CD\u8F7D\u77E5\u8BC6\u70B9\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5B9E\u73B0\u5B83\u3002</p><h2 id="\u91CD\u8F7D\u5B9E\u73B0" tabindex="-1">\u91CD\u8F7D\u5B9E\u73B0 <a class="header-anchor" href="#\u91CD\u8F7D\u5B9E\u73B0" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u8981\u4FEE\u6539 <code>AxiosInstance</code> \u7684\u7C7B\u578B\u5B9A\u4E49\u3002</p><p><code>types/index.ts</code>\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">AxiosInstance</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">extends</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">Axios</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">(</span><span style="color:#BD976A;">config</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">AxiosRequestConfig</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">AxiosPromise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">(</span><span style="color:#BD976A;">url</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">config</span><span style="color:#CB7676;">?</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">AxiosRequestConfig</span><span style="color:#666666;">):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">AxiosPromise</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">AxiosInstance</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">extends</span><span style="color:#393A34;"> </span><span style="color:#59873A;">Axios</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">(</span><span style="color:#B07D48;">config</span><span style="color:#999999;">: </span><span style="color:#2E808F;">AxiosRequestConfig</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">AxiosPromise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">(</span><span style="color:#B07D48;">url</span><span style="color:#999999;">: </span><span style="color:#2E808F;">string</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">config</span><span style="color:#AB5959;">?</span><span style="color:#999999;">: </span><span style="color:#2E808F;">AxiosRequestConfig</span><span style="color:#999999;">):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">AxiosPromise</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u589E\u52A0\u4E00\u79CD\u51FD\u6570\u7684\u5B9A\u4E49\uFF0C\u5B83\u652F\u6301 2 \u4E2A\u53C2\u6570\uFF0C\u5176\u4E2D <code>url</code> \u662F\u5FC5\u9009\u53C2\u6570\uFF0C<code>config</code> \u662F\u53EF\u9009\u53C2\u6570\u3002</p><p>\u7531\u4E8E <code>axios</code> \u51FD\u6570\u5B9E\u9645\u4E0A\u6307\u5411\u7684\u662F <code>request</code> \u51FD\u6570\uFF0C\u6240\u4EE5\u6211\u4EEC\u6765\u4FEE\u6539 <code>request</code> \u51FD\u6570\u7684\u5B9E\u73B0\u3002</p><p><code>core/Axios.ts</code>\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#80A665;">request</span><span style="color:#666666;">(</span><span style="color:#BD976A;">url</span><span style="color:#DBD7CAEE;">: </span><span style="color:#BD976A;">any</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">config</span><span style="color:#CB7676;">?:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">any</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;">: </span><span style="color:#BD976A;">AxiosPromise</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">typeof</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">url</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">===</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">string</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#CB7676;">!</span><span style="color:#BD976A;">config</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#BD976A;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">config</span><span style="color:#666666;">.</span><span style="color:#BD976A;">url</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">url</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">else</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">config</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">url</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">dispatchRequest</span><span style="color:#666666;">(</span><span style="color:#BD976A;">config</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">  </span><span style="color:#59873A;">request</span><span style="color:#999999;">(</span><span style="color:#B07D48;">url</span><span style="color:#393A34;">: </span><span style="color:#B07D48;">any</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">config</span><span style="color:#AB5959;">?:</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">any</span><span style="color:#999999;">)</span><span style="color:#393A34;">: </span><span style="color:#B07D48;">AxiosPromise</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">typeof</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">url</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">===</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">string</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#1E754F;">if</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#AB5959;">!</span><span style="color:#B07D48;">config</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#B07D48;">config</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">config</span><span style="color:#999999;">.</span><span style="color:#B07D48;">url</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">url</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">else</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">config</span><span style="color:#393A34;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">url</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#59873A;">dispatchRequest</span><span style="color:#999999;">(</span><span style="color:#B07D48;">config</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u628A <code>request</code> \u51FD\u6570\u7684\u53C2\u6570\u6539\u6210 2 \u4E2A\uFF0C<code>url</code> \u548C <code>config</code> \u90FD\u662F <code>any</code> \u7C7B\u578B\uFF0C<code>config</code> \u8FD8\u662F\u53EF\u9009\u53C2\u6570\u3002</p><p>\u63A5\u7740\u5728\u51FD\u6570\u4F53\u6211\u4EEC\u5224\u65AD <code>url</code> \u662F\u5426\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4E00\u65E6\u5B83\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5219\u7EE7\u7EED\u5BF9 <code>config</code> \u5224\u65AD\uFF0C\u56E0\u4E3A\u5B83\u53EF\u80FD\u4E0D\u4F20\uFF0C\u5982\u679C\u4E3A\u7A7A\u5219\u6784\u9020\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7136\u540E\u628A <code>url</code> \u6DFB\u52A0\u5230 <code>config.url</code> \u4E2D\u3002\u5982\u679C <code>url</code> \u4E0D\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5219\u8BF4\u660E\u6211\u4EEC\u4F20\u5165\u7684\u5C31\u662F\u5355\u4E2A\u53C2\u6570\uFF0C\u4E14 <code>url</code> \u5C31\u662F <code>config</code>\uFF0C\u56E0\u6B64\u628A <code>url</code> \u8D4B\u503C\u7ED9 <code>config</code>\u3002</p><p>\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6211\u4EEC\u867D\u7136\u4FEE\u6539\u4E86 <code>request</code> \u7684\u5B9E\u73B0\uFF0C\u652F\u6301\u4E86 2 \u79CD\u53C2\u6570\uFF0C\u4F46\u662F\u6211\u4EEC\u5BF9\u5916\u63D0\u4F9B\u7684 <code>request</code> \u63A5\u53E3\u4ECD\u7136\u4E0D\u53D8\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u4EC5\u4EC5\u662F\u5185\u90E8\u7684\u5B9E\u73B0\u7684\u4FEE\u6539\uFF0C\u4E0E\u5BF9\u5916\u63A5\u53E3\u4E0D\u5FC5\u4E00\u81F4\uFF0C\u53EA\u8981\u4FDD\u7559\u5B9E\u73B0\u517C\u5BB9\u63A5\u53E3\u5373\u53EF\u3002</p><h2 id="\u7F16\u5199-demo" tabindex="-1">\u7F16\u5199 demo <a class="header-anchor" href="#\u7F16\u5199-demo" aria-hidden="true">#</a></h2><p><code>examples/extend/app.ts</code>\uFF1A</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#80A665;">axios</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">url</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">/extend/post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">method</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">msg</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hi</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#80A665;">axios</span><span style="color:#666666;">(</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">/extend/post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">method</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">post</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#B8A965;">data</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">msg</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">hello</span><span style="color:#C98A7DAA;">&#39;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#59873A;">axios</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">url</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">/extend/post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">method</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">data</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">msg</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hi</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#59873A;">axios</span><span style="color:#999999;">(</span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">/extend/post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">method</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">post</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#998418;">data</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">msg</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">hello</span><span style="color:#B56959AA;">&#39;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><p>\u6211\u4EEC\u4F7F\u7528\u4E86 <code>axios</code> 2 \u79CD\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u6253\u5F00\u9875\u9762\u8FD0\u884C <code>demo</code>\uFF0C\u901A\u8FC7 network \u6211\u4EEC\u53EF\u4EE5\u770B\u5230 2 \u79CD\u8BF7\u6C42\u90FD\u662F\u8FD0\u884C\u6B63\u5E38\u7684\u3002</p><p>\u81F3\u6B64\u6211\u4EEC\u5B9E\u73B0\u4E86 <code>axios</code> \u51FD\u6570\u7684\u91CD\u8F7D\u3002\u5B98\u65B9 axios \u652F\u6301\u4E86\u4E00\u79CD\u80FD\u529B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53BB\u5B9A\u4E49\u8FD4\u56DE\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u5E76\u5728\u8BF7\u6C42\u7684\u65F6\u5019\u6307\u5B9A\u8BE5\u7C7B\u578B\uFF0C\u7136\u540E\u5728\u54CD\u5E94\u6570\u636E\u4E2D\u6211\u4EEC\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u8BE5\u6570\u636E\u7C7B\u578B\u3002\u4E0B\u4E00\u8282\u8BFE\u6211\u4EEC\u5C31\u6765\u5B9E\u73B0\u8FD9\u4E2A feature\u3002</p>`,24),e=[o];function c(t,r,y,A,i,D){return a(),n("div",null,e)}const E=s(l,[["render",c]]);export{B as __pageData,E as default};
