const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../js/contact'); // Assurez-vous d'importer l'instance de votre application Express depuis le fichier server.js

// Configuration de Chai pour utiliser chai-http
chai.use(chaiHttp);
const expect = chai.expect;

describe('Tests de l\'application', () => {
  it('devrait envoyer un message de succès après soumission du formulaire', (done) => {
    chai.request(app)
      .post('/contact')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Ceci est un message de test'
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Votre message a été envoyé avec succès !');
        done();
      });
  });
});