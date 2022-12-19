let nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.SENDER_EMAIL_USER,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
  secure: true,
});
