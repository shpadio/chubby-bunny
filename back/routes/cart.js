import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();
router.route('/:id')
  .post(async (req, res) => {
    const { id } = req.params;
    const { uniqueID, price } = req.body;

    const order = await Order.create({
      number: uniqueID,
      customer: id,
      // items: [title],
      price,
    });
    res.status(200).json(order);
  });

export default router;
