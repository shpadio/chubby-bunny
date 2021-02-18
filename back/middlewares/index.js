import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
import dataBaseConnect from './dbConnect.js';

const config = (app) => {
  dotenv.config();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());
  app.use('/public', express.static('public'));

  dataBaseConnect();
};
export default config;
