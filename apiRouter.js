const express = require("express");
const accountController = require("./controllers/AccountController");
const router1 = express.Router();

router1.get("/", (req, res) => {
  res.json("Hello World! 123");
});

router1.post("/register", accountController.register);

module.exports = router1;
