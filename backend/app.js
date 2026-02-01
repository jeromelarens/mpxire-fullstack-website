import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import trackVisitor from "./middleware/trackVisitor.js";
import connectDB from "./configs/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 TRACK VISITORS (PUBLIC ONLY)
app.use(trackVisitor);

// 👇 ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact",contactRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));