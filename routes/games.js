import express from 'express';
import axios from 'axios';
import { RAWG_API_KEY, BASE_URL } from '../index.js';

const router = express.Router();


router.get('/', async (req, res) => {
    try {
  
      const { data } = await axios.get(`${BASE_URL}/games`, {
        params: {
          key: RAWG_API_KEY,
          ...req.query,
        },
      });
  
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch from RAWG' });
    }
  });

export default router