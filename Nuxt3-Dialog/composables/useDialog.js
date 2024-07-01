const dialogRef = ref(null);

export const dialogData = reactive({
  title: "標題",
  content: "內文",
  confirm: {
    btnName: "確定",
    onComplete: () => {
      console.log("確認了喔");
    },
  },
  cancel: {
    btnName: "不確定",
    onComplete: () => {
      console.log("取消了喔");
    },
  },
});

export const useDialog = () => {
  const open = (dialogInfo) => {
    if (dialogInfo) {
      dialogData.title = dialogInfo.title ?? dialogData.title;
      dialogData.content = dialogInfo.content ?? dialogData.content;
      dialogData.confirm = dialogInfo.confirm ?? dialogData.confirm;
      dialogData.cancel = dialogInfo.cancel ?? dialogData.cancel;
    }

    dialogRef.value.showModal();
  };

  const close = (type) => {
    dialogData[type].onComplete();
    dialogRef.value.close();
  };

  onMounted(() => {
    dialogRef.value = document.querySelector("#dialog");
  });

  return { open, close };
};
