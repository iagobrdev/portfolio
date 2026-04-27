import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const gaId = (env.VITE_GA_MEASUREMENT_ID ?? process.env.VITE_GA_MEASUREMENT_ID)?.trim();

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-gtag',
        transformIndexHtml(html: string) {
          if (!gaId) return html;
          const block = `    <script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${JSON.stringify(gaId)});
              </script>
          `;
          return html.replace('</head>', `${block}\n  </head>`);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
