import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    const { token } = req.body;
    try {
      const decodedToken = () => {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
          if (err) {
            res.json({ status: 'false' });
          } else {
            const { id } = decoded;
            const user = User.findOne({ id });
            delete user.password;
            res.json({ status: 'success', user });
          }
        });
      };
    } catch (err) {
      console.log(err);
    }
  });
export default router;
