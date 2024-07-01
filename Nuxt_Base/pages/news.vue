<script setup>
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about");
useServerSeoMeta({
  title: () => `News ${res.data.value.title} - Nuxt3`,
  ogTitle: () => `News ${res.data.value.title} - Nuxt3`,
  description: () => `News ${res.data.value.description} - Nuxt3`,
  ogDescription: () => `News ${res.data.value.description} - Nuxt3`,
});

useHead({
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
      tagPosition: "bodyClose",
    },
  ],
});

const goodsList = ref([
  "王小明",
  "王大明",
  "王小美",
  "林小美",
  "林花生",
  "查理布朗",
  "布朗尼",
  "查理",
]);
const keywords = ref(""); //input框綁定的關鍵字
const result = ref([]); //搜尋結果
const data = ref([]); //即時的搜尋的數據
const isShow = ref(false); //判斷即時的資料是否要顯示 預設是不顯示
const searchHistory = ref([]); //搜尋記錄

//搜尋的方法
function search() {
  // 每次搜尋前 把之前的資料清空
  result.value = [];
  // 每次輸入的時候，讓他顯示出來
  isShow.value = true;
  // 遍歷拿到item，判斷值是否跟input框相似，一樣就加到result數組中
  goodsList.value.map((item, index) => {
    if (item.includes(keywords.value)) {
      result.value.push(item);
    }
  });
  // 在儲存資料之前 如果歷史記錄中有的話，就不讓新增 ！取反
  if (!searchHistory.value.includes(keywords.value)) {
    // 搜尋記錄會加入那些的input框的關鍵字
    searchHistory.value.push(keywords.value);
  }
}

// 即時的搜尋的數據 根據傳的參數，拿到event的對象
function getData(event) {
  // 監聽event的事件 當鍵盤碼是13的話，就讓即時的清單隱藏
  if (event.keyCode == 13) {
    isShow.value = false;
    return;
  }
  // 每次搜尋前 把之前的資料清空
  data.value = [];
  // 當他按下回車的時候也沒有，即，不會顯示即時更新的一部分
  isShow.value = true;
  goodsList.value.map((item, index) => {
    if (item.includes(keywords.value)) {
      data.value.push(item);
    }
  });
}

function hiddenData() {
  isShow.value = false;
}

// kw就是傳過來的值item，意思是點選歷史記錄的詞，會重新回到input輸入框
function ressetSearch(kw) {
  keywords.vlaue = kw;
}
</script>

<template>
  <div>Page: news</div>
  <div id="home_page">
    <!-- input框 綁定關鍵字 滑鼠按下回車鍵搜尋 鍵盤抬起執行即時搜尋 失焦的時候，不會展示資料列表-->
    <input
      type="text"
      v-model="keywords"
      @keydown.enter="search"
      @input="getData($event)"
      @blur="hiddenData"
    />

    <CommonButton name="搜尋" @update:handleClick="search"></CommonButton>
    <button @click="search">搜尋</button>

    <!-- 記錄搜尋記錄 點擊的時候回拿到資料值 -->
    搜尋紀錄：
    <span
      class="search-history"
      v-for="(item, index) in searchHistory"
      @click="ressetSearch(item)"
    >
      {{ item }} &nbsp;
    </span>

    <!--  即時的搜尋數據顯示列表-->
    <ul class="show_data" v-show="isShow">
      <li v-for="(item, index) in data" v-bind:key="index">{{ item }}</li>
    </ul>

    <!-- 當點選搜尋按鈕，和按下回車鍵的時候 ，會把搜尋出來的與input框中的字一致的數據展示出來 -->
    <ul>
      <li v-for="(item, index) in result" v-bind:key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
#home_page {
  margin: 50px 0;
}
.show_data {
  border: 1px solid #999;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 154px;
  padding: 10px 5px;
}
.search-history {
  color: #222;
  cursor: pointer;
}
.search-history:hover {
  color: red;
}
</style>
