const express = require('express');
const database = require('./config/database'); // Connexion à la base de données
const clientRoutes = require('./routes/clientRoutes');
const paimentRoutes = require('./routes/paimentRoutes');
const reservationRoute = require('./routes/reservationRoute');
const Salle = require('./models/Salles'); // Importation correcte du modèle Salle
const Reservation = require('./models/reservation'); // Assurez-vous d'importer également Reservation

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Définir les routes
app.use('/api', clientRoutes);
app.use('/api', paimentRoutes);
app.use('/api', reservationRoute);

// Test de la connexion à la base de données
database.authenticate()
  .then(() => console.log('Connexion à la base de données réussie.'))
  .catch(err => console.error('Erreur de connexion :', err));

// Synchronisation avec la base de données
database.sync({ force: false }) // `force: false` pour ne pas écraser les tables existantes
  .then(() => {
    console.log('Base de données synchronisée.');
    // Vous pouvez également vérifier si les relations sont correctement définies ici
    // Exemple : Tester la relation entre Reservation et Salle
    Salle.hasMany(Reservation, { foreignKey: 'salleId' });
    Reservation.belongsTo(Salle, { foreignKey: 'salleId' });
  })
  .catch(err => console.error('Erreur de synchronisation :', err));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
