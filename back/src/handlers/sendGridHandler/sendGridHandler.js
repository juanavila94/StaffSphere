const sgMail = require("../../controllers/sendGridController/sendGridController");
require("dotenv").config();

const sendGridHandler = async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: process.env.EMAIL_SENDGRID,
    subject,
    text,
  };

  await sgMail
    .send(msg)
    .then(() => {
      return res.status(201).send("The mail has been sent correctly!!");
    })
    .catch((error) => {
      return res
        .status(402)
        .json({ error: "The mail has not been sent correctly!!" });
    });
};

module.exports = sendGridHandler;