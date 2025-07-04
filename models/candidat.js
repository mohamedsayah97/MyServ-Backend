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
    // poste: {
    //   type: String,
    //   required: true,
    // },
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
      
    },
    commentaireRh: {
      type: String,
    },

     Spéciality: {
      type: String,
      enum: [
        "IA",
        "AdminDB",
        "Analyste cybersécurité",
        "Cloud",
        "Réseau et Sécurité",
        "Consultant SAP",
        "Développeur fullstack",
        "Data Scientist",
      ],
      required: true,
    },
    reponse:[ String ],
  },
  {
    timestamps: true,
  }
);

const CandidatModel = mongoose.model("Candidats", CandidatSchema);
export default CandidatModel;
