import mongoose from "mongoose";

// user schema
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  birthday: {
    type: String,
  },
});

const user = mongoose.model("amelie-nuxt3-test", usersSchema, "users");

// user model
export default user;
