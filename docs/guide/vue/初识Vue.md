# 初识Vue

### 安装
```sh
# 全局安装 vue
npm install -g @vue/cli

# 创建 myProject 项目
vue create [myProject]
```

### 命名规则
camelCase: videoExampleComponent  
* js函数 变量

PascalCase: VideoExampleComponent  
* JS类 组件文件
  
kebab-case: video-example-component
* HTML(HTML大小写不敏感) 组件名

### 模板插值
`{{ }}`

### 指令
v- 前缀的特殊特性
* v-bind
* v-on:click
* v-if
* v-show
>* `v-if` 和 `v-show`  
>`v-if` 真正的条件渲染，在切换过程中条件块内的事件监听器和子组件会被适当地被销毁和重建  
>`v-show` 地元素始终会被渲染并保留在 `DOM` 中，`v-show` 只是简单地切换元素的 `CSS` 属性 `display`
* v-for  
不推荐在同意元素上使用 v-if 和 v-for  
非要用，记住 v-for 的优先级高于 v-if
*ref
