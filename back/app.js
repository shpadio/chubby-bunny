import express from 'express';
import { config } from './middlewares/index.js';
import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';
import profileRouter from './routes/profile.js';

const app = express();
config(app);
app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
export default app;
