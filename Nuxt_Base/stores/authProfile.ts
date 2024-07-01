import { defineStore } from "pinia";

export const useHomeStore = defineStore('home', () => {
  interface profileType {
    name: string;
    age: number;
  }

  const userProfile = ref<profileType>({
    name: '王小明',
    age: 17,
  })

  const addAge = () =>{
    userProfile.value.age++
  };

  return {
    userProfile,
    addAge
  }
})