const express = require("express");
const db = require("./models/config");
const route = require('./routes');

const app = express();
const port = 3001;
db.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
