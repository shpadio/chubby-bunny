import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { createToken } from '../middlewares/auth.js';

const saltRounds = 10;

const router = express.Router();

router.route('/signup')
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, saltRounds),
      });

      const token = createToken(user._id);
      delete user.password;
      res.status(200).json({ user, token });
    } catch (err) {
      res.status(500).json('Такой пользователь уже зарегистрирован!');
    }
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const id = user._id;
        const token = createToken(id);
        delete user.password;
        res.status(200).json({ id, token });
      }
    } catch
    (err) {
      res.status(500).json('Неверный логин или пароль!');
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    res.clearCookie('auth');
    res.status(200).end();
  });

export default router;
