<script setup>
const serUseVote = useVoteStore();
const { voteCounts, voteData, isFetch } = storeToRefs(serUseVote);
const {
  addVote: useAddVote,
  setVoteData: useSetVoteData,
  addVoteData: useAddData,
} = useVoteStore();

const voteList = [
  { id: "vue", name: "Vue" },
  { id: "react", name: "React" },
  { id: "angular", name: "Angular" },
];

function addVote(framework) {
  useAddVote(framework);
}

async function getList() {
  const resp = await $fetch("https://vue-lessons-api.vercel.app/vote/list");
  useSetVoteData(resp);
}

function addDataVote(name) {
  useAddData(name);
}

onMounted(() => {
  getList();
});
</script>

<template>
  <div class="vote">
    <h1>Page: vote</h1>
    <ul>
      <li v-for="item in voteList" :key="item.id">
        <div>
          <p>{{ item.name }}</p>
          <p>{{ voteCounts[item.id] }}</p>
          <button @click="addVote(item.id)">新增</button>
        </div>
      </li>
    </ul>
    <ul>
      <li v-for="vote in voteData" :key="vote.name">
        <div>
          <div class="img"><img :src="vote.path" alt="vote.name" /></div>
          <p>{{ vote.name }}</p>
          <button @click="addDataVote(vote.name)">
            {{ isFetch ? "投票中" : `投票數：${vote.count}` }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.vote {
  width: 90%;
  margin: 0 auto;
  ul {
    color: black;
    display: flex;
    list-style-type: none;
    width: 90%;
    gap: 10px;
    justify-content: center;
    li {
      width: 300px;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed forestgreen;
      border-radius: 8px;
      div {
        width: 100%;
        p {
          font-size: 20px;
          font-weight: bold;
        }
        .img {
          width: 100%;
          max-width: 100px;
          margin: 0 auto;
          img {
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
}
</style>
