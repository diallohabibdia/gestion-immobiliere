const Client = require('../models/Client');  // Importation du modèle Client
const { ValidationError } = require('sequelize');  // Importation de l'erreur de validation de Sequelize

// Fonction pour créer un client
exports.createClient = async (req, res) => {
  try {
    // Vérification des données requises
    if (!req.body.nom || !req.body.prenom || !req.body.email || !req.body.identification) {
      return res.status(400).json({ error: 'Nom, prénom, email et identification sont obligatoires.' });
    }

    // Validation de l'email
    if (!/\S+@\S+\.\S+/.test(req.body.email)) {
      return res.status(400).json({ error: 'L\'email fourni n\'est pas valide.' });
    }

    // Création du client
    const client = await Client.create(req.body);

    // Réponse avec le client créé
    res.status(201).json(client);
  } catch (error) {
    // Gestion des erreurs spécifiques
    if (error instanceof ValidationError) {
      res.status(400).json({ error: 'Erreur de validation des données.' });
    } else {
      res.status(500).json({ error: 'Erreur serveur interne.' });
    }
  }
};

// Fonction pour récupérer tous les clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    
    // Vérification si aucun client n'est trouvé
    if (clients.length === 0) {
      return res.status(404).json({ message: 'Aucun client trouvé.' });
    }

    // Réponse avec la liste des clients
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur interne.' });
  }
};
