const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  findOneStudent,
  createStudent,
  findStudentByEmail,
} = require("../helpers/studentHelpers");
const { transporter, mailOptions } = require("../config/nodemailer");
const { findSchoolBySchoolId } = require("../helpers/schoolHelpers");

// @desc Add a student
// @route POST /api/school/students/add-student
// @access PRIVATE
const addStudent = asyncHandler(async (req, res) => {
  const student = req.body;
  const school = req.school._id;

  try {
    // Check if student exists
    const ifStudent = await findOneStudent(school, student.admnNo);
    if (ifStudent) {
      res.status(400);
      throw new Error("Student Already exists");
    }

    // Create student password
    const dob = new Date(student.dob);
    const password = student.name.split(" ")[0] + "@" + dob.getFullYear();

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new Student
    const newStudent = await createStudent(school, student, hashedPassword);

    // Send Email
    mailOptions.from = req.school.email;
    mailOptions.to = student.email;
    mailOptions.subject = `Your login credentials for ${req.school.name}`;
    mailOptions.html = `<p>Hello ${student.name},</p>
    <p>
      You are now eligible for our service at your school. Your login credentials are as follows:
    </p>
    <p style="color: red">schoolId: ${req.school.schoolId}</p>
    <p style="color: red">username: ${student.email}</p>
    <p style="color: red">password: ${password}</p>
    <p>
      You can use these credentials to log in to your school's service at <a href="www.google.com">Zyllabs</a>.
    </p>
    <p>
      If you have any questions or need assistance, please don't hesitate to contact to ${req.school.name}.
    </p>
    <p>Best regards,</p>
    <p>School Head: ${req.school.head}</p>`;
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400);
        throw new Error(error.message);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json(newStudent);
  } catch (error) {
    throw new Error(error.message);
  }
});

// @desc student login
// @route POST /api/student/login
// @access Public
const studentLogin = asyncHandler(async (req, res) => {
  const { schoolId, email, password } = req.body;

  try {
    // check for school
    const school = await findSchoolBySchoolId(schoolId);
    if (!school) {
      res.status(400);
      throw new Error("School not found");
    }

    // Check for student email
    const student = await findStudentByEmail(school._id, email);
    if (!student) {
      res.status(400);
      throw new Error("Student not found");
    }

    // Authenticate student
    if (student && (await bcrypt.compare(password, student.password))) {
      res.status(200).json({ student, token: createToken(student._id) });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "30d" });
};

module.exports = {
  addStudent,
  studentLogin,
};
