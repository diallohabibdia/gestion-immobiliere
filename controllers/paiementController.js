const Paiement = require('../models/paiement');

// Créer un nouveau paiement
exports.createPaiement = async (req, res) => {
  try {
    const paiement = await Paiement.create(req.body);
    res.status(201).json(paiement);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du paiement.' });
  }
};

// Récupérer tous les paiements
exports.getPaiements = async (req, res) => {
  try {
    const paiements = await Paiement.findAll();
    res.status(200).json(paiements);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des paiements.' });
  }
};
