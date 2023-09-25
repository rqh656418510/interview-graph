import { defineUserConfig } from 'vuepress'
import { themeConfig } from './config/index'
import { recoTheme } from 'vuepress-theme-reco'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({

  // 基础配置
  base: '/graph/',
  debug: false,
  port: 8080,
  head: [
    ['meta', { name: 'application-name', content: 'Clay 的知识图谱' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Clay 的知识图谱' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }]
  ],

  // 多语言支持
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Clay 的知识图谱',
      description: 'Clay 的知识图谱。',
    }
  },

  // 主题配置
  theme: recoTheme(themeConfig),

  // 插件配置
  plugins: [
    // 图片缩放
    mediumZoomPlugin({
      delay: 500
    }),
    // 站点地图
    sitemapPlugin({
      excludeUrls: ['/404.html'],
      hostname: 'https://www.techgrow.cn',
    })
  ],

  // Markdown 配置
  markdown: {
    code: {
      lineNumbers: true
    }
  }

})
