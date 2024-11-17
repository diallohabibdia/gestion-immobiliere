// routes/reservationRoutes.js
import {router} from "express";
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Définir les routes pour les réservations
router.post('/', reservationController.createReservation);       // Créer une réservation
router.get('/', reservationController.getAllReservations);      // Récupérer toutes les réservations
router.get('/:id', reservationController.getReservationById);   // Récupérer une réservation par ID
router.put('/:id', reservationController.updateReservation);    // Mettre à jour une réservation
router.delete('/:id', reservationController.deleteReservation); // Supprimer une réservation

module.exports = router;