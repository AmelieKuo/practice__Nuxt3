import type { DirectiveBinding } from 'vue';
import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('timeformat',{
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      let time = ''
      if(binding.value.format !== undefined && binding.value.format !== ''){
        time = dayjs(binding.value.value).format(binding.value.format)
      }else{
        time = dayjs(binding.value).format('YYYY-MM-DD')
      }
      el.innerText = time;
    },
  })
})
