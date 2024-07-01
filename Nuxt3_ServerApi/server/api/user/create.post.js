import userModel from "@/server/model/user.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone, birthday } = body;
  const people = new userModel({ name, email, phone, birthday });
  await people.save();

  return { success: true, body };
});
