const express = require("express");
const { color } = require("colors");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "./env/.env" });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/router"));

app.listen(3000, () => {
  console.log(`SERVER ONLINE PORT : ${3000} `.bgBlack);
});
