// Connexion a la base de donnees
import database from "../config/database.js";
// Les types de donnees
import { DataTypes } from "sequelize";

// Définition du modèle Equipement
const Equipement = sequelize.define('Equipement', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dimensions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prix_en_dollar: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isIn: {
            args: [['Projeteur', 'Caméras', 'Fumigène', 'Ordinateur']], // Liste des choix possibles
            msg: "La description doit être l'une des valeurs suivantes : 'Projeteur', 'Caméras', 'Fumigène', 'Ordinateur'."
        }
  }
},
});
// Exportation du modèle equipement
module.exports = Equipement;