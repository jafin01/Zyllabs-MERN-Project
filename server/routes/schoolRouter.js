const express = require("express");
const { signup, login, getStaffs } = require("../controller/schoolController");

const router = express.Router();

router.post("/signup", signup);

router.post('/login', login);

router.get('/staffs', getStaffs);

// router.post('/staffs/add-staff', addStaff);

module.exports = router;
