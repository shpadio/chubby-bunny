import mongoose from 'mongoose';

const News = mongoose.model('News', {
  title: String,
  text: String,
  picture: String,
});
export default News;
