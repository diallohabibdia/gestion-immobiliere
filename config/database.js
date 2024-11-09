const { Sequelize } = require('sequelize');

// Configuration de la base de données
const sequelize = new Sequelize({
  dialect: 'mysql',         // Base de données MySQL
  host: 'localhost',        // Hôte de la base de données
  username: 'root',         // Nom d'utilisateur de la base
  password: '',             // Mot de passe de la base
  database: 'gestion_immobiliere',  // Nom de la base de données
});

// Test de la connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch((error) => {
    console.error('Impossible de se connecter à la base de données:', error);
  });

module.exports = sequelize;
