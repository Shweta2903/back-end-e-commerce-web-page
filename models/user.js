import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    maxlength: 30,
    trim: true,
  },
  lastname: {
    type: String,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
  },
  userinfo: {
    type: String,
    trim: true,
  },
  //Password
  password: {
    type: String,
    require: true,
    trim: true,
  },
  salt: String,
  //default role of all user is 0
  role: {
    type: Number,
    default: 0,
  },
  //default the purchase array is empty
  purchases: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model(
  "User",
  userSchema
);
