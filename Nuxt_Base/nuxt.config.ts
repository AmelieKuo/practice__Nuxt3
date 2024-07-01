// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineNuxtConfig(() => {

  console.log('====================模式與環境====================');
  console.log('env：', process.env.NUXT_MODE);
  console.log('baseUrl：', process.env.NUXT_PUBLIC_API_URL);
  console.log('apiUrl：', process.env.NUXT_PUBLIC_API_URL);
  console.log('=================================================');

  return{
  devtools: { enabled: true },
  css: ['~/assets/css/normalize.css'],
  
  // 控制元件 auto-import
  components: {
      global: true,
      dirs: ['~/components']
  },
  
  // 註冊可 auto-import 的資料夾
  imports: {
      dirs: ['stores'] // 預設有 composables 和 utils
  },
  
  modules: ['@pinia/nuxt'],
  
  app: {
   head: {
     viewport: "width=500, initial-scale=1",
     title: process.env.NUXT_TITLE,
     meta: [
         { "name": "description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
         { "property": "og:title", "content": "Nuxt3 高效入門全攻略" },
         { "property": "og:url", "content": "http://localhost:3000/" },
         { "property": "og:description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
     ],
     link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
      script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
        async: true,
      },
    ],
   }
  },

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__',
      }),
    ], 
    server: {
     proxy: process.env.NODE_ENV !== 'development' ? {} : {
       '/api/seo': { // 需要代理的路徑
         target: 'https://vue-lessons-api.vercel.app/', // 目標網址
         changeOrigin: true,
          rewrite: (path:string) => path.replace(/^\/api/, ''), // 重寫路徑
       },
       '/VsWeb/api': {
         target: 'https://www.vscinemas.com.tw/',
         changeOrigin: true,
       },
     },
   },
  },

  // devServer: {
  //   https: {
  //     key: './https/localhost+3-key.pem',
  //     cert: './https/localhost+3.pem'
  //   }
  // },
  
  // 放在.env
  runtimeConfig: {
   token: '',
   public: {
     baseUrl: process.env.BASE_URL,
     apiUrl: '',
   }
  },
  }
}
)