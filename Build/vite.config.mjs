import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { viteSingleFile } from "vite-plugin-singlefile";
import fs from "fs";

// SVG inliner plugin for single-file builds
function inlineSvgFaviconPlugin(options) {
  return {
    name: "inline-svg-favicon",
    enforce: "post",
    transformIndexHtml(html) {
      if (!fs.existsSync(options.svg)) return html;
      let svgContent = fs.readFileSync(options.svg, "utf8");
      svgContent = svgContent
        .replace(/<\?xml[^>]*>\s*/g, "")
        .replace(/\s+/g, " ");
      const base64 = Buffer.from(svgContent).toString("base64");
      const faviconTag = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${base64}"/>\n`;
      return html.replace(/<head>(.*?)/, `<head>$1\n  ${faviconTag}`);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isSingleFile = env.SINGLE_FILE === "true";

  return {
    base: "./",
    plugins: [
      !isSingleFile &&
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['robots.txt'],
          manifest: {
            name: 'InfiniteScroll',
            short_name: 'InfiniteScroll',
            description: 'An infinite scrolling gradient with interactive controls',
            start_url: './',
            display: 'standalone',
            theme_color: '#f8b4c8',
            background_color: '#fce4ec',
            categories: ['entertainment', 'utilities'],
          },
          pwaAssets: {
            image: 'public/favicon.png',
            preset: 'minimal-2023',
            includeHtmlHeadLinks: true,
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,png,ico,json}'],
            runtimeCaching: [
              {
                urlPattern: /.*\.(js|css|html)$/,
                handler: 'NetworkFirst',
                options: { cacheName: 'app-shell' },
              },
              {
                urlPattern: /.*\.(png|ico|json)$/,
                handler: 'CacheFirst',
                options: { cacheName: 'assets' },
              },
            ],
          },
        }),
      isSingleFile && viteSingleFile(),
      isSingleFile && inlineSvgFaviconPlugin({ svg: "public/favicon.png" }),
    ].filter(Boolean),

    build: {
      sourcemap: !isSingleFile,
      outDir: "./dist",
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000,
    },
  };
});
