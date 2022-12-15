require("dotenv").config();
require('colors');
const express = require("express");
const connectToDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const logger = require("./middleware/loggerMiddleware");

// App init 
const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/school', require('./routes/schoolRouter'));

// Error Handling
app.use(errorHandler)

// Connecting DB and listening to PORT
const PORT = process.env.PORT;

connectToDB(() => {
  app.listen(PORT, () => console.log(`listening to PORT ${PORT}`));
});

