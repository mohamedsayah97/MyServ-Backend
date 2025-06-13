import candidatRepo from "../repositories/candidat.repo.js";


const candidatController = {
    async create(req, res) {
        // try {
        //     const data = req.body;
        //     const file = req.file; // Fichier téléchargé via Multer
            
        //     // Vérification de l'email existant
        //     const candidat = await candidatRepo.findOne({ mail: data.mail });
        //     if (candidat) {
        //         // Si un fichier a été téléchargé mais l'email existe déjà, on pourrait le supprimer
        //         if (!file) {
        //             const fs = require('fs');
        //             fs.unlinkSync(file.path);
        //         }
        //         return res.status(400).json({ message: "This email is already taken" });
        //     }   
            
        //     // Ajout du chemin du fichier aux données du candidat si un fichier a été téléchargé
        //     if (file) {
        //         data.documentPath = file.path; // ou file.filename selon ce que vous voulez stocker
        //         data.documentOriginalName = file.originalname;
        //         data.documentMimeType = file.mimetype;
        //     }
            
        //     const newCandidat = await candidatRepo.insert(data);
            
        //     return res.status(201).json({ 
        //         message: "Candidate created successfully",
        //         data: newCandidat,
        //         document: file ? {
        //             path: file.path,
        //             originalname: file.originalname,
        //             mimetype: file.mimetype
        //         } : null
        //     });
        // } catch (error) {
        //     // Nettoyage: supprimer le fichier téléchargé si une erreur survient
        //     if (req.file) {
        //         const fs = require('fs');
        //         fs.unlinkSync(req.file.path);
        //     }
        //     return res.status(500).json({ message: error.message });
        // }
    
    try {
    const data = req.body;
    // Remove this email check since you're not using emails
    // const candidat = await candidatRepo.findOne({ email: data.email });
    // if (candidat) {
    //   return res.status(400).json({ message: "This email is already taken" });
    // }
    
    const newcandidat = await candidatRepo.insert(data);
    return res.status(200).json({ data: newcandidat });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
    },
    
    



    async list(req, res) {
        try {
            const candidats = await candidatRepo.find();
            return res.status(200).json({ data: candidats });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const candidat = await candidatRepo.findByIdAndDelete(id);
            if (!candidat) {
                return res.status(404).json({ message: "Candidat not found" });
            }
            return res.status(200).json({ message: "Candidat deleted successfully" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const candidat = await candidatRepo.findByIdAndUpdate(id, data, { new: true });
            if (!candidat) {
                return res.status(404).json({ message: "Candidat not found" });
            }
            return res.status(200).json({ data: candidat });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
        async getById(req, res) {
            try {
                const { id } = req.params;
                const candidat = await candidatRepo.findById(id);
                if (!candidat) {
                    return res.status(404).json({ message: "Candidat not found" });
                }
                return res.status(200).json({ data: candidat });
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
    
}
    
export default candidatController;