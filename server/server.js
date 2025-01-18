import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import { conncetDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    conncetDB();
});