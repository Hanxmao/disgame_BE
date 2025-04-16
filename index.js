import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db/connect.js';
import routes from './routes/index.js';
import authRoutes from './routes/auth.js';
import gamesRoutes from './routes/games.js';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = process.env.PORT || 5001;
export const RAWG_API_KEY = process.env.RAWG_API_KEY;
export const BASE_URL = process.env.RAWG_BASE_URL;


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use(routes);
app.use('/api/auth', authRoutes);
app.use('/api/games', gamesRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
