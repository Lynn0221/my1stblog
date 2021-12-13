"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[177],{285:(n,s,e)=>{e.r(s),e.d(s,{data:()=>l});const l={key:"v-be20fd64",path:"/guide/vue/Vuepress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2.html",title:"Vuepress搭建个人博客",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Vuepress简单介绍",slug:"vuepress简单介绍",children:[]},{level:2,title:"搭建",slug:"搭建",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"页面",slug:"页面",children:[]},{level:3,title:"路由",slug:"路由",children:[]}]},{level:2,title:"部署",slug:"部署",children:[{level:3,title:"Github Pages",slug:"github-pages",children:[]},{level:3,title:"手动部署",slug:"手动部署",children:[]},{level:3,title:"Github Actions 自动部署",slug:"github-actions-自动部署",children:[]}]}],filePathRelative:"guide/vue/Vuepress搭建个人博客.md",git:{updatedTime:163938395e4,contributors:[{name:"Lynn",email:"Linmy0221@gmail.com",commits:1}]}}},4094:(n,s,e)=>{e.r(s),e.d(s,{default:()=>Zn});var l=e(6252),a=e(5297),t=e(4382),r=e(8020),u=e(2362),c=e(1023);const o=(0,l._)("h1",{id:"vuepress搭建个人博客",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vuepress搭建个人博客","aria-hidden":"true"},"#"),(0,l.Uk)(" Vuepress搭建个人博客")],-1),i=(0,l._)("p",null,"上班无聊摸鱼，就想写个个博玩玩，奈何还是一个小白，自己手写个前后端，实在有些难...然后就遇到了VuePress。",-1),p=(0,l._)("p",null,"刚开始也只是去官方文档看一看，跟着写了写，感觉还阔以~，就真从头开始搞了一个出来，昂~就是现在看到的这个,主题就用的默认的...",-1),_=(0,l._)("p",null,"写这一篇，纯粹就是为了巩固一下，希望有一天我也能自己写个 主题API 出来哈...",-1),b=(0,l._)("p",null,"嗯 Come on！！开始复习...",-1),k=(0,l._)("h2",{id:"vuepress简单介绍",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vuepress简单介绍","aria-hidden":"true"},"#"),(0,l.Uk)(" Vuepress简单介绍")],-1),A=(0,l._)("p",null,"VuePress 是一个以 Markdown 为中心的静态网站生成器。",-1),m=(0,l._)("p",null,"VuePress 的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在越来越多的使用 VuePress 构建他们的文档，博客和其他静态网站。",-1),d=(0,l.Uk)("详细参考： "),g={href:"https://v2.vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"},U=(0,l.Uk)("Vuepress 官方文档"),h=(0,l._)("h2",{id:"搭建",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#搭建","aria-hidden":"true"},"#"),(0,l.Uk)(" 搭建")],-1),f=(0,l._)("h3",{id:"安装",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,l.Uk)(" 安装")],-1),v=(0,l._)("p",null,[(0,l._)("strong",null,"创建目录")],-1),y=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"mkdir"),(0,l.Uk)(" myblog  \n"),(0,l._)("span",{class:"token builtin class-name"},"cd"),(0,l.Uk)(" myblog\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),C=(0,l._)("p",null,[(0,l._)("strong",null,"初始化")],-1),x=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"git"),(0,l.Uk)(" init\n"),(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" init\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),j=(0,l._)("p",null,[(0,l._)("strong",null,"本地安装 VuePress")],-1),E=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"install"),(0,l.Uk)(" -D vuepress@next\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),S=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("我当时是装的最新版本 "),(0,l._)("code",null,"2.0.0-beta.27"),(0,l.Uk)(" 有个路径的坑，不知道修复了没...")])],-1),P=(0,l._)("p",null,[(0,l._)("strong",null,[(0,l.Uk)("在"),(0,l._)("code",null,"package.json"),(0,l.Uk)("中添加配置")])],-1),T=(0,l._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,l._)("pre",{class:"language-javascript"},[(0,l._)("code",null,[(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n  "),(0,l._)("span",{class:"token string"},'"scripts"'),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n    "),(0,l._)("span",{class:"token string"},'"docs:dev"'),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},'"vuepress dev docs"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n    "),(0,l._)("span",{class:"token string"},'"docs:build"'),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},'"vuepress build docs"'),(0,l.Uk)("\n  "),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br")])],-1),N=(0,l._)("p",null,[(0,l._)("strong",null,[(0,l.Uk)("配置"),(0,l._)("code",null,".gitignore")]),(0,l._)("br"),(0,l.Uk)(" 把默认的"),(0,l._)("code",null,"node_modules"),(0,l.Uk)(","),(0,l._)("code",null,".temp"),(0,l.Uk)(","),(0,l._)("code",null,".cache"),(0,l.Uk)("和其他一些不想推到git上的文件列出来就好。")],-1),I=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token builtin class-name"},"echo"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'node_modules'"),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},">>"),(0,l.Uk)(" .gitignore\n"),(0,l._)("span",{class:"token builtin class-name"},"echo"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'.temp'"),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},">>"),(0,l.Uk)(" .gitignore\n"),(0,l._)("span",{class:"token builtin class-name"},"echo"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'.cache'"),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},">>"),(0,l.Uk)(" .gitignore\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br")])],-1),z=(0,l._)("blockquote",null,[(0,l._)("p",null,"我用上述代码的时候踩了编码问题的坑，感觉手动添加就好，比写代码也没麻烦多少...")],-1),X=(0,l._)("p",null,[(0,l._)("strong",null,"创建第一篇文档")],-1),Z=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"mkdir"),(0,l.Uk)(" docs\n"),(0,l._)("span",{class:"token builtin class-name"},"echo"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'# Hello VuePress'"),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},">"),(0,l.Uk)(" docs/README.md\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])],-1),D=(0,l._)("p",null,[(0,l.Uk)("创建"),(0,l._)("code",null,"docs"),(0,l.Uk)("文件夹，创建"),(0,l._)("code",null,"README.md"),(0,l.Uk)("，编辑"),(0,l._)("code",null,"Hello VuePress")],-1),H=(0,l._)("p",null,[(0,l._)("strong",null,"运行")],-1),G=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run docs:dev\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),w=(0,l._)("p",null,[(0,l._)("img",{src:a,alt:"vuepess第一个页面"})],-1),W=(0,l._)("p",null,"到此，安装加初期设置和开始仪式都完成了！",-1),V=(0,l._)("h3",{id:"页面",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#页面","aria-hidden":"true"},"#"),(0,l.Uk)(" 页面")],-1),L=(0,l._)("p",null,"项目结构大概是这样的",-1),O=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"├─ docs\n│  ├─ .vuepress\n│  │  └─ config.js       -> 配置文件，包括博客标题，描述等等信息\n│  │  └─ public          -> 静态资源，图片等\n│  ├─ guide              -> 页面\n│  └─ README.md          -> 主页\n├─ .gitignore\n└─ package.json\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br")])],-1),F=(0,l._)("p",null,[(0,l.Uk)("其中最重要的是"),(0,l._)("code",null,"config.js"),(0,l.Uk)("文件，它导出js对象")],-1),J=(0,l._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,l._)("pre",{class:"language-javascript"},[(0,l._)("code",null,[(0,l.Uk)("module"),(0,l._)("span",{class:"token punctuation"},"."),(0,l.Uk)("exports "),(0,l._)("span",{class:"token operator"},"="),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n  lang"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'zh-CN'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n  title"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'你好， VuePress ！'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n  description"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'这是我的第一个 VuePress 站点'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n\n  themeConfig"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n    logo"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'https://vuejs.org/images/logo.png'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n  "),(0,l._)("span",{class:"token punctuation"},"}"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br")])],-1),R=(0,l.Uk)("详细配置项可以参考："),Y={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("VuePress参考——配置"),M=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("上文提到一次最新版本的坑，就是这里，在设置"),(0,l._)("code",null,"base"),(0,l.Uk)("配置项后， "),(0,l._)("code",null,"base"),(0,l.Uk)(" 作为前缀自动地插入到所有以 / 开始的其他选项的链接中，但是设置 tab 图标的路径的时候（"),(0,l._)("code",null,"head"),(0,l.Uk)("配置项的"),(0,l._)("code",null,"href"),(0,l.Uk)("）加不上去，只能手动添加...")]),(0,l._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,l._)("pre",{class:"language-javascript"},[(0,l._)("code",null,[(0,l.Uk)("module"),(0,l._)("span",{class:"token punctuation"},"."),(0,l.Uk)("exports "),(0,l._)("span",{class:"token operator"},"="),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\nbase"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},'"/my1stblog/"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\nlang"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},'"zh-CN"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\ntitle"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},'"Lynn\'s Blog"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\ndescription"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},'"This is my first blog!"'),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\nhead"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"["),(0,l._)("span",{class:"token punctuation"},"["),(0,l._)("span",{class:"token string"},"'link'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)(" rel"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'icon'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)(" href"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'/my1stblog/favicon.ico'"),(0,l.Uk)(),(0,l._)("span",{class:"token punctuation"},"}"),(0,l._)("span",{class:"token punctuation"},"]"),(0,l._)("span",{class:"token punctuation"},"]"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br")])])],-1),Q=(0,l._)("p",null,[(0,l.Uk)("在 "),(0,l._)("code",null,"config.js"),(0,l.Uk)(" 里有一个"),(0,l._)("code",null,"themeConfig"),(0,l.Uk)(" 配置项。在 "),(0,l._)("code",null,"themeConfig"),(0,l.Uk)(" 外部的配置项属于 "),(0,l._)("strong",null,"站点配置"),(0,l.Uk)(" ，而在 "),(0,l._)("code",null,"themeConfig"),(0,l.Uk)(" 内部的配置项则属于 "),(0,l._)("strong",null,"主题配置"),(0,l.Uk)("。")],-1),q=(0,l._)("p",null,[(0,l.Uk)("站点配置就是无论使用什么主题，这些配置项都可以生效，比如"),(0,l._)("code",null,"lang"),(0,l.Uk)("，"),(0,l._)("code",null,"title"),(0,l.Uk)("等等。")],-1),K=(0,l.Uk)("主题配置取决于你使用的主题是什么。"),$=(0,l._)("br",null,null,-1),nn=(0,l.Uk)(" 这里就推一个比较火的一个主题 "),sn={href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},en=(0,l.Uk)("vuepress-theme-reco"),ln=(0,l._)("br",null,null,-1),an=(0,l.Uk)(" 此外也有很多，也可以开发一个，具体参考官方文档 https://v2.vuepress.vuejs.org/zh/guide/theme.html#%E6%9C%AC%E5%9C%B0%E4%B8%BB%E9%A2%98"),tn=(0,l._)("p",null,[(0,l.Uk)("另外，对于每个 "),(0,l._)("code",null,"Markdown"),(0,l.Uk)(" 文件可以包含一个 YAML Frontmatter。Frontmatter 必须在文件的顶部。通过 Frontmatter 覆盖站点配置的一些配置项。Frontmatter 可以当作页面级作用域的配置。")],-1),rn=(0,l._)("div",{class:"language-markdown ext-md line-numbers-mode"},[(0,l._)("pre",{class:"language-markdown"},[(0,l._)("code",null,[(0,l._)("span",{class:"token front-matter-block"},[(0,l._)("span",{class:"token punctuation"},"---"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token font-matter yaml language-yaml"},[(0,l._)("span",{class:"token key atrule"},"lang"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)(" zh"),(0,l._)("span",{class:"token punctuation"},"-"),(0,l.Uk)("CN\n"),(0,l._)("span",{class:"token key atrule"},"title"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)(" 页面的标题\n"),(0,l._)("span",{class:"token key atrule"},"description"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)(" 页面的描述")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"token punctuation"},"---")]),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token title important"},[(0,l._)("span",{class:"token punctuation"},"##"),(0,l.Uk)(" hello vuepress")]),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br")])],-1),un=(0,l._)("h3",{id:"路由",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#路由","aria-hidden":"true"},"#"),(0,l.Uk)(" 路由")],-1),cn=(0,l._)("p",null,[(0,l.Uk)("默认情况下，页面的路由路径是根据 "),(0,l._)("code",null,"Markdown"),(0,l.Uk)(" 文件的相对路径决定的。")],-1),on=(0,l._)("p",null,"假设文件所处的目录结构是这样的：",-1),pn=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"└─ docs\n   ├─ guide\n   │  ├─ getting-started.md\n   │  └─ README.md\n   ├─ contributing.md\n   └─ README.md\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br")])],-1),_n=(0,l._)("p",null,[(0,l.Uk)("将 "),(0,l._)("code",null,"docs"),(0,l.Uk)(" 目录作为 "),(0,l._)("code",null,"sourceDir")],-1),bn=(0,l._)("table",null,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"相对路径"),(0,l._)("th",null,"路由路径")])]),(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("code",null,"/README.md")]),(0,l._)("td",null,[(0,l._)("code",null,"/")])]),(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("code",null,"/contributing.md")]),(0,l._)("td",null,[(0,l._)("code",null,"/contributing.md")])]),(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("code",null,"/guide/README.md")]),(0,l._)("td",null,[(0,l._)("code",null,"/guide/")])]),(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("code",null,"guide/page.md")]),(0,l._)("td",null,[(0,l._)("code",null,"/guide/page.html")])])])],-1),kn=(0,l._)("h2",{id:"部署",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),(0,l.Uk)(" 部署")],-1),An=(0,l._)("h3",{id:"github-pages",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#github-pages","aria-hidden":"true"},"#"),(0,l.Uk)(" Github Pages")],-1),mn=(0,l._)("p",null,[(0,l._)("code",null,"Github Pages"),(0,l.Uk)("是一个静态站点托管服务。Github 页面旨在直接从 Github 仓库中直接托管个人，组织或项目页面。")],-1),dn=(0,l._)("h3",{id:"手动部署",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#手动部署","aria-hidden":"true"},"#"),(0,l.Uk)(" 手动部署")],-1),gn=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"# 项目打包 (package.json 里设置的打包命令)"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run docs:build\n\n"),(0,l._)("span",{class:"token comment"},"# 进入生成的文件夹"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token builtin class-name"},"cd"),(0,l.Uk)(" ."),(0,l._)("span",{class:"token punctuation"},"\\"),(0,l.Uk)("docs"),(0,l._)("span",{class:"token punctuation"},"\\"),(0,l.Uk)(".vuepress"),(0,l._)("span",{class:"token punctuation"},"\\"),(0,l.Uk)("dist"),(0,l._)("span",{class:"token punctuation"},"\\"),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"# 提交，推送到 gh-pages 分支（分支名称固定 gh-pages）"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"git"),(0,l.Uk)(" init\n"),(0,l._)("span",{class:"token function"},"git"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"add"),(0,l.Uk)(" -A\n"),(0,l._)("span",{class:"token function"},"git"),(0,l.Uk)(" commit -m "),(0,l._)("span",{class:"token string"},'"deploy"'),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"# 如果发布到 https://<USERNAME>.github.io"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token comment"},"# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master"),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"# 如果发布到 https://<USERNAME>.github.io/<REPO>"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token comment"},"# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages"),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是："),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"git"),(0,l.Uk)(" push -f https://github.com/Lynn0221/my1stblog.git master:gh-pages\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"16"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"17"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"18"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"19"),(0,l._)("br")])],-1),Un=(0,l._)("p",null,[(0,l._)("strong",null,[(0,l.Uk)("这里需要注意的是 "),(0,l._)("code",null,"config.js"),(0,l.Uk)(" 文件里的 "),(0,l._)("code",null,"base"),(0,l.Uk)(' 要设置为 "'),(0,l._)("code",null,"/<REPO>/"),(0,l.Uk)('"')])],-1),hn=(0,l._)("p",null,[(0,l.Uk)("上述代码，手动一行一行运行或者新建脚本，如"),(0,l._)("code",null,"deploy-gh.sh"),(0,l.Uk)(" 通过运行"),(0,l._)("code",null,"npm run deply-gh.sh"),(0,l.Uk)("部署都是可以的。")],-1),fn=(0,l._)("p",null,[(0,l.Uk)("接着，回到 github 点击"),(0,l._)("code",null,"settings"),(0,l.Uk)(",选择 "),(0,l._)("code",null,"pages"),(0,l.Uk)(",就可以看到部署后的 Github Pages 地址。")],-1),vn=(0,l._)("p",null,[(0,l._)("img",{src:t,alt:"settings"})],-1),yn=(0,l._)("h3",{id:"github-actions-自动部署",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#github-actions-自动部署","aria-hidden":"true"},"#"),(0,l.Uk)(" Github Actions 自动部署")],-1),Cn=(0,l._)("p",null,[(0,l.Uk)("更新多了，我们就会发现手动部署很麻烦。只是增加了个博文，又要打包，又要上传的，就很希望能够自动部署。然后就找到了 "),(0,l._)("code",null,"Github Actions"),(0,l.Uk)("。")],-1),xn=(0,l._)("p",null,[(0,l.Uk)("使用"),(0,l._)("code",null,"Github Actions"),(0,l.Uk)("之后，只要 master 分支上有新的提交，就会自动部署。")],-1),jn=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("首先需要一个 "),(0,l._)("code",null,"Access Token"),(0,l.Uk)(" 进入个人主页的"),(0,l._)("code",null,"settings"),(0,l.Uk)(" --\x3e "),(0,l._)("code",null,"Developer settings"),(0,l.Uk)(" --\x3e "),(0,l._)("code",null,"Personal access tokens"),(0,l.Uk)(" --\x3e "),(0,l._)("code",null,"Generate new token")]),(0,l._)("p",null,[(0,l._)("img",{src:r,alt:"获取token"})])])],-1),En=(0,l._)("p",null,[(0,l.Uk)("Note：ACCESS_TOKEN"),(0,l._)("br"),(0,l.Uk)(" Expiration：选择有效期限"),(0,l._)("br"),(0,l.Uk)(" Select scopes：因为要操作仓库，关于 repo 的全选，其他的随意。"),(0,l._)("br"),(0,l.Uk)(" 最后生成"),(0,l._)("code",null,"token"),(0,l.Uk)(",这个之后还要用到！！！！")],-1),Sn=(0,l._)("ol",{start:"2"},[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("回到项目仓库，进入"),(0,l._)("code",null,"Settings"),(0,l.Uk)(" --\x3e "),(0,l._)("code",null,"Secrets")]),(0,l._)("p",null,[(0,l._)("img",{src:u,alt:"设置secrets"})]),(0,l._)("p",null,[(0,l.Uk)("Name: ACCESS_TOKEN"),(0,l._)("br"),(0,l.Uk)(" Value: token值")])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("回到项目仓库，进入"),(0,l._)("code",null,"Actions"),(0,l.Uk)(" --\x3e "),(0,l._)("code",null,"New workflow"),(0,l.Uk)(" --\x3e "),(0,l._)("code",null,"Set up this workflow"),(0,l.Uk)(" 自定义名称 比如"),(0,l._)("code",null,"main.yml")])])],-1),Pn=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"# This is a basic workflow to help you get started with Actions"),(0,l.Uk)("\n\nname: Deploy Github Pages\n\n"),(0,l._)("span",{class:"token comment"},"# Controls when the workflow will run"),(0,l.Uk)("\non:\n  "),(0,l._)("span",{class:"token comment"},"# Triggers the workflow on push or pull request events but only for the master branch"),(0,l.Uk)("\n  push:\n    branches: "),(0,l._)("span",{class:"token punctuation"},"["),(0,l.Uk)(" master "),(0,l._)("span",{class:"token punctuation"},"]"),(0,l.Uk)("\n\n  "),(0,l._)("span",{class:"token comment"},"# Allows you to run this workflow manually from the Actions tab"),(0,l.Uk)("\n  workflow_dispatch:\n\n"),(0,l._)("span",{class:"token comment"},"# A workflow run is made up of one or more jobs that can run sequentially or in parallel"),(0,l.Uk)("\njobs:\n  "),(0,l._)("span",{class:"token comment"},'# This workflow contains a single job called "build"'),(0,l.Uk)("\n  build:\n    "),(0,l._)("span",{class:"token comment"},"# The type of runner that the job will run on"),(0,l.Uk)("\n    runs-on: ubuntu-latest\n\n    "),(0,l._)("span",{class:"token comment"},"# Steps represent a sequence of tasks that will be executed as part of the job"),(0,l.Uk)("\n    steps:\n      "),(0,l._)("span",{class:"token comment"},"# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it"),(0,l.Uk)("\n      - name: Checkout\n        uses: actions/checkout@v2\n        with: \n            persist-credentials: "),(0,l._)("span",{class:"token boolean"},"false"),(0,l.Uk)("\n\n      "),(0,l._)("span",{class:"token comment"},"# Runs a single command using the runners shell"),(0,l.Uk)("\n      - name: Build\n        run: "),(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"install"),(0,l.Uk)(),(0,l._)("span",{class:"token operator"},"&&"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" run docs:build\n\n      "),(0,l._)("span",{class:"token comment"},"# Runs a set of commands using the runners shell"),(0,l.Uk)("\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@releases/v3\n        with: \n          ACCESS_TOKEN: "),(0,l._)("span",{class:"token variable"},"${{ secrets.ACCESS_TOKEN }"),(0,l._)("span",{class:"token punctuation"},"}"),(0,l.Uk)("\n          BRANCH: gh-pages\n          FOLDER: docs/.vuepress/dist\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"16"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"17"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"18"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"19"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"20"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"21"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"22"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"23"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"24"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"25"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"26"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"27"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"28"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"29"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"30"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"31"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"32"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"33"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"34"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"35"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"36"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"37"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"38"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"39"),(0,l._)("br")])],-1),Tn=(0,l._)("p",null,"设置完成！",-1),Nn=(0,l._)("p",null,[(0,l._)("img",{src:c,alt:"设置Actions"})],-1),In=(0,l._)("p",null,"这样就配置好了~！",-1),zn=(0,l._)("p",null,"以后只管提交就可以了~！",-1),Xn={},Zn=(0,e(3744).Z)(Xn,[["render",function(n,s){const e=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,i,p,_,b,k,A,m,(0,l._)("p",null,[d,(0,l._)("a",g,[U,(0,l.Wm)(e)])]),h,f,v,y,C,x,j,E,S,P,T,N,I,z,X,Z,D,H,G,w,W,V,L,O,F,J,(0,l._)("p",null,[R,(0,l._)("a",Y,[B,(0,l.Wm)(e)])]),M,Q,q,(0,l._)("p",null,[K,$,nn,(0,l._)("a",sn,[en,(0,l.Wm)(e)]),ln,an]),tn,rn,un,cn,on,pn,_n,bn,kn,An,mn,dn,gn,Un,hn,fn,vn,yn,Cn,xn,jn,En,Sn,Pn,Tn,Nn,In,zn],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,l]of s)e[n]=l;return e}},5297:(n,s,e)=>{n.exports=e.p+"assets/img/hello_vuepress.8bce91a6.png"},8020:(n,s,e)=>{n.exports=e.p+"assets/img/set_token.7d9879df.png"},1023:n=>{n.exports="data:image/png;base64,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"},4382:(n,s,e)=>{n.exports=e.p+"assets/img/setting_pages.29db6a50.png"},2362:(n,s,e)=>{n.exports=e.p+"assets/img/setting_secrets.a2123506.png"}}]);