<script setup>
const cookie = useCookie("mikeAuth");

const title = {
  success: "登入成功的首頁",
  fail: "未登入的首頁",
};
</script>

<template>
  <div id="home">
    <h1>{{cookie !== undefined ? title.success : title.fail }}</h1>
    <NuxtLink to="/login">前往登入頁</NuxtLink>
  </div>
</template>

<style scoped>
#home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home a {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #9aa582;
  border: 2px solid #657359;
  color: #f1e4db;
  margin-top: 20px;
  font-size: 22px;
  line-height: 40px;
  border-radius: 20px;
}
</style>
