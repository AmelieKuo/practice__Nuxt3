<script setup>
import { useLogingStore } from "@/stores/login";

const store = useLogingStore();
const oriAuth = useCookie("mikeAuth");

onMounted(() => {
  store.checkAuth();

  setInterval(() => {
    const nowAuth = useCookie("mikeAuth");
    if (nowAuth.value !== oriAuth.value?.token) {
      window.location.reload;
    }
  }, 100);
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  background-color: #f1e4db;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
