import client from "./client.js";
import equipement from "./equipement.js"
import immobilier from "./immobilier.js"
import localisation from "./localisation.js"
import paiement from "./paiement.js"
import reservation from "./reservation.js"

//creation des relations 
client.belongsToMany()