import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});
app.listen(4004, () => {
  console.log(`Server is running on port 4004 in development environmet. `);
});
