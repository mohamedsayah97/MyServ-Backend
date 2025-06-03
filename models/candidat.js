import mongoose from 'mongoose';
const CandidatSchema = new mongoose.Schema(
  {
       mail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
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
    adresse: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    permis_conduire: {
      type: Boolean,
      required: true,
    },
    statut: {
      type: String,
      enum: ['Célibataire', 'Fiancé', 'Marié', 'Divorcé'],
      required: true,
      default: 'Célibataire',
    },
    diplome: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
      lien_compteRendu: {
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