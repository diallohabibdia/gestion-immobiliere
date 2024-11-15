import express from "express";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'
// import { addUser, deleteUser, getUsers } from "./controllers/userController.js";

//Importer la connexion a la base de donnees
import database from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import departmentRoute from "./routes/departmentRoute.js";
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



app.use('/api/users', userRoute)

app.use('/api/departments', departmentRoute)

app.use('/api/login', authRoute)

// Demarrage du serveur
const PORT = ENV.PORT
app.listen(PORT, () => console.log(`Ca tourne sur le port ${PORT}`))


///

