import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "../routes/quant.routes.js";
import englishRoutes from "../routes/English.routes.js";
import airouter from "../routes/AIRoute.js";
const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AptidPro backend is running",
  });
});

app.use("/api/quants", router);
app.use("/api/english", englishRoutes);
app.use("/api/ai", airouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AptidPro backend running on port ${PORT}`);
});