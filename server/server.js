require("dotenv").config();
require('colors');
const express = require("express");
const connectToDB = require("./config/db");

const app = express();

const PORT = process.env.PORT;

connectToDB(() => {
  app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
});

