import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connect.js';
import routes from './routes/index.js';

dotenv.config();

const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5001

app.use(cors());
app.use(express.json());
app.use(routes);  // 👈 Make sure this line is here


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
