<script setup>
const nuxtApp = useNuxtApp();
const isLoading = ref(false);
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>

<template>
  <div class="app">
    <div class="loading" v-show="isLoading">nuxtApp.Hook</div>
    <h1>App.vue</h1>
    <NuxtLayout name="default"> </NuxtLayout>

    <!-- 只能放在 app.vue 或 layout -->
    <!-- <NuxtLoadingIndicator
      color="#bc8f8f"
      :height="100"
      :duration="1000"
      :throttle="0"
    >
      <h1>Loading</h1>
    </NuxtLoadingIndicator> -->
  </div>
</template>

<style lang="scss" scoped>
.app {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 47px);
  background: rgba(254, 252, 255, 0.822);
  h1 {
    height: 47px;
    padding: 5px 5px;
    text-align: left;
    width: 100%;
    color: rgba(214, 131, 255, 0.822);
    font-weight: bold;
  }
}

.nuxt-loading-indicator {
  h1 {
    background: black;
    color: #bc8f8f;
  }
}

.loading {
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto auto;
  color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
}
</style>
