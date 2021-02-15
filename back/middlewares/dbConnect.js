import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dataBaseConnect = () => {
  const atlas = `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.eigie.mongodb.net/${process.env.DB_NAME}`;
  mongoose.connect(atlas, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

export default dataBaseConnect;
