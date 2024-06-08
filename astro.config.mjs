import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeExternalLinks from 'rehype-external-links';
import rehypePresetMinify from 'rehype-preset-minify';
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel/serverless";
const rehypeExternalLinksConfig = [rehypeExternalLinks, {
  target: '_blank',
  rel: ['noopener', 'noreferrer']
}];


// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    rehypePlugins: [rehypeExternalLinksConfig, rehypePresetMinify]
  }), react(), markdoc()],
  markdown: {
    smartypants: true,
    rehypePlugins: [rehypeExternalLinksConfig],
    shikiConfig: {
      theme: 'one-dark-pro'
    }
  },
  site: 'https://0x00er.github.io',
  output: "server",
  adapter: vercel()

});
