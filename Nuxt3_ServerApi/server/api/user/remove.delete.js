import userModel from "@/server/model/user.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { _id } = body
  await userModel.deleteOne({ _id });

  return { success: true };
});
