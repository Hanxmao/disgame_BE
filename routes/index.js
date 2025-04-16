import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.send("DisGame API is running!");
});

router.get('/api/test', (req, res) => {
    res.json({ message: '🎉 Hello from the backend API!' });
  });

export default router;
