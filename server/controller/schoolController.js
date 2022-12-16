const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  findSchool,
  registerSchool,
  getAllStaffs,
  createStaff,
  findStaff,
} = require("../helpers/schoolHelpers");

// @desc school signup
// @route POST /api/school/signup
// @access public
const signup = asyncHandler(async (req, res) => {
  const schoolData = req.body;

  const { schoolId, name, place, head, contact, email, category, password } =
    schoolData;

  // Validating all fields
  if (
    !schoolId ||
    !name ||
    !place ||
    !head ||
    !contact ||
    !email ||
    !category ||
    !password
  ) {
    throw new Error("Please Fill all fields");
  }

  // Check if school exists
  try {
    const school = await findSchool(email);
    if (school) {
      res.status(403);
      throw new Error("School already exists");
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create School
    const newSchool = await registerSchool(schoolData, hashedPassword);
    res.status(201).json({ newSchool, token: createToken(newSchool._id) });
  } catch (error) {
    const statusCode = res.statusCode ? res.statusCode : 400;
    res.status(statusCode);
    throw new Error(error.message);
  }
});

// @desc school login
// @route /api/school/login
// @access public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validating all fields
  if (!email || !password) {
    throw new Error("Please fill all fields");
  }

  // Check for school email
  try {
    const school = await findSchool(email);
    if (!school) {
      throw new Error("School not found");
    }

    // Check blockStatus
    if (school.blockStatus) {
      throw new Error("School Blocked by Admin");
    }

    // Authenticating school
    if (school && (await bcrypt.compare(password, school.password))) {
      res.status(200).json({ school, token: createToken(school._id) });
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

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

  const { name, email, contact, allocatedClasses, subjects, headOf, password } =
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
    res
      .status(200)
      .json({ createdStaff, token: createToken(createdStaff._id) });
  } catch (error) {
    const statusCode = res.statusCode ? res.statusCode : 400;
    res.status(statusCode);
    throw new Error(error.message);
  }
});

// Create Token jwt
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "30d" });
};

module.exports = {
  signup,
  login,
  getStaffs,
  addStaff,
};