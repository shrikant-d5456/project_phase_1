import app from "../index.js";
import { createServer } from "http";
import { parse } from "url";

export default async function handler(req, res) {
  const parsedUrl = parse(req.url, true);

  // Wait for DB to connect (if needed)
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URL);
  }

  const server = createServer(app);
  server.emit("request", req, res);
}

