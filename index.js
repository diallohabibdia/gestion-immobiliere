const express = require('express');  // Importation d'Express
const app = express();  // Création d'une instance d'Express

const port = process.env.PORT || 3000;  // Définition du port

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
