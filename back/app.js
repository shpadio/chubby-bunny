import express from 'express';
import config from './middlewares';

const app = express();
config(app);
app.use();

export default app;
