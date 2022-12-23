const express = require("express");
const { studentLogin } = require("../controller/studentController");

const router = express.Router();

router.post("/login", studentLogin);

module.exports = router;
