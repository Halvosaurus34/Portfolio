const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", (req, res) => {
  console.log("contact response...", req.body);
  mail(req.body.name, req.body.email, req.body.message);
  // Insert into table
});

const mail = async (name, email, message) => {
  // Generate test SMTP service account from ethereal.email
  console.log(process.env.email, process.env.emailPass);
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "levitester12@gmail.com",
      pass: "LeviTester13@",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "lhalvorson34@gmail.com", // sender address
    to: "lhalvorson34@gmail.com", // list of receivers
    subject: `Portfolio Contact Message from ${name}`, // Subject line
    text: `Name: ${name}, email: ${email}, message: ${message}`, // plain text body
    html: `<b>Name: ${name}</b><br/><b>Email: ${email}</b><br/><b>Message: ${message}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = router;
