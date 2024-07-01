// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
   strategy: 'no_prefix', // 不用改網址切換語系
   locales: [
     {
       code: 'zh-TW',
       file: 'zh-TW.json'
     },
     {
       code: 'en-US',
       file: 'en-US.json'
     },
    {
       code: 'ja-JP',
       file: 'ja-JP.json'
     },
   ],
   langDir: 'language',
   defaultLocale: 'zh-TW',
   detectBrowserLanguage: {
     useCookie: true,
     alwaysRedirect: true,
   }
  }
})
