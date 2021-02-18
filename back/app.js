import express from 'express';
import config from './middlewares/index.js';

import authRouter from './routes/auth.js';
import mainRouter from './routes/main.js';
import profileRouter from './routes/profile.js';
import verifyRouter from './routes/verification.js';
import cartRouter from './routes/cart.js';

const app = express();
config(app);
app.use('/', mainRouter);
app.use('/verify', verifyRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/cart', cartRouter);
export default app;
