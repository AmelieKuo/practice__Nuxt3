<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div>Page: about/{{ route.params.id }}</div>
</template>

<style scoped></style>
