const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: ObjectId,
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
  department: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
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
}, { timestamps: true });

const Staff = mongoose.model("Staffs", staffSchema);

module.exports = Staff;
