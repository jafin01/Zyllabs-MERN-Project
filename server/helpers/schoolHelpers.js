const School = require("../model/schoolModel");
const Staffs = require('../model/staffModel');

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
  return new Promise(async(resolve, reject) => {
    try{
      const staffs = await Staffs.find({ schoolName })
      resolve(staffs);
    }catch(error) {
      reject(error);
    }
  })
}

module.exports = {
  findSchool,
  registerSchool,
  getAllStaffs,
};
