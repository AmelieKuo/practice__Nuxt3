import { defineStore } from "pinia";

export const useVoteStore = defineStore("vote",()=> {

  const voteCounts = ref({
    vue:1,
    react: 0,
    angular: 0
  })
  
  function addVote(framework){
    switch (framework) {
      case 'vue':
        voteCounts.value.vue++
        break;
      case 'react':
        voteCounts.value.react++
        break;
      case 'angular':
        voteCounts.value.angular++
        break;
      default:
        console.log(`找不到 ${framework}.`);
    }
  }

  const voteData = ref({})

  function setVoteData(data){
    voteData.value = data
  }

  const isFetch = ref(false)

  async function addVoteData(dataName){
    isFetch.value = true
    try{
      const resp = await $fetch("https://vue-lessons-api.vercel.app/vote/add",{
        method:'POST',
        body:{ type:dataName }
      });
      setVoteData(resp)
    }catch(error){
      alert('發生錯誤')
    }finally{
      isFetch.value = false
    }
  }

  
  return{
    addVote,
    voteCounts,
    voteData,
    setVoteData,
    addVoteData,
    isFetch
  }
});
