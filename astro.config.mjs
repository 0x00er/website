import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import vercel from '@astrojs/vercel'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePresetMinify from 'rehype-preset-minify'

const rehypeExternalLinksConfig = [
  rehypeExternalLinks,
  {
    target: '_blank',
    rel: ['noopener', 'noreferrer']
  }
]

export default defineConfig({
  integrations: [
    icon(),
    mdx({
      rehypePlugins: [rehypeExternalLinksConfig, rehypePresetMinify]
    }),
    react(),
    markdoc(),
    sitemap()
  ],

  markdown: {
    smartypants: true,
    rehypePlugins: [rehypeExternalLinksConfig],
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  },

  site: 'https://0x00er.vercel.app',
  output: 'server',
  adapter: vercel()
})