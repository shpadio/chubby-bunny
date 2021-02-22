import mongoose from 'mongoose';

const Message = mongoose.model('Message', {
  to: { type: String, default: 'chubbybunny74@yandex.ru' },
  from: { type: String, default: 'chubbybunny74@yandex.ru' },
  subject: String,
  text: { type: String, default: 'random' },
  html: String,
});

export default Message;
