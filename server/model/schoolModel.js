const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const schoolSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    head: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      validate: {
        validator: function (v) {
          return /d{10}/.test(v);
        },
        message: "{VALUE} is not a valid 10 digit number!",
      },
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    blockStatus: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.Model("SchoolData", schoolSchema);
