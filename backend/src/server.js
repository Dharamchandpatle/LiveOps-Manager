import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import mapplsRoutes from "./routes/mapplsRoutes.js";
import taskRoutes from "./routes/taskRoutes.js"; // note .js



dotenv.config();
const app = express();

// ------------------- Connect Database -------------------
connectDB()
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

// ------------------- Middleware -------------------
app.use(express.json());
app.use(cookieParser());

// CORS setup: React frontend runs on 5175
app.use(
  cors({
    origin: "http://localhost:5175",
    credentials: true,
  })
);

// ------------------- Routes -------------------
app.use("/api/auth", authRoutes);
app.use("/api/mappls", mapplsRoutes);
app.use("/api/tasks", taskRoutes);


// ------------------- Server -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
