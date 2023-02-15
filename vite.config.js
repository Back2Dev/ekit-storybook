import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    extend: (config, { isClient }) => {
      if (isClient) {
        config.resolve.extensions.push('.js');
        config.module.rules.push({
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    modules: false,
                  }],
                  '@babel/preset-react',
                ],
              },
            },
          ],
        });
      }
    },
  },
})