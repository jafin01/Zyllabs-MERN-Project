const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  admnNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  school: {
    type: ObjectId,
    required: true,
  },
  class: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  div: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  blockStatus: {
    type: Boolean,
    default: false,
    required: false,
  },
  password : {
    type : String,
    required : false
  }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
