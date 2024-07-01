<script setup>
const route = useRoute();

const product = ref({});

async function getProduct() {
  const productId = route.params.product;
  const resp = await $fetch(`https://fakestoreapi.com/products/${productId}`);
  product.value = resp;
}

onMounted(() => {
  getProduct();
});
</script>

<template>
  <div>Shop: shop/{{ route.params.id }}</div>
  <div class="product">
    <div>{{ product.category }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
