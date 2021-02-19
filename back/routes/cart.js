import express from 'express';
import Order from '../models/Order.js';
import User from '../models/User.js';

const router = express.Router();
router.route('/:id')
  .post(async (req, res) => {
    const { id } = req.params;

    const { toBuy, totalPrice } = req.body;
    const items = toBuy.map((el) => el._id);
    const order = await Order.create({
      orderNumber: toBuy.uniqueID,
      customer: id,
      items,
      price: totalPrice,
    });

    await User.findByIdAndUpdate({ _id: id }, { orders: [order] });
    res.status(200).json(order);
  });

export default router;
