const mongoose = require("mongoose");
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

const User = mongoose.model("USER", userSchema);
module.exports = User;
