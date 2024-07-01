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
    <h1>Page: Svg</h1>
    <IconsSvgIcon
      name="icon-community"
      class="icons__style"
      color="#992929"
    ></IconsSvgIcon>
    <IconsSvgIcon name="icon-documentation"></IconsSvgIcon>
  </div>
</template>

<style lang="scss" scoped>
.icons__style {
  width: 400px;
  height: 400px;
}
</style>
