const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectToDB = async (listen) => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `mongoDB connected to ${connect.connection.host}`.cyan.underline
    );
    listen();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDB;
