import candidatRepo from "../repositories/candidat.repo.js";


const candidatController = {
    async create(req, res) {
        try {
        const data = req.body;
        const candidat = await candidatRepo.findOne({ mail: data.mail });
        if (candidat) {
            return res.status(400).json({ message: "This email is already taken" });
        }   
        const newCandidat = await candidatRepo.insert(data);
        return res.status(200).json({ data: newCandidat });
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
    // async delete(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const candidat = await candidatRepo.findByIdAndDelete(id);
    //         if (!candidat) {
    //             return res.status(404).json({ message: "Candidat not found" });
    //         }
    //         return res.status(200).json({ message: "Candidat deleted successfully" });
    //     } catch (error) {
    //         return res.status(500).json({ message: error.message });
    //     }
    // },
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