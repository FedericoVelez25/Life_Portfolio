const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = requite("nodemailer");
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 887,
  secure: false,
  auth: {
    user: "username",
    pass: "password",
  },
});
