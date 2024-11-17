import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db";
import { NODE_ENV, PORT, APP_ORIGIN } from "./constant/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(express.json());

// parse form data on POST which come from application/x-www-form-urlencoded extended: true mean to aprse data use qs library
app.use(express.urlencoded({ extended: true }));

// cors the job of it to tell which source of origin api data permitt to talk
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/health", async (req, res, next) => {
  try {
    throw new Error("THis is test error");
    res.status(200).json({
      status: "healthy as fuck",
    });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);
app.listen(4004, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} environmet. `);
  await connectToDatabase();
});
