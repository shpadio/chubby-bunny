import mongoose from 'mongoose'

const Order = mongoose.model('Order',{
    price:Number,
    customer:{type:mongoose.Schema.Types.ObjectId,ref:'User'},

})

export default Order