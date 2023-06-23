const form = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupérer les valeurs des champs du formulaire
  const name = document.getElementById('name').value;
  const subject = document.getElementById('suject').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Code pour envoyer un e-mail avec fetch API
  // Utilisez les valeurs des champs du formulaire dans les options de l'e-mail
  const mailOptions = {
    from: "yakiwebpro@outlook.com",
    to: "yibad51686@bodeem.com",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\n\n${message}`
  };

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mailOptions)
  })
  .then(response => response.json())
  .then(data => {
    console.log('E-mail envoyé:', data);
    // Afficher la confirmation visuelle
    confirmationMessage.textContent = "E-mail envoyé avec succès.";
    // Nettoyer les champs du formulaire
    form.reset();
  })
  .catch(error => {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    // Afficher un message d'erreur
    confirmationMessage.textContent = "Une erreur s'est produite lors de l'envoi de l'e-mail.";
  });
});