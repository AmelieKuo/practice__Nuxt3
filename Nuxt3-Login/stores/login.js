import { defineStore } from "pinia";

export const useLogingStore = defineStore("login", () => {
  const cookie = useCookie("mikeAuth", {
    domain: ".nuxt3demo.com",
  });

  const router = useRouter();

  const error_message = ref({
    username: "",
    password: "",
  });

  const isLoading = ref(false);

  const handleLoading = () => (isLoading.value = !isLoading.value);

  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      // https://vue-lessons-api.vercel.app
      const res = await $fetch(
        "https://vue-lessons-api.vercel.app/auth/login",
        {
          method: "POST",
          body: { username, password },
        }
      );

      // save token
      cookie.value = { token: res.data.token };

      router.replace("/");
    } catch (error) {
      const { username } = error.response._data.error_message;
      error_message.value = {
        username,
        password: "password error",
      };
    } finally {
      isLoading.value = false;
    }
  };

  const route = useRoute();

  const checkAuth = async () => {
    // https://vue-lessons-api.vercel.app
    try {
      await $fetch("https://vue-lessons-api.vercel.app/testToken", {
        method: "POST",
        headers: {
          Authorization: cookie.value?.token,
        },
      });

      console.log("驗證成功");
    } catch (error) {
      const query = route.query
      cookie.value = null;
      if (route.path === "/login") return;
      alert("驗證失敗，前往登入頁");
      router.replace({ path: "/login", query });
    }
  };

  return {
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth,
    error_message,
  };
});
