import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
const accessTokenSecret = 'superdupersecret';
const router = express.Router();

router.route('/signup')
  .post(async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password: bcrypt.hash(password, 10),
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json('error');
    }
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.find(email);
      if (user && bcrypt.compare(password, user.password)) {
          const accessToken = jwt.sign({name:user.name},accessTokenSecret)
        res.status(200).json({user,accessToken});
      } else {
        throw Error('Oops!');
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

router.route('/logout')
  .get(async (req, res) => {

  });
export default router;
