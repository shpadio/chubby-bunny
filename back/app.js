import express from 'express';
import { config } from './middlewares/index.js';
import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';

const app = express();
config(app);
app.use('/', mainRouter);
app.use('/auth', authRouter);

export default app;
