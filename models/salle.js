import { DataTypes } from "sequelize";
import database from "../config/database.js";

// Définition du modèle Salle
const Salle = database.define('Salle', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true, // Le champ ne doit pas être vide
    }
  },
  capacite: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1, // La capacité doit être au moins de 1
    }
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Assurez-vous que l'emplacement est défini
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Optionnel
  },
}, {
  timestamps: true, // Ajoute les colonnes `createdAt` et `updatedAt`
  tableName: 'salles' // Nom de la table dans la base de données
});

// Exportation du modèle Salle
export default Salle;
