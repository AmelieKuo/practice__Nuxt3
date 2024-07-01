<script setup>
const productsList = ref([]);

async function getProduct() {
  const res = await $fetch("https://fakestoreapi.com/products");
  productsList.value = res;
}

onMounted(() => {
  getProduct();
});
</script>

<template>
  <div>Page: Shop</div>
  <div id="store_page">
    <ul>
      <li v-for="(item, index) in productsList" :key="index">
        <div class="product__card">
          <div>
            <img :src="item.image" :alt="item.title" />
            <div class="price">{{ item.price }}</div>
          </div>
          <p class="title">{{ item.title }}</p>
          <p>{{ item.description }}</p>
          <NuxtLink :to="`/shop/${item.id}`">more</NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#store_page {
  width: 100%;
  height: 80%;
  overflow-y: auto;
  ul {
    width: 90%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    list-style-type: none;
    li {
      border: 1px solid lightgray;
      background: white;
      border-radius: 10px;
      .product__card {
        box-sizing: border-box;
        padding: 15px;
        max-width: 300px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          width: 80%;
          position: relative;
          img {
            width: 100%;
          }
          .price {
            width: 100px;
            position: absolute;
            right: 0px;
            bottom: 0px;
            background: rgb(0, 97, 0);
            color: white;
          }
        }
        p {
          text-align: left;
        }
        .title {
          font-weight: bold;
          font-size: 16px;
        }
        a {
          font-weight: bold;
          color: rgb(45, 45, 173);
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>
