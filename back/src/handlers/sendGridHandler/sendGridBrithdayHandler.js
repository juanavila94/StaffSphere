const sgMail = require("../../controllers/sendGridController/sendGridController");

const sendGridBrithdayHandler = async(req, res) => {
    const { to } = req.body;

  const msg = {
    to,
    from: process.env.EMAIL_SENDGRID,
    subject: 'StaffSphere',
    text: 'Today, on this great day for you, we want to wish you the best in your life and we want to thank you for the great work you do for the company. Happy Birthday',
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

module.exports = sendGridBrithdayHandler;