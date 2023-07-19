const mongoose = require("mongoose");
const { Schema } = mongoose;
const { createHmac } = import("node:crypto");
const { v4: uuidv4 } = require("uuid");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
      required: true,
      unique: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    //Password
    secure_password: {
      type: String,
      // required: true,
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
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.secure_password =
      this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (password) {
    return (
      this.securePassword(password) ===
      this.secure_password
    );
  },

  securePassword: function (password) {
    if (!password) {
      return "";
    }
    try {
      return createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model(
  "User",
  userSchema
);
