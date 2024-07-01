<script lang="ts" setup>
const pageList = ref([
  {
    name: "index",
    link: "/",
  },
  {
    name: "news",
    link: "/news",
  },
  {
    name: "User",
    link: "/user",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Nuxt",
    link: "https://nuxt.com/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "Vote",
    link: "/vote",
  },
  {
    name: "Svg",
    link: "/svg",
  },
  {
    name: "Vscinemas",
    link: "/vscinemas",
  },
]);
</script>

<template>
  <div class="header">
    <span>Component: Header</span>
    <ul>
      <li v-for="item in pageList" :key="item.name">
        <NuxtLink
          :to="item.link"
          :external="item.link.includes('http') ? true : false"
          >{{ item.name }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px 50px;
  text-align: center;
  background: lightgray;
  color: black;

  ul {
    display: flex;
    gap: 20px;
    li {
      a {
        color: rgb(36, 131, 240);
        font-weight: bold;
        text-decoration: none;
      }

      a:hover {
        color: white;
      }
    }
  }
}
</style>
