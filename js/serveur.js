const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "yakiwebpro@outlook.com",
    pass: "Trappes78",
  },
});

app.post('/send-email', (req, res) => {
  const mailOptions = req.body;

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
      res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.' });
    } else {
      console.log("E-mail envoyé :", info.response);
      res.json({ message: 'E-mail envoyé avec succès.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});