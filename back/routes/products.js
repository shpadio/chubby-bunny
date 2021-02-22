import express from 'express';
import multer from 'multer';
import Product from '../models/Product.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpg'
        || file.mimetype === 'image/jpeg'
        || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Image uploaded is not of type jpg/jpeg or png'), false);
  }
};

const upload = multer({ storage, fileFilter });
router.post('/', upload.array('images', 5), async (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    images: req.files,
  });
  await newProduct.save();
  res.send(newProduct);
});
export default router;
