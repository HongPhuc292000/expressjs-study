const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/expressjs_study");
    console.log("connect success!!");
  } catch (error) {
    console.log("connect failure!!");
  }
}

module.exports = { connect };
