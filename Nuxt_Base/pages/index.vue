<script lang="ts" setup>
const { count, addCount } = useAddCount();
const store = useHomeStore();
const { $hello } = useNuxtApp();

const currentDate = new Date().toISOString();
const selectedDate = ref<Date>(null);

async function fetchData() {
  const resp = await fetch("api/hello").then((res) => res.json());
  console.log(resp);
}

async function fetchNuxtData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  );
  console.log(resp);
}

onMounted(() => {
  selectedDate.value = new Date();
});

const config = useRuntimeConfig();
console.log(config.public);

if (process.server) {
  console.log("server token:", config.token);
}

const { data, refresh } = await useFetch(`${config.public.apiUrl}/api/banner`, {
  headers: {
    Authorization: `Bearer ${config.token}`,
  },
});
</script>

<template>
  <h1>Page：首頁</h1>
  <ul>
    <li>
      <CommonButton @click="fetchData" name="獲取資料" />
      <CommonButton @click="fetchNuxtData" name="Nuxt Api" />
      <CommonButton @click="refresh" name="Refresh" />
    </li>
  </ul>
  <div class="home">
    <div class="count">
      <CommonButton @click="addCount" />
      <span>{{ count }}</span>
    </div>
    <ul>
      <li v-for="(item, index) in store.userProfile" :key="index">
        {{ item }}
      </li>
    </ul>
    <ClientOnly>
      <div>{{ $hello("Andy") }}</div>
    </ClientOnly>
    <div
      v-timeformat="{ value: '2021-09-16T01:52:45.780Z', format: 'YYYY-MM-DD' }"
    ></div>

    <div v-timeformat="{ value: currentDate, format: 'YYYY/DD' }"></div>
    <div v-timeformat="'2021-09-16T01:52:45.780Z'"></div>

    <VDatePicker v-model="selectedDate" />
    <div>{{ selectedDate }}</div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  padding: 0px;
}
.home {
  max-width: 80%;
  justify-content: space-around;

  div {
    width: 100%;
    padding: 5px 0px;
  }

  .count {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  ul {
    text-align: left;
    margin-left: 30%;
  }
}
</style>
