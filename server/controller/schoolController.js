const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { findSchool, registerSchool } = require("../helpers/schoolHelpers");

// @desc school signup
// @route POST /api/school/signup
// @access public
const signup = asyncHandler(async (req, res) => {
  const schoolData = req.body;

  const { schoolKey, name, place, head, contact, email, category, password } =
    schoolData;

  // Validating all fields
  if (
    !schoolKey ||
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
    const school = await findSchool(schoolKey);
    if (school) {
      throw new Error("School already exists");
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create School
    const newSchool = await registerSchool(schoolData, hashedPassword);
    res.status(201).json({ newSchool, token: createToken(newSchool._id) });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createToken = (schoolId) => {
  return jwt.sign({schoolId}, process.env.SECRET, { expiresIn: "30d" });
};

module.exports = {
  signup,
};
