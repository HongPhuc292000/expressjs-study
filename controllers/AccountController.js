const Account = require("../models/Account");

class AccountController {
  register(req, res, next) {
    const { username, password } = req.body;
    Account.findOne({
      username,
    })
      .then((account) => {
        if (!!account) {
          res.status(500).json("User Exist Error!");
        } else {
          return Account.create({
            username,
            password,
          });
        }
      })
      .then((account) => {
        res.json("Create Success!");
      })
      .catch((error) => res.status(500).json("Create Failure!"));
  }
}

module.exports = new AccountController();
