import mongoose from 'mongoose';

const Order = mongoose.model('Order', {
  orderNumber: Number,
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ingredients: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
  dateOfOrder: { type: Date, default: Date.now },
});

export default Order;
