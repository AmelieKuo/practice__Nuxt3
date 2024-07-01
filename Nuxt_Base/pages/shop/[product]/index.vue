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
  <div class="tab">
    <NuxtLink :to="`/shop/${route.params.product}/info`">Info</NuxtLink>
    <NuxtLink :to="`/shop/${route.params.product}/file`">Category</NuxtLink>
  </div>
  <div class="product">
    <div><img :src="product.image" :alt="product.title" /></div>
    <ul>
      <li>{{ product.title }}</li>
      <li>{{ product.price }}</li>
      <li>{{ product.description }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tab {
  display: flex;
  gap: 30px;
  justify-content: center;
  a {
    background: gold;
    border: 1px dashed greenyellow;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    padding: 5px 10px;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
}
.product {
  width: 100%;
  padding: 2% 10px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  div {
    max-width: 300px;
    img {
      width: 100%;
      display: block;
    }
  }
  ul {
    text-align: left;
    li {
      width: 100%;
    }
  }
}
</style>
