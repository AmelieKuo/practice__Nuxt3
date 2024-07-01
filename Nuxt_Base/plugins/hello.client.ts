export default defineNuxtPlugin((nuxtApp) => {
  return{
    provide:{
      hello:(msg: string) => `歡迎 ${msg}`
    }
  }
})
