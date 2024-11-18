import express from "express";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'


//Importer la connexion a la base de donnees
import database from "./config/database.js";
import clientRoute from "./routes/clientRoutes.js";
import immobilierRoute from "./routes/immobilierRoute.js";
import authRoute from "./routes/authRoute.js";
import paiementRoute from "./routes/paiementRoute.js";
import reservationRoute from "./routes/reservationRoute.js";
import localisationRoute from "./routes/localisationRoute.js";
import equipementRoute from "./routes/equipementRoute.js";

const ENV = dotenv.config().parsed

//creation du serveur
const app = express()

//Utilisation des middlewares
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Génération des accès 

app.use('/api/', clientRoute)

app.use('/api/immobiliers', immobilierRoute)
app.use('/api/paiement', paiementRoute)
app.use('/api/reservations', reservationRoute)
app.use('/api/localisations', localisationRoute)
app.use('/api/reservations', reservationRoute)
app.use('/api/equipements', equipementRoute)
app.use('/api/login', authRoute)

// Demarrage du serveur
const PORT = ENV.PORT
app.listen(PORT, () => console.log(`Ca tourne sur le port ${PORT}`))




