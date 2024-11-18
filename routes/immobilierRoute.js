<<<<<<< Updated upstream
// routes/reservationRoutes.js
import {router} from "express";
const router = express.Router();
const bienImmobilierController = require('../controllers/bienImmobilierController');

// Définir les routes
router.get('/', bienImmobilierController.getAllBiensImmobiliers);   // Récupérer tous les biens immobiliers
router.post('/', bienImmobilierController.createBienImmobilier);    // Créer un nouveau bien immobilier
router.get('/:id', bienImmobilierController.getBienImmobilierById); // Récupérer un bien immobilier par ID
router.put('/:id', bienImmobilierController.updateBienImmobilier);  // Mettre à jour un bien immobilier
router.delete('/:id', bienImmobilierController.deleteBienImmobilier); // Supprimer un bien immobilier

module.exports = router;
=======
>>>>>>> Stashed changes
