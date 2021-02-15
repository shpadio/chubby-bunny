import mongoose from 'mongoose';

const dataBaseConnect = () => {
  const local = 'mongodb://localhost:27017/chubbybunny';
  mongoose.connect(local, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

export default dataBaseConnect;
