const nodemailer = require("nodemailer");

const sendEmail = async (email, typeOfLetter) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.googlemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'eatngo20202021@gmail.com',
      pass: 'eatNgo2020_2021'
    }
  });
  let info = await transporter.sendMail({
    from: '"eatn go" <eatngo20202021@gmail.com>',
    to: `${email}`,
    subject: "Confirmation ✔",
    html: typeOfLetter
  });

  console.log("Message sent: %s", info.messageId);
  return
}

module.exports = sendEmail;

