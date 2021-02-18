import express from 'express';
import { verifyToken } from '../middlewares/auth.js';
import Order from '../models/Order.js';

const router = express.Router();
router.route('/')
  .post(async (req, res) => {
    const { token, uniqueID } = req.body;
    const { id } = verifyToken(token);
    const order = await Order.create({
      number: uniqueID,
      customer: id,
    });
    res.status(200).json(order);
  });

export default router;
