const School = require("../model/schoolModel");
const Staff = require("../model/staffModel");

// Find one school
const findSchool = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const school = await School.findOne({ email });
      resolve(school);
    } catch (error) {
      reject(error);
    }
  });
};

// Register school
const registerSchool = (schoolData, hashedPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const school = await School.create({
        ...schoolData,
        password: hashedPassword,
      });
      resolve(school);
    } catch (error) {
      reject(error);
    }
  });
};

// Get details of all staffs
const getAllStaffs = (schoolName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staffs = await Staff.find({ schoolName });
      resolve(staffs);
    } catch (error) {
      reject(error);
    }
  });
};

// Find one staff
const findStaff = (schoolId, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = Staff.findOne({ schoolId, email });
      resolve(staff);
    } catch (error) {
      reject(error);
    }
  });
};

// Create staff
const createStaff = (schoolId, newStaff, hashedPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdStaff = await Staff.create({
        schoolId,
        ...newStaff,
        hashedPassword,
      });
      resolve(createdStaff);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  findSchool,
  registerSchool,
  getAllStaffs,
  findStaff,
  createStaff,
};
