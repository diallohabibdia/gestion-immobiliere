
// Connexion a la base de donnees
import database from "../config/database.js";
// Les types de donnees
import { DataTypes } from "sequelize";

// Définition du modèle Immobilier
const Immobilier = sequelize.define('Immobilier', {
  ville:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  pays:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresse:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  boite_postale:{
    type: DataTypes.STRING,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Ajoutez d'autres champs nécessaires ici
}, {
  timestamps: true,  // Ajoute les champs createdAt et updatedAt
});

// Exportation du modèle immobilier
module.exports = Immobilier;