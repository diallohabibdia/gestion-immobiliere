const express = require('express');
const app = express();
const clientRoutes = require('./routes/clientRoutes');  // Chemin vers vos routes

app.use(express.json());  // Pour analyser le corps de la requête en JSON

// Utilisation des routes de client
app.use('/api', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
