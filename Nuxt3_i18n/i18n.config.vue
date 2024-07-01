export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
     {
       code: 'zh-TW',
       file: 'zh-TW.json'
     },
     {
       code: 'en-US',
       file: 'en-US.json'
     },
   ],
  langDir: 'language',
   defaultLocale: 'zh-TW',
   detectBrowserLanguage: {
     useCookie: true,
   }
}))