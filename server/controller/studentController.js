const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { findOneStudent, createStudent } = require("../helpers/studentHelpers");
const { transporter, mailOptions } = require("../config/nodemailer");

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
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json(newStudent);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  addStudent,
};
