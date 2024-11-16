
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
Reservation.belongsTo(Client,{
    through:'reservation_user'
})

Equipement.belongsTo(Immobilier,{
    through:'equipement_immobilier'
})


//Creation des relations
Client.hasMany(Reservation)
Immobilier.belongsTo(Localisation)
Immobilier.hasMany(Equipement)
Paiement.hasMany(Reservation)
// relations

export {Client, Role, Immobilier, Paiement, Reservation, Equipement, Localisation }