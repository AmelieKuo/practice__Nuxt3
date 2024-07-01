<script lang="ts" setup>
useHead({
  title: "關於我們 About - Nuxt3 高效入門全攻略",
  meta: [
    { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
    { property: "og:url", content: "http://localhost:3000/about" },
    { property: "og:image", content: "http://localhost:3000/share.jpg" },
    { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
    {
      property: "og:description",
      content: "關於我們 About - 最棒的Nuxt3的線上課程",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});

const aboutId = ref(new Date().valueOf());

const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log(aboutId.value);
  console.log(route);
  console.log(router);
});
</script>

<template>
  <div>Page: about</div>
  <div class="menu">
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/about/welcome">About/Welcome</NuxtLink>
    <NuxtLink to="/about/hunter">About/Hunter</NuxtLink>
    <NuxtLink :to="`/about/${aboutId}`">文章內頁</NuxtLink>
  </div>
  <NuxtPage />
</template>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 30px 0px;
}
</style>
