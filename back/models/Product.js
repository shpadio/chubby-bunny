import mongoose from 'mongoose';

const Product = mongoose.model('Product', {
  title: String,
  description: String,
  price: Number,
  file: String,
});

export default Product;
