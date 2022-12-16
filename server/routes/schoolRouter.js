const express = require("express");
const {
  signup,
  login,
  getStaffs,
  addStaff,
} = require("../controller/schoolController");
const { protectSchool } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/staffs", protectSchool, getStaffs);

router.post("/staffs/add-staff", protectSchool, addStaff);

module.exports = router;
