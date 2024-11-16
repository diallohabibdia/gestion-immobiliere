
import express from "express";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'
// import { addUser, deleteUser, getUsers } from "./controllers/userController.js";

//Importer la connexion a la base de donnees
import database from "./config/database.js";
import clientRoutes from "./routes/clientRoutes.js";
import immobilierRoute from "./routes/immobilierRoute.js";
import paimentRoute from "./routes/paiementRoute.js";
import reservationRoute from "./routes/reservationRoute.js";
import equipementRoute from "./routes/equipementRoute.js";
import localisationRoute from "./routes/localisationRoute.js";
import authRoute from "./routes/authRoute.js";

const ENV = dotenv.config().parsed

//creation du serveur
const app = express()

//Utilisation des middlewares
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/users', clientRoutes)
app.use('/api/reservations', reservationRoute)
app.use('/api/immobilier', immobilierRoute)
app.use('/api/localisation', localisationRoute)
app.use('/api/equipements', equipementRoute)
app.use('/api/paiement', paimentRoute)
app.use('/api/login', authRoute)

// Demarrage du serveur
const PORT = ENV.PORT
app.listen(PORT, () => console.log(`Ca tourne sur le port ${PORT}`))


