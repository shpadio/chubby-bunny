import mongoose from 'mongoose';

const Product = mongoose.model('Product', {
  title: String,
  description: String,
  price: Number,
  file: String,
  visible: { type: Boolean, default: true },
});

export default Product;
