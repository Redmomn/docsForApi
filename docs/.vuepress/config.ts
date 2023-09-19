import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'api文档',
    description: 'Ciallo～(∠・ω< )⌒☆',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/images/www/宁宁.jpg' }]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true
            }
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: ''
            }
        ],
        [
            "@vuepress/plugin-docsearch",
            {

            }
        ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'Redmomn/docsForApi',
        docsRepo: 'Redmomn/docsForApi',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        navbar: [
            { text: '开始', link: '/guide/' },
            { text: '学校有关', children: [{text:'溢之泉api文档',link:'/school/溢之泉.md'}] }
        ],
        sidebar: "auto",
    },

})
