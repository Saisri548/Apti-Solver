import "dotenv/config";
import express from "express";
import router from "../routes/quant.routes.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AptidPro backend is running",
  });
});

app.use("/api/quants", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AptidPro backend running on port ${PORT}`);
});