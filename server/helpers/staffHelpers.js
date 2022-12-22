const Staff = require("../model/staffModel");

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
        password: hashedPassword,
      });
      resolve(createdStaff);
    } catch (error) {
      reject(error);
    }
  });
};

// Update staff
const updateOneStaff = (updatedStaff, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newStaff = Staff.findByIdAndUpdate(
        { _id: id },
        { ...updatedStaff }
      );
      resolve(newStaff);
    } catch (error) {
      reject(error);
    }
  });
};

// Delete staff
const deleteOneStaff = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deletedStaff = Staff.findByIdAndDelete({ _id: id });
      resolve(deletedStaff);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllStaffs,
  findStaff,
  createStaff,
  updateOneStaff,
  deleteOneStaff,
};
