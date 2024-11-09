// Importation de Sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Connexion à la base de données

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
  },
  // Ajoutez d'autres champs nécessaires ici
}, {
  timestamps: true,  // Ajoute les champs createdAt et updatedAt
});

// Exportation du modèle Client
module.exports = Client;
