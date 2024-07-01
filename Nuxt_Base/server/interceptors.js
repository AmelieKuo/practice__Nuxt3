export default defineEventHandler(async(event) => {
const { data } = await useFetch("/api/auth/user_info", {
 onRequest({ request, options }) {
   // 設置 request headers
   options.headers = options.headers || {};
   options.headers.authorization = `Bearer token`;
 },
 onRequestError({ request, options, error }) {
   // 處理 request 錯誤
 },
 onResponse({ request, response, options }) {
   // 處理回傳資料
   return response._data;
 },
 onResponseError({ request, response, options }) {
   // 處理 response 錯誤
 },
});

// /** @const 六角學院 Token */
// const AUTH_TOKEN = 'FCe1QhjCRfOAt7La4Xtco4NBPyqeQMQoc1oDgqv18PY21YWGHHEWZt4u7Tj7';
// // const AUTH_TOKEN = 'FCe1QhjC';

// /** @const 六角學院 Api 實例 */
// const f2eAxios = axios.create({
//   baseURL: 'https://challenge.thef2e.com/api/',
//   headers: {
//     Accept: 'application/json',
//     Authorization: `Bearer ${AUTH_TOKEN}`,
//   },
// });

return
});