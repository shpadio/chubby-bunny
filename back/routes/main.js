import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.route('/')

  .get(async (req, res) => {
    const products = await Product.find();
    // products = products.filter((el) => el.visible);
    if (products) {
      res.json(products);
    }
  });

export default router;
