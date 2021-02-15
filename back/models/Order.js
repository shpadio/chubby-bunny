import mongoose from 'mongoose';

const Order = mongoose.model('Order', {
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ingredients: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
});

export default Order;
