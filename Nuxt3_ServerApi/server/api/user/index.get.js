import userModel from "@/server/model/user.model";

export default defineEventHandler(async (event) => {
  const user = await userModel.find();
  return user;
});
