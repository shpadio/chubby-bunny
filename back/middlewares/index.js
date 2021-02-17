import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import dataBaseConnect from './dbConnect.js';

const FileStore = sessionFileStore(session);
const maxAge = 3 * 24 * 60 * 60;
export const createToken = (id) => jwt.sign({ id }, 'superdupersecretstring', {
  expiresIn: maxAge,
});

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
      expires: 600000000,
      httpOnly: false,
    },
  }));
};
export default config;
