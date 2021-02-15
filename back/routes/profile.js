import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

const router = express.Router();

router.route('/')

  .post(async (req, res) => {
    const { title, description, price } = req.body;
    const product = await Product.create({
      title,
      description,
      price,
    });
    res.json(product);
  });

router.route('/:id')

  .get(async (req, res) => {
    const { id } = req.params;
    const orders = await Order.find({ customer: id });
    if (orders) {
      res.json({ orders });
    }
  });

export default router;
