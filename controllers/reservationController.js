import {Immobilier} from '../models/Immobilier.js'
import {Client} from '../models/client.js'
import { Reservation } from '../models/reservation.js'

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
    try {
      const { clientId, bienImmobilierId, dateDebut, dateFin, montant, statut } = req.body;
  
      // Vérification de l'existence du client et du bien immobilier
      const client = await Client.findById(clientId);
      const bienImmobilier = await Immobilier.findById(bienImmobilierId);
  
      if (!client || !bienImmobilier) {
        return res.status(404).json({ message: 'Client ou bien immobilier non trouvé' });
      }
  
      // Créer une nouvelle réservation
      const reservation = new Reservation({
        client: clientId,
        bienImmobilier: bienImmobilierId,
        dateDebut,
        dateFin,
        montant,
        statut: statut || 'En attente' // Par défaut, la réservation est en attente
      });
  
      // Sauvegarder la réservation dans la base de données
      await reservation.save();
      res.status(201).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  };
  
  // Récupérer toutes les réservations
  exports.getAllReservations = async (req, res) => {
    try {
      const reservations = await Reservation.find()
        .populate('client')  // Récupérer les informations du client
        .populate('bienImmobilier'); // Récupérer les informations du bien immobilier
      res.status(200).json(reservations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Récupérer une réservation par ID
  exports.getReservationById = async (req, res) => {
    try {
      const reservation = await Reservation.findById(req.params.id)
        .populate('client')
        .populate('bienImmobilier');
  
      if (!reservation) {
        return res.status(404).json({ message: 'Réservation non trouvée' });
      }
  
      res.status(200).json(reservation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Mettre à jour une réservation (par exemple pour changer le statut)
  exports.updateReservation = async (req, res) => {
    try {
      const { statut } = req.body;
  
      const reservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        { statut },
        { new: true }  // Retourner le document mis à jour
      );
  
      if (!reservation) {
        return res.status(404).json({ message: 'Réservation non trouvée' });
      }
  
      res.status(200).json(reservation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Supprimer une réservation
  exports.deleteReservation = async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndDelete(req.params.id);
  
      if (!reservation) {
        return res.status(404).json({ message: 'Réservation non trouvée' });
      }
  
      res.status(204).send();  
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };