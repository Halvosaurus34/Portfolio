const nodemailer = require("nodemailer");
require("dotenv").config();
// async..await is not allowed in global scope, must use a wrapper
const mail = async (name, email, message) => {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.email, // generated ethereal user
      pass: process.env.emailPass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "lhalvorson34@gmail.com", // sender address
    to: "lhalvorosn34@gmail.com", // list of receivers
    subject: "Portfolio Contact Message", // Subject line
    text: `Name: ${name}, email: ${email}, message: ${message}`, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
