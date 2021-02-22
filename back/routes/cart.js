import express from 'express';
// import sgMail from '@sendgrid/mail';
import Order from '../models/Order.js';
import User from '../models/User.js';
import Message from '../models/Message.js';
import Product from '../models/Product.js';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();
router.route('/:id')
  .post(async (req, res) => {
    const { id } = req.params;
    const { toBuy, totalPrice } = req.body;
    const items = toBuy.map((el) => el._id);
    const order = await Order.create({
      orderNumber: toBuy.uniqueID,
      customer: id,
      items,
      price: totalPrice,
    });
    const user = await User.findById({ _id: id });

    const itemsToString = await Product.find({ _id: items });

    const message = await Message.create({
      subject: 'Новый заказ!',
      html:
                `<strong> 
            Заказ №${order._id.toString().slice(-6)} для клиента ${user.name}
            Следующие позиции: ${itemsToString.map((el) => el.title)}
            На сумму ${totalPrice} руб
           </strong>`,
    });

    // sgMail
    //   .send(message)
    //   .then(() => console.log('Message sent'))
    //   .catch((err) => console.log(err));

    await User.findByIdAndUpdate({ _id: id }, { orders: [order] });
    res.status(200).json(order);
  });

export default router;
