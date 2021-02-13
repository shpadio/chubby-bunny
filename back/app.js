import express from 'express';
import config from './middlewares';
import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';

const app = express();
config(app);
app.use('/auth', authRouter);
app.use('/main', mainRouter);

export default app;
