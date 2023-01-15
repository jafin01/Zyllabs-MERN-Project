const Student = require("../model/studentModel");

// Get all students in a school
const getAllStudents = (school) => {
  return new Promise(async (resolve, reject) => {
    try {
      const students = Student.find({ school }).select(['-password', '-school', '-blockStatus']);
      resolve(students);
    } catch (error) {
      reject(error);
    }
  })
}

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
const findStudentByEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const student = await Student.findOne({ email });
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

// Update a student
const updateOneStudent = (id, student) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        { _id: id },
        { ...student },
        { new: true }
      );
      resolve(updatedStudent);
    } catch (error) {
      reject(error);
    }
  })
}

// Delete a student
const deleteOneStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete({_id : id});
      resolve(deletedStudent)
    } catch(error) {
      reject(error);
    }
  })
}

module.exports = {
  getAllStudents,
  findOneStudent,
  findStudentByEmail,
  createStudent,
  updateOneStudent,
  deleteOneStudent,
};
