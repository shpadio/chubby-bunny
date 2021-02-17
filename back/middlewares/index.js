import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionStore from 'session-file-store';

import dotenv from 'dotenv';
import dataBaseConnect from './dbConnect.js';

const FileStore = sessionStore(session);

const config = (app) => {
  dotenv.config();
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
  app.use('/public', express.static('public'));
  app.use(express.json());

  dataBaseConnect();
  app.use(session({
    store: new FileStore(),
    name: 'auth',
    secret: 'superman',
    resave: true,
    saveUninitialized: false,
    cookie: {
      expires: 60000000,
      httpOnly: false,
    },
  }));
};
export default config;
