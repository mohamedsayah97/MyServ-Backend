import mongoose from 'mongoose';
const CandidatSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
    },
    prenom: {
      type: String,
      required: true,
      trim: true,
    },
    
    dateEntretien: {
      type: Date,
      required: true,
    },
    heureEntretien: {
      type: String,
      required: true,
    },
    poste: {
      type: String,
      required: true,
    },
    circumVitale: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CandidatModel = mongoose.model('Candidats', CandidatSchema);
export default CandidatModel;