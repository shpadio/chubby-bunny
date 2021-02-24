import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();
router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const orders = await Order.find({ customer: id });

    if (orders) {
      res.json(orders);
    }
  });

export default router;
