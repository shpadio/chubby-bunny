import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose.connect('http://localhost');
};

export default dbConnect;
