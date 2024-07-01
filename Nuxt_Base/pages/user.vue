<script setup>
// useSeoMeta({
//   title: "個人資料 User - Nuxt3 高效入門全攻略",
//   description: "個人資料 User - 最棒的Nuxt3的線上課程",
//   ogDescription: "個人資料 User - 最棒的Nuxt3的線上課程",
//   ogTitle: "個人資料 User - Nuxt3 高效入門全攻略",
//   ogImage: "",
//   twitterCard: "summary_large_image",
//   twitterSite: "",
//   twitterCreator: "",
// });

// definePageMeta({
//   middleware: (to, from) => {
//     console.log("user=>", { to, from });
//   },
// });

// const { data: userData } = await useFetch("/VueLessons/api/user");
// const { data: userData } = await $fetch("/api/seo/user");
const { data: userData } = await useFetch("/api/seo/user");

const title = computed(() => userData.value.title);
const description = computed(() => userData.value.description);

definePageMeta({
  middleware: ["auth"],
});

/**
  useFetch("/api/hello", {
  method: "GET",    // HTTP 請求的方法，GET(default)、POST 、 DELETE、PUT。
  query: {},        // 將參數透過？的方式帶到 URL 上
  params: {},       // 將參數帶到 URL 上
  body: {},         // Request body
  headers: {},      // Request headers
  baseURL: "/",     // 基本的 API URL 路徑
  });
*/

// GET 方法
const { data: postData } = await useFetch(
  "https://jsonplaceholder.typicode.com/comments",
  {
    query: { postId: 1 },
  }
);

// POST 方法
// const { data: postData } = await useFetch(
//   "https://jsonplaceholder.typicode.com/comments",
//   {
//     query: { postId: 1 },
//   }
// );
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </Head>
  <div>Page: user</div>
  <div class="userData">{{ userData }}</div>
  <div class="postData">{{ postData }}</div>
</template>

<style scoped>
.userData {
  border: 3px dashed indigo;
}
.postData {
  border: 3px dashed cyan;
}
</style>
