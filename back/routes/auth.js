import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

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
    }
 catch ()
  });

router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.find(email);
    if (user && bcrypt.compare(password, user.password)) {
      res.status(200).json(user);
    }
  });

export default router;
