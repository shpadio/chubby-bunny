import express from 'express';
import bcrypt from 'bcrypt';
import session from 'express-session';
import User from '../models/User.js';

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
      delete user.password;
      req.session.user = user;
      console.log(user);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json('Такой пользователь уже зарегистрирован!');
    }
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.status(200).json(user);
      }
    } catch
    (err) {
      res.status(500).json('Неверный логин или пароль!');
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    await req.session.destroy();
    res.clearCookie('auth');
    res.status(200).end();
  });
export default router;
