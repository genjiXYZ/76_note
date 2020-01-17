const navConfig = require('../../config/nav')

const pluginConf = require('../../config/pluginConfig')



module.exports = {
    base: '/76_note/',
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
        repo: 'genjiXYZ', //github
        docsDir: 'docs', ///仓库文档目录分支
        lastUpdated: 'Last Updated', //更新时间
        editLinks: true,
        editLinkText: '编辑此页',
        nav: navConfig, /////导航栏
        // sidebar: 'auto' //   自动生成侧边栏
        displayAllHeaders: true //显示所有侧边栏
    }
}