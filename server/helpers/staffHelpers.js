const Staff = require("../model/staffModel");

// Get details of all staffs
const getAllStaffs = (school) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staffs = await Staff.find({ school });
      resolve(staffs);
    } catch (error) {
      reject(error);
    }
  });
};

// Find one staff
const findStaff = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = Staff.findOne({ email });
      resolve(staff);
    } catch (error) {
      reject(error);
    }
  });
};

// Create staff
const createStaff = (school, newStaff, hashedPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdStaff = await Staff.create({
        school,
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
const updateOneStaff = (id, updatedStaff) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newStaff = Staff.findByIdAndUpdate(
        { _id: id },
        { ...updatedStaff },
        { new: true }
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
