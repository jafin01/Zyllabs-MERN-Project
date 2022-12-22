const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schoolSchema = new Schema(
  {
    schoolId: {
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
      required: true,
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

const School = mongoose.model("SchoolData", schoolSchema);

module.exports = School
