// api/index.js

import app from "../index.js";
import mongoose from "mongoose";

// This is the serverless function handler for Vercel
export default async function handler(req, res) {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to MongoDB in Vercel function");
    } catch (err) {
      console.error("MongoDB connection error in handler:", err);
      return res.status(500).json({ error: "Failed to connect to DB" });
    }
  }

  return app(req, res); // use Express as a handler directly
}
