// routes/localisationRoutes.js
import {router} from "express";
const router = express.Router();
import {localisationController} from '../controllers/localisationController';

// Définir les routes pour les localisations
router.post('/', localisationController.createLocalisation);       // Créer une localisation
router.get('/', localisationController.getAllLocalisations);      // Récupérer toutes les localisations
router.get('/:id', localisationController.getLocalisationById);   // Récupérer une localisation par ID
router.put('/:id', localisationController.updateLocalisation);    // Mettre à jour une localisation
router.delete('/:id', localisationController.deleteLocalisation); // Supprimer une localisation

module.exports = router;