const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  schoolId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  allocatedClasses: [String],
  subjects: [String],
  headOf: {
    type: String,
    required: false,
  },
  blockStatus: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Staffs", staffSchema);
