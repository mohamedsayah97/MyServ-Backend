import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']})
);

app.use(express.json());

app.use("/api", router);

export default app;
