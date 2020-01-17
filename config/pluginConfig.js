
const moment = require('moment');

module.exports = [ 
    '@vuepress/back-to-top',
    '@vuepress/google-analytics',
      {
        'ga': 'UA-156029647-1' // UA-00000000-0
      },
      '@vuepress/last-updated',//更新时间插件
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromat('YYYY-MM-DD h:mm:ss')
        }
      },
      "vuepress-plugin-auto-sidebar",
      // '@vuepress/active-header-links',//页面滚动时自动激活侧边栏链接的插件  官方自带 暂时不用

      //   {
      //     sidebarLinkSelector: '.sidebar-link',
      //     headerAnchorSelector: '.header-anchor'
      //   },
        '@vuepress/nprogress'//进度条插件
      
]

  


