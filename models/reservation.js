import database from "../config/database.js";
import { DataTypes } from "sequelize";
// Définition du modèle Reservation
const Reservation = sequelize.define('Reservation', {
  clientId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bienImmobilierId:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateFin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateDebut:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  montant:{
    type: DataTypes.INTEGER,
    allowNull:false
  }
});

// Exportation du modèle reservation clientId, bienImmobilierId, dateDebut, dateFin, montant, statut
module.exports = Reservation;
