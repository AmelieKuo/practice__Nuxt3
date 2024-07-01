# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 環境建立
# https
"dev": "nuxt dev --host --dotenv .env.dev --open --https --ssl-cert ./https/localhost+3.pem --ssl-key ./https/localhost+3-key.pem",


  // nitro: {
  //   devProxy: {
  //     '/api/seo': { // 需要代理的路徑
  //       target: 'https://vue-lessons-api.vercel.app/', // 目標網址
  //       changeOrigin: true,
  //       rewrite: (path:string) => path.replace(/^\/api/, ''), // 重寫路徑
  //     },
  //     '/VsWeb/api': {
  //       target: 'https://www.vscinemas.com.tw/',
  //       changeOrigin: true,
  //     },
  //   }
  // },

  // devServer: {
  //   https: {
  //     key: './https/localhost+3-key.pem',
  //     cert: './https/localhost+3.pem'
  //   }
  // },

    // devProxy: {
  //   '/api/seo': { // 需要代理的路徑
  //       target: 'https://vue-lessons-api.vercel.app/v1', // 目標網址
  //       changeOrigin: true,
  //       rewrite: (path:string) => path.replace(/^\/api/, ''), // 重寫路徑
  //     },
  //     '/VsWeb/api': {
  //       target: 'https://www.vscinemas.com.tw/v1',
  //       changeOrigin: true,
  //     },
  // },
  // nitro: {
  //   /** Unable to view `ServerOptions` type, you need to manually install `@types/http-proxy` to get `ServerOptions` type support */
  //   devProxy: {
  //     '/api/seo': { // 需要代理的路徑
  //       target: 'https://vue-lessons-api.vercel.app/v1', // 目標網址
  //       changeOrigin: true,
  //       rewrite: (path:string) => path.replace(/^\/api/, ''), // 重寫路徑
  //     },
  //     '/VsWeb/api': {
  //       target: 'https://www.vscinemas.com.tw/v1',
  //       changeOrigin: true,
  //     },
  //   },
  // },