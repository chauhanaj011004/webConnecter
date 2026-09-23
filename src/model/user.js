const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required:true,
  },
  password: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
