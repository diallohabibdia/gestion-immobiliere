import {Immobilier} from '../models/relation.js'

//Liste
export const immobilierList = async (req, res) => {
    try {
        const immobbiliers = await Immobilier.findAll()
        req.status(200).json({ data: immobbiliers})
    } catch (error){
        res.status(400).json({message: error.message})
    }
}
//creation
export const addImmobilier = async (req, res) => {
    const infoImmobilier = req.body
    try{
        const result = await Immobilier.create(infoImmobilier)
        res.status(201).json({ message: 'Voici se que nous avons a vous proposer', data: result})

    }catch (err){
        res.status(400)
    }
}
// Récupérer tous les biens immobiliers
exports.getAllImmobiliers = async (req, res) => {
    try {
      const biensImmobiliers = await BienImmobilier.find();
      res.status(200).json(biensImmobiliers);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Récupérer un bien immobilier par ID
  exports.getImmobilierById = async (req, res) => {
    try {
      const bienImmobilier = await Immobilier.findById(req.params.id);
      if (!bienImmobilier) {
        return res.status(404).json({ message: 'Bien immobilier non trouvé' });
      }
      res.status(200).json(bienImmobilier);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Mettre à jour un bien immobilier
  exports.updateImmobilier = async (req, res) => {
    try {
      const {ville,pays, adresse,boite_postale,Description } = req.body;
  
      const bienImmobilier = await Immobilier.findByIdAndUpdate(
        req.params.id,
        {
            ville,pays, adresse,boite_postale,Description
        },
        { new: true } // Retourne le document mis à jour
      );
  
      if (!bienImmobilier) {
        return res.status(404).json({ message: 'Bien immobilier non trouvé' });
      }
  
      res.status(200).json(bienImmobilier);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Supprimer un bien immobilier
  exports.deleteImmobilier = async (req, res) => {
    try {
      const bienImmobilier = await Immobilier.findByIdAndDelete(req.params.id);
      if (!bienImmobilier) {
        return res.status(404).json({ message: 'Bien immobilier non trouvé' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };