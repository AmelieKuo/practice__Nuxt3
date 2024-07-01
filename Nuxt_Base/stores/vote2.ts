import { defineStore } from "pinia";

export const useVote2Store = defineStore("vote",()=> {

  const count = ref<object>({
    vue: <number>(0),
    react: <number>(0),
    angular: <number>(0)
  })
  
  // const vueCount = ref<number>(0)
  // const reactCount = ref<number>(0)
  // const angularCount = ref<number>(0)

  function addVote(framework: string){
    count.value[framework]++
  }
  
  return{
    addVote,
    count
  }
});
