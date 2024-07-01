<script setup>
const listData = ref([]);

async function getList() {
  const resp = await $fetch("/VsWeb/api/GetLstDicCinema");

  listData.value = resp;
}

onMounted(() => {
  getList();
});
</script>

<template>
  <div class="vscinemas">
    <h1>Page: Vscinemas</h1>
    <ul>
      <li v-for="item in listData" :key="item.strValue">
        {{ item.strText }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vscinemas {
  ul {
    margin: 0 auto;
    width: 40%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li {
      width: 40%;
      color: black;
      text-align: left;
      padding-bottom: 5px;
      padding-right: 20px;
    }
  }
}
</style>
