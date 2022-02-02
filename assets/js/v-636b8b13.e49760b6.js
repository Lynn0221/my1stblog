"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[931],{3923:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-636b8b13",path:"/guide/javascript/%E6%B7%B1%E6%8B%B7%E8%B4%9D%E6%B5%85%E6%8B%B7%E8%B4%9D.html",title:"深拷贝浅拷贝",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"浅拷贝",slug:"浅拷贝",children:[]},{level:2,title:"深拷贝",slug:"深拷贝",children:[]}],filePathRelative:"guide/javascript/深拷贝浅拷贝.md",git:{updatedTime:1643792386e3,contributors:[{name:"Lynn",email:"Linmy0221@gmail.com",commits:1}]}}},238:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="深拷贝浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝浅拷贝" aria-hidden="true">#</a> 深拷贝浅拷贝</h1><h2 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deepCopyJson</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deepCopy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> value<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> keys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> value <span class="token operator">=</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>source <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span>\n          Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> value<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> target<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> source<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">isObject</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span>\n    <span class="token string">&quot;[object object]&quot;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>',5),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);