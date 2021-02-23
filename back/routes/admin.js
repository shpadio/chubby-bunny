import express from 'express';
import multer from 'multer';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Order from '../models/Order.js';

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

  .get(async (req, res) => {
    const users = await User.find();
    const orders = await Order.find();
    res.json({ users, orders });
  })

  .post(upload.single('file'), async (req, res) => {
    const product = Product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      file: `http://localhost:4000/public/${req.file.filename}`,
    });
    res.json(product);
  })

  .put(async (req, res) => {
    const { id } = req.body;
    const product = await Product.findByIdAndUpdate({ id }, { visible: !visible });
    res.status(200);
  });

export default router;
