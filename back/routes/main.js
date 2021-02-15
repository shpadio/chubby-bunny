import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    console.log('H');
    res.send('main');
  });

export default router;
