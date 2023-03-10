const express = require("express");
const { signup, login } = require("../controller/schoolController");
const {
  addStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} = require("../controller/studentController");
const {
  getStaffs,
  addStaff,
  updateStaff,
  deleteStaff,
} = require("../controller/staffController");
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

router.get('/students', protectSchool, getStudents);

router.post("/students/add-student", protectSchool, addStudent);

router
  .route('/students/:id')
  .patch(protectSchool, updateStudent)
  .delete(protectSchool, deleteStudent);

module.exports = router;
