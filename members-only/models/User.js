const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required,
  },
  firstName: {
    type: String,
    required,
  },
  lastName: {
    type: String,
    required,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
