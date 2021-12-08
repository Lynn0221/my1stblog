module.exports = {
  base: "/my1stblog/",
  lang: "zh-CN",
  title: "Lynn's Blog",
  description: "This is my first blog!",
  head: [['link', { rel: 'icon', href: '/my1stblog/favicon.ico' }]],
  themeConfig: {
    logo: '/image/koala.png',
    navbar: [
      { text: '首页', link: "/" },
      { text: 'Vue', link: "/guide/vue/" },
      { text: 'JS', link: "/guide/javascript/" },
      { text: 'Others', link: "/guide/other/" },
      { text: "Github", link: "https://github.com/Lynn0221/my1stblog" }
    ],
    sidebarDepth: 1,
    sidebar: {
      "/guide/vue/": [
        {
          text: "vue",
          children: [
            "README.md",
            "Vuepress搭建个人博客.md"
          ]
        }
      ],
      "/guide/javascript/": [
        {
          text: "javascript",
          children: [
            "README.md",
            "防抖和节流.md",
            "EventLoop机制.md",
          ]
        }
      ],
      "/guide/others/": [
        {
          text: "杂谈",
          children: [
            "README.md",
            "Git常用操作.md",
          ]
        }
      ],
    }
  },
  plugins: [
    [
      "@vuepress/plugin-search",
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-ESN23TFKGL',
      },
    ]
  ]
}