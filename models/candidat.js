import mongoose from "mongoose";
const CandidatSchema = new mongoose.Schema(
  {
    mail: {
      type: String,
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
    },
    lienCV: {
      type: String,
    },
    adresse: {
      type: String,
    },
    telephone: {
      type: String,
    },
    age: {
      type: Number,
    },
    permis_conduire: {
      type: Boolean,
    },
    statut: {
      type: String,
      enum: ["Célibataire", "Fiancé", "Marié", "Divorcé"],

      default: "Célibataire",
    },
    diplome: {
      type: String,
    },
    experience: {
      type: String,
    },
    recruteur: {
      type: String,
    },
    feedback: {
      type: String,
      required: true,
    },
    lien_compteRendu: {
      type: String,
    },
    recruteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    commentaireRh: {
      type: String,
    },

     Spéciality: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CandidatModel = mongoose.model("Candidats", CandidatSchema);
export default CandidatModel;
