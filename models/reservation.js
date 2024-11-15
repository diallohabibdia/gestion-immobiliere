import database from "../config/database.js";
import { DataTypes } from "sequelize";
// Définition du modèle Reservation
const Reservation = sequelize.define('Reservation', {
  raison: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
});

// Exportation du modèle reservation
module.exports = Reservation;
