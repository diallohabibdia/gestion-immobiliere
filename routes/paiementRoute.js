// routes/paiementRoutes.js
import {router} from "express";
const router = express.Router();
import {paiementController} from '../controllers/paiementController';

// Définir les routes pour les paiements
router.post('/', paiementController.createPaiement);       // Créer un paiement
router.get('/', paiementController.getAllPaiements);      // Récupérer tous les paiements
router.get('/:id', paiementController.getPaiementById);   // Récupérer un paiement par ID
router.put('/:id', paiementController.updatePaiement);    // Mettre à jour un paiement
router.delete('/:id', paiementController.deletePaiement); // Supprimer un paiement

module.exports = router;