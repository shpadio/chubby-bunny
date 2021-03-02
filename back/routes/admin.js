import express from 'express';
import multer from 'multer';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
import News from '../models/News.js';

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
    const orders = await Order.find().populate('customer').populate('items');
    res.json({ users, orders });
  })

  .post(upload.single('file'), async (req, res) => {
    const { title, description, price } = req.body;
    const product = Product.create({
      title,
      description,
      price,
      file: `http://localhost:4000/public/${req.file.filename}`,
    });
    res.json(product);
  })

  .put(async (req, res) => {
    const { id } = req.body;
    const product = await Product.findById(id);
    product.visible = !product.visible;
    await product.save();
    res.status(200).json(product);
  });

router.route('/news')

  .post(upload.single('file'), async (req, res) => {
    const { title, text } = req.body;

    const news = await News.create({
      title,
      text,
      file: `http://localhost:4000/public/${req.file.filename}`,
    });

    if (news) {
      res.status(200).json(news);
    } else {
      res.status(500).end();
    }
  });

export default router;
