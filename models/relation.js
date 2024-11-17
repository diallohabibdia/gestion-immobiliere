
import Client from "./client.js";
import Equipement from "./equipement.js";
import Immobilier from "./Immobilier.js";
import Paiement from "./paiement.js";
import Localisation from "./localisation.js";
import Reservation from "./reservation.js";

//Creation des relations
Client.hasMany(Reservation)
Immobilier.belongsTo(Localisation)
Immobilier.hasMany(Equipement)
Paiement.hasMany(Reservation)
// relations

export {Client, Immobilier, Paiement, Reservation, Equipement, Localisation }