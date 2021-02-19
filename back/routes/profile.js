import express from 'express';
import multer from 'multer';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

const DIR = './public/';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

const router = express.Router();

router.route('/')

  .post(upload.single('file'), async (req, res) => {
    const product = Product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      file: `../public/${req.body.file}`,
    });
    res.json(product);
  });

router.route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const orders = await Order.find({ customer: id });
    if (orders) {
      res.json(orders);
    }
  });

export default router;
