import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.send("DisGame API is running!");
});

export default router;
