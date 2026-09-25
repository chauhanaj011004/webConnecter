const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    uppercase: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    lowercase:true,
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
