import mongoose from "mongoose";
import { MONGO_URI } from "../constant/env";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("successfully connected to datatbse MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
    process.exit(1); // if error shutdown the server
  }
};

export default connectToDatabase;
