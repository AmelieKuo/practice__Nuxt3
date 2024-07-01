import userModel from "@/server/model/user.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { _id, phone, email } = body
  const oldData = await userModel.findOne({ _id });

  await userModel.updateOne(oldData, { phone, email })
  await oldData.save()

  return { success: true };
});
