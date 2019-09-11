const path = require('path')

module.exports = {
  base:'/my-blog/',
  title: 'FED',
  description: 'Death is our final destination. enjoy the journey!',
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
        title: 'vue-components',
        collapsable: false,
        children: [
          '/views/'
        ]
      },
      {
        title: '知识点',
        collapsable: true,
        children: [
          'views/technology/toolFun.md',
          'views/technology/reactBasis.md',
          'views/technology/reduxBasis.md',
          'views/technology/reactPro.md',
          'views/technology/img.md',
          'views/technology/typescript.md'
        ]
      },
      {
        title: '笔记',
        collapsable: true,
        children: [
          'views/article/vuepress.md',
          'views/article/jenkins.md',
          'views/article/wepy.md',
          'views/article/tools.md'
        ]
      },
      {
        title: '实战项目',
        collapsable: true,
        children: [
          'views/other/ReactMusic.md'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('../../docs'),
        'static': path.resolve('@/.vuepress/public/static')
      }
    }
  },
  plugins: [
    "vuepress-plugin-cat",
  ]
}
