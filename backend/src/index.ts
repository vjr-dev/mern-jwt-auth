import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db";
import { NODE_ENV, PORT, APP_ORIGIN } from "./constant/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";
import { OK } from "./constant/http";
import authroutes from "./routes/auth.route";

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

app.get("/health", (req, res, next) => {
  res.status(OK).json({
    status: "healthy enpoint",
  });
});
app.use("/auth", authroutes);
app.use(errorHandler);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} environmet. `);
  await connectToDatabase();
});
