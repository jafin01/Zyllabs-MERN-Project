require("dotenv").config();
require('colors');
const express = require("express");
const connectToDB = require("./config/db");
const logger = require("./middleware/loggerMIddleware");

// App init 
const app = express();

// MIddleware
app.use(express.json);
app.use(logger);

// Connecting DB and listening to PORT
const PORT = process.env.PORT;

connectToDB(() => {
  app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
});

