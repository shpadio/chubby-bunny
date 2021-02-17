import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const saltRounds = 10;

// const maxAge = 3 * 24 * 60 * 60;
// const createToken = async (id) => await jwt.sign({ id }, 'superdupersecretstring', {
//   expiresIn: 'maxAge', httpOnly: false,
// });

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

      // eslint-disable-next-line no-underscore-dangle
      req.session.user = user;
      // const token = await createToken(user._id);
      // res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
      res.status(200).json({ user });
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
        // eslint-disable-next-line no-underscore-dangle
        // eslint-disable-next-line no-underscore-dangle
        // const token = await createToken(user._id);
        // console.log(token);
        // res.cookie('jwt', token, {
        //   maxAge: maxAge * 1000, httpOnly: false,
        // });
        req.session.user = user;
        console.log(req.session);
        res.status(200).json({ user });
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
