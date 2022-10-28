const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountShema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("accounts", AccountShema);
