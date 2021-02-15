import mongoose from 'mongoose';

const Ingredient = mongoose.model('Ingredient', {
    name: String,
    description: String,
    price: Number,
});

export default Ingredient;