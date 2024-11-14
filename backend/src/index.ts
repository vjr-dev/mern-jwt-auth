import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db";
import { NODE_ENV, PORT } from "./constant/env";

const app = express();

app.use(cors());
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy as fuck",
  });
});
app.listen(4004, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} environmet. `);
  await connectToDatabase();
});
