<script lang="ts" setup>
import "virtual:svg-icons-register";
</script>

<template>
  <span>Layout: default</span>
  <div class="defaultLayout">
    <!-- <slot /> 預設插槽顯示內容 -->
    <LayoutHeader />
    <slot />
    <div class="page">
      <NuxtPage />
    </div>
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
span {
  width: 100%;
  color: rgb(100, 116, 77);
  font-weight: bold;
  padding-left: 10px;
}
.defaultLayout {
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  text-align: center;
  border: 2px solid rgb(100, 116, 77);
  background: rgb(246, 255, 235);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page {
  width: 100%;
  height: 100%;
}
</style>
