const express = require("express");
const { staffLogin } = require("../controller/staffController");

const router = express.Router();

router.post("/login", staffLogin);

module.exports = router;
