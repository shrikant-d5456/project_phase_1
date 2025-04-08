// api/index.js
import mongoose from "mongoose";
import serverless from "serverless-http";
import app from "../index.js";

let isConnected = false; // Global flag to prevent re-connections
const handler = serverless(app);

async function connectToDB() {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      isConnected = true;
      console.log("Connected to MongoDB from serverless function");
    } catch (err) {
      console.error("MongoDB connection error:", err);
      throw err;
    }
  }
}

export default async function(req, res) {
  try {
    await connectToDB();
    return handler(req, res); // Express now wrapped and safe for Vercel
  } catch (err) {
    return res.status(500).json({ error: "Failed to connect to DB" });
  }
}
