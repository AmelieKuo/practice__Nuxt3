<script setup>
const { data: userList, refresh } = await useFetch("/api/user");

const userData = ref({
  name: "",
  email: "",
  birthday: "",
  phone: "",
});

const createUser = async () => {
  await $fetch("/api/user/create", {
    method: "POST",
    body: {
      name: userData.value.name,
      email: userData.value.email,
      birthday: userData.value.birthday,
      phone: userData.value.phone,
    },
  }),
    await refresh();
  alert("新增成功");
  resetForm();
};

const resetForm = () => {
  userData.value.name = "";
  userData.value.email = "";
  userData.value.birthday = "";
  userData.value.phone = "";
};

const parseData = () => {
  userList.value = userList.value.map((item) => {
    return {
      ...item,
      isEdit: false,
    };
  });
};

const handleEdit = (index) => {
  userList.value[index].isEdit = true;
};

const handleSave = async (index, user) => {
  await $fetch("/api/user/update", {
    method: "PUT",
    body: {
      ...user,
    },
  }),
    await refresh();
  alert("修改成功");
  userList.value[index].isEdit = false;
  resetForm();
};

const handleDel = async (id) => {
  await $fetch("/api/user/remove", {
    method: "DELETE",
    body: {
      _id: id,
    },
  }),
    await refresh();
  alert("刪除成功");
  resetForm();
};

onMounted(() => {
  parseData();
});

const isEdit = ref(true);
</script>

<template>
  <div class="app">
    <div class="todo_bar">
      <div class="input_box">
        <input
          v-model="userData.name"
          class="info"
          type="text"
          placeholder="名字"
        />
        <input
          v-model="userData.email"
          class="info"
          type="text"
          placeholder="信箱"
        />
        <input
          v-model="userData.birthday"
          class="info"
          type="text"
          placeholder="年齡"
        />
        <input
          v-model="userData.phone"
          class="info"
          type="text"
          placeholder="電話"
        />
      </div>
      <button
        class="create"
        @click="createUser"
      >新增</button>
    </div>

    <div class="todo">
      <div
        class="todo_item"
        v-for="(user,index) in userList"
        :key="user._id"
      >
        <div class="todo_name">
          <p>{{ user.name }}</p>
          <!-- <input
            v-if="user.isEdit"
            v-model="user.name"
            class="name_info"
            type="text"
            placeholder="名字"
          /> -->
          <input
            v-if="user.isEdit"
            v-model="user.phone"
            class="phone_info"
            type="text"
            placeholder="電話"
          />
          <input
            v-if="user.isEdit"
            v-model="user.email"
            class="email_info"
            type="text"
            placeholder="信箱"
          />
        </div>
        <div class="todo_update">
          <button
            v-if="!user.isEdit"
            class="put_btn"
            @click="handleEdit(index)"
          >編輯</button>
          <div v-else>
            <button
              class="put_btn"
              @click="handleSave(index,user)"
            >儲存</button>
            <button
              class="remove_btn"
              @click="handleDel(user._id)"
            >刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#__nuxt {
  width: 100vw;
  height: 100vh;
  background-color: #6cb7da;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.todo_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input.info {
  height: 40px;
  width: 250px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}
button.create {
  width: 200px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  background-color: #d77186;
  color: #fff;
  border: 2px solid #d75725;
  cursor: pointer;
  box-shadow: 0px 2px 0px rgb(180, 49, 75);
}
button.create:active {
  border: 2px solid #982b00;
  box-shadow: 0px 0px 0px rgb(152, 43, 0);
}
p {
  font-size: 26px;
  color: #fff;
  font-weight: bold;
}

.input_box {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 40px;
}

.todo {
  margin-top: 50px;
}
.todo_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.todo_name {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.todo_name > p {
  width: 100px;
}
input.name_info {
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}

input.phone_info {
  width: 120px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}
input.email_info {
  width: 200px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}

button.put_btn,
button.remove_btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
  margin: 0 2px;
}
.todo_update {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
