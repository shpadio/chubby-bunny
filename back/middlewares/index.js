import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import dotenv from 'dotenv';
import dataBaseConnect from './dbConnect.js';

const FileStore = sessionFileStore(session);

const config = (app) => {
  dotenv.config();
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/public', express.static('public'));
  app.use(express.json());
  app.use(cookieParser());
  dataBaseConnect();

  app.use(session({
    store: new FileStore(),
    key: 'auth',
    secret: 'superdupersecretword',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 6000000,
      httpOnly: false,
    },
  }));
};
export default config;
