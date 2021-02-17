import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
import dataBaseConnect from './dbConnect.js';

const config = (app) => {
  dotenv.config();
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/public', express.static('public'));
  app.use(express.json());

  dataBaseConnect();
};
export default config;
