const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: "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",
  },
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const emailFrom = "fede1@test.com";
  const message = "Test message from the app!";
  const mailOptions = {
    from: "Federico Vélez <federico.velezferro@gmail.com>",
    to: "federico.velezferro@gmail.com",
    subject: "Portfolio Contact Form",
    html: `${message} <br><br> From ${emailFrom}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(
        `ERROR: (email) ${emailFrom} --- (message) ${message} --- (error) ${error.toString()}`
      );
      response.send(error.toString());
    }
    response.send("Your message was submitted succesfully!");
  });
});
