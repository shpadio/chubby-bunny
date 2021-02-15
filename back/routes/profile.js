import express from 'express';
import Order from '../models/Order.js';
import Product from "../models/Product.js";

const router = express.Router();


router.route('/')

    .get(async (req, res) => {
        const products = await Product.find({});

        if (products) {
            res.json({ products });
        }
    })

    .post(async (req, res) => {
        const { title, description, price } = req.body;

        const product = await Product.create({
            title,
            description,
            price,
        });
        console.log(product)
        res.status(200).end();
    });

router.route('/:id')

  .get(async (req, res) => {
    const { id } = req.params;
    const orders = await Order.find({ customer: id });
    if (orders) {
      res.json({ orders });
    }
  })

  .post(async (req, res) => {
    const { id } = req.params;
    const order = await Order.create({
      customer: id,
    });
    res.status(200).end();
  });

export default router;
