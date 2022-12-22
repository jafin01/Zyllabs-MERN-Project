const express = require("express");
const {
  signup,
  login,
  getStaffs,
  addStaff,
  updateStaff,
  deleteStaff,
} = require("../controller/schoolController");
const { protectSchool } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/staffs", protectSchool, getStaffs);

router.post("/staffs/add-staff", protectSchool, addStaff);

router
  .route("/staffs/:id")
  .patch(protectSchool, updateStaff)
  .delete(protectSchool, deleteStaff);

module.exports = router;
