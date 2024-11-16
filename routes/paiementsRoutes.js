const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiementController');

// Route pour créer un paiement
router.post('/paiements', paiementController.createPaiement);

// Route pour récupérer tous les paiements
router.get('/paiements', paiementController.getPaiements);

module.exports = router;
