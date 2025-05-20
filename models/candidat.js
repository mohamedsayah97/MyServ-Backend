import mongoose from 'mongoose';
import { boolean } from 'zod';
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
      type: boolean,
      required: true,
    },
    statut: {
      type: String,
      enum: ['En attente', 'Accepté', 'Refusé'],
      default: 'En attente',
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
  },
  {
    timestamps: true,
  }
);

const CandidatModel = mongoose.model('Candidats', CandidatSchema);
export default CandidatModel;