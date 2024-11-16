import express from "express";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';

// Importer la connexion à la base de données
import database from "./config/database.js";

// Importer les routes
import userRoute from "./routes/userRoute.js";
import departmentRoute from "./routes/departmentRoute.js";
import authRoute from "./routes/authRoute.js";

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Créer le serveur Express
const app = express();

// Utilisation des middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Définir les routes
app.use('/api/users', userRoute);
app.use('/api/departments', departmentRoute);
app.use('/api/login', authRoute);

// Tester la connexion à la base de données
database.authenticate()
  .then(() => console.log('Connexion à la base de données réussie.'))
  .catch(err => {
    console.error('Erreur de connexion à la base de données :', err);
    process.exit(1); // Arrêter l'application si la connexion échoue
  });

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
