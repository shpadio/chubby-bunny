import express from 'express';
import sgMail from '@sendgrid/mail';
import Order from '../models/Order.js';
import User from '../models/User.js';
import Message from '../models/Message.js';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    // console.log(id);
    const user = await User.findById({ _id: id });
    const itemsToString = items.map( (el) => await Order.find({ _id: el.id }));
    // = items.map((el) => el.title);
    console.log(items);
    console.log(itemsToString);

    const message = await Message.create({
      to: 'shpadio@mail.com',
      from: 'saymedear4@gmail.com',
      subject: 'Новый заказ!',
      html:
                `<strong> 
            Заказ №4${order._id.toString().slice(-4)} для клиента ${user.name}
            Следующие позиции: ${itemsToString}
           </strong>`,
    });

    console.log(message);

    // sgMail
    // .send(message)
    // .then(() => console.log('Message sent'));
    // .catch((err) => console.log(err));

    await User.findByIdAndUpdate({ _id: id }, { orders: [order] });
    res.status(200).json(order);
  });

export default router;
