import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.route('/')

  .get(async (req, res) => {
    const products = await Product.find({});
    if (products) {
      res.json(products);
    }
  });

export default router;
