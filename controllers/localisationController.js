import {Localisation} from '../models/relation.js'

// Créer une nouvelle localisation
exports.createLocalisation = async (req, res) => {
    try {
      const { adresse, ville, codePostal, pays } = req.body;
  
      // Créer une nouvelle localisation
      const localisation = new Localisation({
        adresse,
        ville,
        codePostal,
        pays
      });
  
      // Sauvegarder la localisation dans la base de données
      await localisation.save();
      res.status(201).json(localisation);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error.message });
    }
  };
  
  // Récupérer toutes les localisations
  exports.getAllLocalisations = async (req, res) => {
    try {
      const localisations = await Localisation.find();
      res.status(200).json(localisations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Récupérer une localisation par ID
  exports.getLocalisationById = async (req, res) => {
    try {
      const localisation = await Localisation.findById(req.params.id);
  
      if (!localisation) {
        return res.status(404).json({ message: 'Localisation non trouvée' });
      }
  
      res.status(200).json(localisation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Mettre à jour une localisation
  exports.updateLocalisation = async (req, res) => {
    try {
      const { adresse, ville, codePostal, pays } = req.body;
  
      const localisation = await Localisation.findByIdAndUpdate(
        req.params.id,
        {
          adresse,
          ville,
          codePostal,
          pays,
          
        },
        { new: true } // Retourner le document mis à jour
      );
  
      if (!localisation) {
        return res.status(404).json({ message: 'Localisation non trouvée' });
      }
  
      res.status(200).json(localisation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Supprimer une localisation
  exports.deleteLocalisation = async (req, res) => {
    try {
      const localisation = await Localisation.findByIdAndDelete(req.params.id);
  
      if (!localisation) {
        return res.status(404).json({ message: 'Localisation non trouvée' });
      }
  
      res.status(204).send();  // 204 No Content
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };