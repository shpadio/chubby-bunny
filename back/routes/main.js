import express from 'express';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const router = express.Router();

router.route('/')

  .get(async (req, res) => {
    const products = await Product.find();

    // console.log(products);
    if (products) {
      res.json(products);
    }
  })

  .post(async (req, res) => {
    // const { user } = req.session;
    // console.log(res.session);
    const order = await Order.create({
      number: Math.random() * 1000,
      // customer: req.sesssion.user.id,
    });
    await order.save();
    res.status(200).json(order);
  });

export default router;
