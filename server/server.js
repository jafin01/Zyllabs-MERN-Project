require("dotenv").config();
require("colors");
const express = require("express");
const connectToDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const logger = require("./middleware/loggerMiddleware");
const cors = require('cors');

// App init
const app = express();

// Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/school", require("./routes/schoolRouter"));
app.use("/api/staff", require("./routes/staffRouter"));
app.use("/api/student", require('./routes/studentRouter'))

// Error Handling
app.use(errorHandler);

// Connecting DB and listening to PORT
const PORT = process.env.PORT || 8080;

connectToDB(() => {
  app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
});
