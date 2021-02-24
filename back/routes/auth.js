import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { createToken } from '../middlewares/auth.js';

const saltRounds = 10;

const router = express.Router();

router.route('/signup')
  .post(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
    });
    if (user) {
      const id = user._id;
      const token = createToken(id);
      const success = true;
      user.password = null;
      res.json({ user, token, success });
    } else {
      res.json({ success: false });
    }
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const id = user._id;
      const token = createToken(id);
      const success = true;
      user.password = null;
      res.json({ user, token, success });
    } else {
      res.json({ success: false });
    }
  });

router.route('/logout')
  .get(async (req, res) => {
    res.status(200).end();
  });

export default router;
