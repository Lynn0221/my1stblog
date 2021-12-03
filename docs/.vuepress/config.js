module.exports = {
  base: "/my1stblog/",
  lang: "zh-CN",
  title: "Lynn's Blog",
  description: "This is my first blog!",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/image/koala.png',
    navbar: [
      { text: '首页', link: "/" },
      { text: 'HTML', link: "/guide/html/" },
      { text: 'JS', link: "/guide/javascript/" },
      { text: "Github", link: "https://github.com/Lynn0221/my1stblog" }
    ],
    sidebarDepth: 1,
    sidebar: {
      "/guide/html/": [
        {
          text: "html",
          children: [
            "README.md",
            "html基础知识.md"
          ]
        }
      ],
      "/guide/javascript/": [
        {
          text: "javascript",
          children: [
            "README.md",
            "防抖和节流.md"

          ]
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/plugin-search",
    ]
  ]
}