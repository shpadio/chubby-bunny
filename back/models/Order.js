import mongoose from 'mongoose';

const Order = mongoose.model('Order', {
  orderNumber: String,
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  price: Number,
  ingredients: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
  dateOfOrder: { type: Date, default: Date.now },
});

export default Order;
