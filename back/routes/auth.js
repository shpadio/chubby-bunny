import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { createToken } from '../middlewares/index.js';

const saltRounds = 10;
const maxAge = 3 * 24 * 60 * 60;

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
        // eslint-disable-next-line no-undef
      // req.session.user = user;
      // console.log(req.session.user);
        // eslint-disable-next-line no-underscore-dangle
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge });
      // eslint-disable-next-line no-underscore-dangle
      res.status(200).json({ user: user._id });
    } catch (err) {
      res.status(500).json('Такой пользователь уже зарегистрирован!');
    }
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && await bcrypt.compare(password, user.password)) {
        // req.session.user = user;
        const token = createToken(user._id);
        console.log(token);
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.status(200).json({ user });
        // console.log(req.session.user);
        // res.status(200).json(user);
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
