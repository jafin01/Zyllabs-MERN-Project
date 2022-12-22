const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const mailOptions = {
  from: "",
  to: "",
  subject: "",
  html: "",
};

module.exports = {
  transporter,
  mailOptions,
};
