const pluginConf = require('../../config/pluginConf');
const navConf = require('../../config/navConf');
const sidebarConf = require('../../config/sidebarConf/index');
module.exports = {
    title: '张雨凡的个人博客',
    description: '前端菜鸟的成长之路',
    locales: {
      '/': {
        lang: 'zh-CN',
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon32x32.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: pluginConf,
    base: "/VuePressBlog/",
    themeConfig: {
      lastUpdated: '上次更新',
      repo: 'ynzy/VuePressBlog',
      // repoLabel: '查看源码',
      editLinks: true,
      editLinkText: '编辑文档',
      docsDir: 'docs',
      serviceWorker: {
        updatePopup: {
           message: "内容已更新",
           buttonText: "刷新"
        }
      },
      nav: navConf,
      sidebar: sidebarConf,
      sidebarDepth: 2,
      displayAllHeaders: true
    }
  }