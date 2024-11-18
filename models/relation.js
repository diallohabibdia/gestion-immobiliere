
import Client from "./client.js";
import Equipement from "./equipement.js";
import Immobilier from "./immobilier.js";
import Paiement from "./paiement.js";
import Localisation from "./localisation.js";
import Reservation from "./reservation.js";
import Role  from "./role.js";



Role.belongsToMany(Client,{
    through:'role_user'
})

Client.belongsToMany(Role,{
    through:'role_user'
})
// relation entre client et reservation
// une reservation peut etre faite par un seul client
// un client peut faire une  ou plusieurs reservations

// Client.hasMany(Reservation)
Client.hasMany(Reservation, {
    foreignKey: 'ClientId', // Clé étrangère dans Reservation
    as: 'reservation_client' // Alias pour accéder aux reservations via le client
});

Reservation.belongsTo(Client, {
    foreignKey: 'ClientId', // Clé étrangère dans Reservation
    as: 'client' // Alias pour accéder aux reservations via le client
});


Equipement.belongsTo(Immobilier,{
    through:'equipement_immobilier'
})
// relation immobilier equipement
//Immobilier.hasMany(Equipement)
Immobilier.hasMany(Equipement, {
    foreignKey: 'immobilierId', // Clé étrangère dans Equipement
    as: 'equipements' // Alias pour accéder aux équipements via Immobilier
});

Equipement.belongsTo(Immobilier, {
    foreignKey: 'immobilierId', // Clé étrangère dans Equipement
    as: 'immobilier' // Alias pour accéder à l'Immobilier via Equipement
});

// relation immobilier / localisation
// un immobilier est situé dans une seule localisation, et une localisation peut avoir plusieurs biens immobiliers
// Immobilier.belongsTo(Localisation)
Immobilier.belongsTo(Localisation, {
    foreignKey: 'localisationId', // Clé étrangère dans Immobilier
    as: 'localisation' // Alias pour accéder à la localisation depuis Immobilier
});

Localisation.hasMany(Immobilier, {
    foreignKey: 'localisationId', // Clé étrangère dans Immobilier
    as: 'immobiliers' // Alias pour accéder aux biens immobiliers depuis Localisation
});

// relation Paiement et reservation
// un paiement peut regler une ou plusieurs reservations
// une reservation peut etre reglée par un ou plusieurs paiements 
//Paiement.belongsToMany(Reservation)
Paiement.belongsToMany(Reservation, {
    through: 'PaiementReservation', // Nom de la table de jointure
    foreignKey: 'paiementId', // Clé étrangère associée à Paiement dans la table de jointure
    otherKey: 'reservationId', // Clé étrangère associée à Reservation dans la table de jointure
    as: 'reservations' // Alias pour accéder aux réservations depuis un paiement
});

Reservation.belongsToMany(Paiement, {
    through: 'PaiementReservation', // Même table de jointure
    foreignKey: 'reservationId', // Clé étrangère associée à Reservation dans la table de jointure
    otherKey: 'paiementId', // Clé étrangère associée à Paiement dans la table de jointure
    as: 'paiements' // Alias pour accéder aux paiements depuis une réservation
});


export {Client, Role, Immobilier, Paiement, Reservation, Equipement, Localisation }