// routes/equipementRoutes.js
import {router} from "express";
const router = express.Router();
import {equipementController} from '../controllers/equipementController';

// Définir les routes pour les équipements
router.post('/', equipementController.createEquipement);       // Créer un équipement
router.get('/', equipementController.getAllEquipements);      // Récupérer tous les équipements
router.get('/:id', equipementController.getEquipementById);   // Récupérer un équipement par ID
router.put('/:id', equipementController.updateEquipement);    // Mettre à jour un équipement
router.delete('/:id', equipementController.deleteEquipement); // Supprimer un équipement

module.exports = router;
