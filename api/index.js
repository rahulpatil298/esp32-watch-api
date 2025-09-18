import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let latestData = {
  heart_rate: 0,
  spo2: 0,
  temperature: 0,
  battery: 0,
  timestamp: new Date(),
};

app.post("/api/data", (req, res) => {
  latestData = { ...req.body, timestamp: new Date() };
  console.log("Received:", latestData);
  res.json({ status: "ok" });
});

app.get("/api/data", (req, res) => {
  res.json(latestData);
});

// 👉 IMPORTANT: Export app (no app.listen here)
export default app;
