import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db/connect";
import routes from "./routes";

config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/", routes);

// DB and Server Boot
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
