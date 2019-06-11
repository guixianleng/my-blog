const path = require('path')

module.exports = {
  base:'/my-blog/',
  title: `LenGxin Blog`,
  description: 'This is my blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '干货',
        items: [
          {
            text: '前端技术',
            link: '/views/technology/'
          },
          {
            text: '随笔',
            link: '/views/essay/'
          },
          {
            text: '其他',
            link: '/views/other/'
          }
        ]
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/guixianleng/my-blog/'
      }
    ],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/views/'
        ]
      },
      {
        title: '技术文档',
        collapsable: true,
        children: [
          'views/technology/'
        ]
      },
      {
        title: '随笔',
        collapsable: true,
        children: [
          'views/article/'
        ]
      },
      {
        title: '其他',
        collapsable: true,
        children: [
          'views/other/'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('../../docs'),
        'pages': path.resolve('@/pages')
      }
    }
  }
}
