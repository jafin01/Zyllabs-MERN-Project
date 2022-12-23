const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("bson");

const {
  getAllStaffs,
  createStaff,
  findStaff,
  updateOneStaff,
  deleteOneStaff,
} = require("../helpers/staffHelpers");
const { findSchoolById } = require("../helpers/schoolHelpers");

// @desc get all staff details
// @route GET /api/school/staffs
// @access private
const getStaffs = asyncHandler(async (req, res) => {
  try {
    const staffData = await getAllStaffs();
    if (!staffData.length) {
      throw new Error("No staffs found");
    }

    res.status(200).json(staffData);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc add a staff
// @route /api/school/add-staff
// @access private
const addStaff = asyncHandler(async (req, res) => {
  const newStaff = req.body;

  const { name, email, contact, allocatedClasses, subjects, password } =
    newStaff;

  // Validating fields
  if (
    !name ||
    !email ||
    !contact ||
    !allocatedClasses.length ||
    !subjects.length ||
    !password
  ) {
    throw new Error("Please Fill all fields");
  }

  // Check if staff exists
  try {
    const staff = await findStaff(req.school.schoolId, email);
    if (staff) {
      res.status(403);
      throw new Error("Staff already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create Staff
    const createdStaff = await createStaff(
      req.school.schoolId,
      newStaff,
      hashedPassword
    );

    res.status(200).json({ createdStaff });
  } catch (error) {
    const statusCode = res.statusCode ? res.statusCode : 400;
    res.status(statusCode);
    throw new Error(error.message);
  }
});

// @desc Update a staff
// @route PATCH /api/school/staffs/:id
// @access Private
const updateStaff = asyncHandler(async (req, res) => {
  const id = req.params.id;

  // Check if ObjectId is invalid
  if (!ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid ObjectId");
  }

  // Update staff
  try {
    const updatedStaff = await updateOneStaff(req.body, id);
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// @desc Delete a Staff
// @route DELETE /api/school/staffs/:id
// @access Private
const deleteStaff = asyncHandler(async (req, res) => {
  const id = req.params.id;

  // Check if ObjectId is invalid
  if (!ObjectId.isValid(id)) {
    throw new Error("ObjectId is invalid");
  }

  // Delete Staff
  try {
    const deletedStaff = await deleteOneStaff(id);
    res.status(200).json(deletedStaff);
  } catch (error) {
    throw new Error(error.message);
  }
});

// @desc staff login
// @route POST /api/staff/login
// @access Public
const staffLogin = asyncHandler(async (req, res) => {
  const { schoolId, email, password } = req.body;
  try {
    // check if school exists
    const school = await findSchoolById(schoolId);
    if (!school) {
      res.status(400);
      throw new Error("School not found");
    }

    // check for staff email
    const staff = await findStaff(schoolId, email);
    if (!staff) {
      res.status(400);
      throw new Error("Staff not found");
    }

    // check for blockStatus
    if (staff.blockStatus) {
      res.status(403);
      throw new Error("Staff blocked by school");
    }

    // Authenticating staff
    if (staff && bcrypt.compare(password, staff.password))
      res.status(200).json({ staff, token: createToken(staff._id) });
  } catch (error) {
    throw new Error(error.message);
  }
});

// Create Token jwt
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "30d" });
};

module.exports = {
  getStaffs,
  addStaff,
  updateStaff,
  deleteStaff,
  staffLogin,
};
