const navConfig = require('../../config/nav')

const pluginConf = require('../../config/pluginConfig')



module.exports = {
    // base: '/76_note/',
    title: "76",
    description: '76note', ///seo
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        },
    },
    //icon
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.png'
        }]
    ],


    plugins: pluginConf,


    themeConfig: {
        repo: 'genjiXYZ/76_note', //github 项目链接  影响 edit this page
        docsDir: 'docs', ///仓库文档目录分支
        lastUpdated: 'Last Updated', //更新时间
        editLinks: true,
        editLinkText: '提出你的建议 帮我完善此页',
        nav: navConfig, /////导航栏
        // sidebar: 'auto' //   自动生成侧边栏
        displayAllHeaders: false, //显示所有侧边栏
        activeHeaderLinks: true,
        // smoothScroll: true,
        sidebarDepth: 2,
    }


  
}