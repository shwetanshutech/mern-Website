const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    reuqired: true,
  },
  email: {
    type: String,
    reuqired: true,
  },
  phone: {
    type: Number,
    reuqired: true,
  },
  password: {
    type: String,
    reuqired: true,
  },
  cpassword: {
    type: String,
    reuqired: true,
  },
});

//we are hashing password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

const User = mongoose.model("USER", userSchema);
module.exports = User;
