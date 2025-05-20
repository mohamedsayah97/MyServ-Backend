import express from "express";
import userRoutes from "./user.route.js";
import candidateRoutes from "./candidate.route.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/candidates", candidateRoutes);

export default router;
