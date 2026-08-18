import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FalkMC Panel - Self-host Minecraft panel",
  description: "Self-host a Minecraft server with your friends, no terminal required",
  lang: "en-US",
  head: [
    ['link', { rel: 'icon', href: '/images/logo.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'FalkMC Panel - Self-host Minecraft with your friends' }],
    ['meta', { property: 'og:description', content: 'Self-host Minecraft with your friends, no terminal required.' }],
    ['meta', { property: 'og:image', content: 'https://falkmc.com/images/cover.png' }],
    ['meta', { property: 'og:url', content: 'https://falkmc.com' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://falkmc.com/images/cover.png' }],
  ],
  themeConfig: {
    siteTitle: "FalkMC",
    logo: {
      light: '/images/logo_light.png',
      dark: '/images/logo_dark.png'
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" }
      // GitHub and Discord links removed; they're available as icons via socialLinks below
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/docs/' },
            { text: 'Installation', link: '/docs/installation' },
            { text: 'First Server', link: '/docs/getting-started' }
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Server Management', link: '/docs/features/server-management' },
            { text: 'Console & Logs', link: '/docs/features/console' },
            { text: 'Backups', link: '/docs/features/backups' },
            { text: 'Networking', link: '/docs/features/networking' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'FAQ', link: '/docs/faq' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FalkMC' },
      { icon: 'discord', link: 'https://discord.gg/hUMUuFJfEK' }
    ],
    footer: {
      message: 'Not affiliated with Mojang or Microsoft.',
      copyright: '© 2026 FalkMC Panel'
    },
    appearance: 'dark'
  }
})
