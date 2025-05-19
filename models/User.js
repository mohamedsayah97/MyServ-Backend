import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
    mail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "RH"],
      default: "RH",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
