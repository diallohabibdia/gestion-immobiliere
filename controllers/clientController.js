// Les actions de base sur les bases de donnees (CRUD)

//importons le module qui hache le mot de passe
import bcrypt from 'bcryptjs'
/* Importer l'acces a la table des utilisateurs*/
import { Client } from '../models/relation.js'

const { ValidationError } = require('sequelize');  // Importation de l'erreur de validation de Sequelize


//1- La liste de utilisateurs (Lecture=R) / clients
export const getUsers = async (req, res) => {
    try {
        //Lecture de la liste quand tout se passe bien
        const users = await Client.findAll()
        res.status(200).json({ data: users })

    } catch (err) {
        console.log('err', err);
        //Message retourne en cas d'erreur
        res.status(400).json({ message: err.message })
    }

};

//2- Creation d'un utilisateur (Creation=C) / client 
export const addUser = async (req, res) => {
    //Les informations de l'utilisateur (formulaire ou postman)
    //Le mot de passe doit etre hache
    const { mot_de_passe, ...restInfoClient } = req.body

    const mdpHache = bcrypt.hashSync(mot_de_passe)
    const newUser = { mot_de_passe: mdpHache, ...restInfoClient }
    
    try {
      // Vérification des données requises
    if (!req.body.nom || !req.body.prenom || !req.body.email || !req.body.identification) {
      return res.status(400).json({ error: 'Nom, prénom, email et identification sont obligatoires.' });
    }

    // Validation de l'email
    if (!/\S+@\S+\.\S+/.test(req.body.email)) {
      return res.status(400).json({ error: 'L\'email fourni n\'est pas valide.' });
    }
    // Création du client
        const result = await Client.create(newUser)
        // Réponse avec le client créé
        res.status(201).json({ message: 'Utilisateur cree avec succes', data: result })

    } catch (error) {
       // Gestion des erreurs spécifiques
    if (error instanceof ValidationError) {
      res.status(400).json({ error: 'Erreur de validation des données.' });
    } else {
      res.status(500).json({ error: 'Erreur serveur interne.' });
    }
  }

};


//3- Mise a jour d'un utilisateur (U)
export const updateUser = async (req, res) => {
    const { id } = req.params
    const newInfo = req.body
    try {
        const result = await Client.update({})
    } catch (error) {
      res.status(400).json({message: erreur.message})
    }
}

//4- Suppression d'un utilisateur (D)
export const deleteUser = async (req, res) => {
    //Recuperer l'id de l'utilisateur a supprimer
    const { id } = req.params

    try {
        const result = await Client.destroy({ where: { id } })
        res.status(200).json({ message: "L'utilisateur supprimé avec succes", data: result })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Profil d'un utilisateur

export const profilUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await Client.findByPk(id, { include: 'Reservation' })
        res.status(200).json({ data: user })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


