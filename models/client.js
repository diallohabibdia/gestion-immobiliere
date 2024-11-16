
// Connexion a la base de donnees
import database from "../config/database.js";
// Les types de donnees
import { DataTypes } from "sequelize";

// Définition du modèle Client
const Client = sequelize.define('Client', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,  // Validation pour l'email
    },
  },
  identification: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  telephone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pays_residence:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  ville:{
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
  mot_de_passe: { type: DataTypes.STRING, allowNull: false },

  contact_urgence:{
    type: DataTypes.STRING,
  }
  // Ajoutez d'autres champs nécessaires ici
}, {
  timestamps: true,  // Ajoute les champs createdAt et updatedAt
});

// Exportation du modèle Client
module.exports = Client;
