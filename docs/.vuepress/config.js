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
          '/views/',
        ]
      },
      {
        title: '技术文档',
        collapsable: true,
        children: [
          'views/technology/',
        ]
      },
      {
        title: '随笔',
        collapsable: true,
        children: [
          'views/article/',
        ]
      },
      {
        title: '其他',
        collapsable: true,
        children: [
          'views/other/',
        ]
      }
    ],
    // sidebar: {
    //   '/views/technology/': [
    //     {
    //       title: '技术',
    //       collapsable: true,
    //       children: [
    //         ['', 'README']
    //       ]
    //     },
    //     {
    //       title: '开发',
    //       collapsable: true,
    //       children: [
    //         ['', 'README']
    //         ['one', 'one'],
    //         ['two', 'two']
    //       ]
    //     },
    //     {
    //       title: '前端',
    //       collapsable: true,
    //       children: [
    //         ['', 'README']
    //         ['three', 'three'],
    //       ]
    //     }
    //   ],
    //   '/views/essay/': [
    //     {
    //       title: '随笔',
    //       collapsable: false,
    //       children: []
    //     },
    //     ['', 'README']
    //   ],
    //   '/views/other/': [
    //     {
    //       title: '其他',
    //       collapsable: false,
    //       children: []
    //     },
    //     ['', 'README']
    //   ],
    //   '/views/about/': [
    //     {
    //       title: '关于',
    //       collapsable: false,
    //       children: []
    //     },
    //     ['', '技术文档'],
    //     ['WebSetup', '搭建步骤'],
    //     ['MarkDown', 'Markdown介绍'],
    //     ['Question', '问题解决']
    //   ],
    //   '/': [
    //     '指南'
    //   ]
    // },
    sidebarDepth: 1
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
