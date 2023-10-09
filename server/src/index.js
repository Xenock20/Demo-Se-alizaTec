const express = require("express");
const { color } = require("colors");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./.env" });
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use("/", require("./routers/router"));

app.listen(PORT, () => {
  console.log(`SERVER ONLINE PORT : ${PORT} `.bgBlack);
});
