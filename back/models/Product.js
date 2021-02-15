import mongoose from 'mongoose';

const Product = mongoose.model('Product', {
    name: String,
    description: String,
    price: Number,
    picture: { type: Object }
});

export default Product;