import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.route.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']})
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());

app.use("/api", router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
export default app;
