const Student = require("../model/studentModel");

// Find one student
const findOneStudent = (school, admnNo) => {
  return new Promise (async (resolve, reject) => {
    try {
      const student = Student.findOne({school, admnNo})
      resolve(student)
    } catch(error) {
      reject(error);
    }
  })
};

// Create Student
const createStudent = (school, student, password) => {
  return new Promise (async (resolve, reject) => {
    try {
      const newStudent = await Student.create({
        school,
        ...student,
        password
      })
      resolve(newStudent);
    }catch(error) {
      reject(error);
    }
  })
}

module.exports = {
  findOneStudent,
  createStudent,
};
