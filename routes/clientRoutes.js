const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Route pour créer un client
router.post('/clients', clientController.createClient);

// Route pour récupérer tous les clients
router.get('/clients', clientController.getClients);

module.exports = router;
