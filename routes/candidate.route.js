import express from "express";
import candidateController from "../controllers/candidat.controller.js";
import upload from "../config/multer.config.js";
import { authorizer } from "../middlewares/auth.middlewares.js";

const candidateRoutes = express.Router();
candidateRoutes.get("/list", candidateController.list);

candidateRoutes.post(
  "/create",
  upload.fields([
    { name: "lienCV", maxCount: 1 },
    { name: "lien_compteRendu", maxCount: 1 },
  ]),
  
  candidateController.create
);
candidateRoutes.put("/:id", candidateController.update);
candidateRoutes.get("/:id", candidateController.getById);

candidateRoutes.delete("/:id", candidateController.delete);

export default candidateRoutes;
