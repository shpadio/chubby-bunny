import express from 'express';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const router = express.Router();

router.route('/')

  .get(async (req, res) => {
    const products = await Product.find();
    if (products) {
      res.json(products);
    }
  })

  .post(async (req, res) => {
    const { user } = req.session;

    const order = await Order.create({
      number: Math.random() * 1000,
      // eslint-disable-next-line no-underscore-dangle
      // customer: user.id,
    });
    await order.save();
    res.status(200).json(order);
  });

export default router;
