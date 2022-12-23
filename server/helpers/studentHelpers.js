const Student = require("../model/studentModel");

// Find one student by admnNo and school _id
const findOneStudent = (school, admnNo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = Student.findOne({ school, admnNo });
      resolve(student);
    } catch (error) {
      reject(error);
    }
  });
};

// Find student by email and school _id
const findStudentByEmail = (school, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await Student.findOne({ school, email });
      resolve(student);
    } catch (error) {
      reject(error);
    }
  });
};

// Create Student
const createStudent = (school, student, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newStudent = await Student.create({
        school,
        ...student,
        password,
      });
      resolve(newStudent);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  findOneStudent,
  findStudentByEmail,
  createStudent,
};
