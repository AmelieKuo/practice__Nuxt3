<script lang="ts" setup>
defineProps({
  name: { type: String, default: "按鈕" },
});

const emit = defineEmits(["update:handleClick"]);

/**
 * @func 切換頁面時傳出當前頁數值的方法
 */
function handleClick() {
  emit("update:handleClick");
}
</script>

<template>
  <button type="button" @click="handleClick">{{ name }}</button>
</template>

<style scoped>
button {
  max-width: 150px;
  border: 2px solid palevioletred;
  padding: 5px 8px;
  border-radius: 10px;
  color: rgb(172, 23, 73);
  background: rgb(255, 172, 172);
}
</style>
