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
  <div>shop: shop/{{ route.params.product }}</div>
  <div class="product">
    <div>{{ product.price }}</div>
  </div>
</template>

<style scoped lang="scss">
</style>
