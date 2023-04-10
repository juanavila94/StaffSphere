const sgMail = require("../../controllers/sendGridController/sendGridController");

const sendGridHandlerAuto = async (req, res) => {
  const { to } = req.body;

  const msg = {
    to,
    from: process.env.EMAIL_SENDGRID,
    subject: 'StaffSphere',
    text: 'Your account has been successfully registered in staffsphere, continue enjoying our service',
  };

  console.log(await sgMail.send(msg), 'confirmation');
  await sgMail.send(msg).then(() => {
    return res.status(200).send("The mail has been sent correctly!!")
  })
  .catch((error) => {
    return res
      .status(402)
      .json({ error: "The mail has not been sent correctly!!" });
  });
};

module.exports = sendGridHandlerAuto;