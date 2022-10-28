const express = require("express");
const router1 = require("./apiRouter");
const db = require("./models/config");

const app = express();
const port = 3001;
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json("Home!");
});

app.use("/api/v1/", router1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
