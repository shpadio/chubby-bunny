import express from 'express';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
  .post((req, res) => {
    const { token } = req.body;
    const decodedToken = verifyToken(token);
    if (decodedToken) {
      res.json({ status: 'success', id: decodedToken.id });
    } else {
      res.json({ status: 'false' });
    }
  });

export default router;
