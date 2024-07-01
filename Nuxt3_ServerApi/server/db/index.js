import mongoose from "mongoose";

export default async (_nitroApp) => {
  try {
    mongoose.set("strictQuery", true); // 嚴格模式
    await mongoose.connect(
      "mongodb+srv://amelie:amelie0000@amelie-nuxt3-db.advdmck.mongodb.net/amelie-nuxt3-test",
    );
    console.log("連接 MongoDB");
  } catch (e) {
    console.error("錯誤");
    console.error("Error MongoDB =>", e);
  }
};
