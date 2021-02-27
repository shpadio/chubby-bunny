import express from 'express';
import Order from '../models/Order.js';
import User from '../models/User.js';

const router = express.Router();
router.route('/:id')

  .get(async (req, res) => {
    const { id } = req.params;
    const orders = await Order.find({ customer: id });

    if (orders) {
      res.json(orders);
    }
  })

  .put(async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate({ _id: id }, { name, email });
    if (user) {
      res.status(200).end();
    } else {
      res.status(501).end();
    }
  });
export default router;
