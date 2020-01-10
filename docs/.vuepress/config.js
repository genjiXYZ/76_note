module.exports = {
base:'/76_note/',


    title: "76",

    description: '76note',///seo


    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        },
      },


      //icon
      head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
      ],










    themeConfig: {
        repo: 'genjiXYZ/76_note',//github

        lastUpdated: 'Last Updated',//更新时间
        editLinks: true,
        editLinkText: '编辑此页',
        nav: [{
             ///主标题
                text: 'Home',

                ///下拉栏
                items: [{
                        text: 'Chinese',
                        link: '/language/chinese/'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese/'
                    }
                ]

            },
            {
                text: 'Guide',
                link: '/guide/'
            },

            {
                text: 'External',
                link: 'https://google.com'
            },
        ],
        sidebar: 'auto'//   自动生成侧边栏
        // sidebar: [
        //     '/',
        //     '/nihao/',
        //     ['/js/', 'Explicit link text']
        //   ],


        







    }
}