
const moment = require('moment');

module.exports = [ 
    '@vuepress/back-to-top',
    '@vuepress/google-analytics',
      {
        'ga': 'UA-156029647-1' // UA-00000000-0
      },
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromat('YYYY-MM-DD h:mm:ss')
        }
      },
      "vuepress-plugin-auto-sidebar",
      '@vuepress/active-header-links',
        {
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/nprogress'
      
]

  


