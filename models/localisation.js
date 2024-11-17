// Connexion a la base de donnees
import database from "../config/database.js";
// Les types de donnees
import { DataTypes } from "sequelize";

// Définition du modèle localisation
const Localisation = sequelize.define('Localisation', {
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
  codePostal:{
    type: DataTypes.STRING,
    allowNull: false
  }
  });
  
  // Exportation du modèle localisation
  module.exports = Localisation;