import mongoose from 'mongoose';

const Product = mongoose.model('Product', {
    name: String,
    description: String
});

export default Product;