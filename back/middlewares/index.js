import express from 'express';
import cors from 'cors';
import dataBaseConnect from "./dbConnect.js";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import dotenv from 'dotenv';


const FileStore = sessionFileStore(session)

export const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json())
  app.use(cors());
  app.use(bodyParser.json())
  app.use(cookieParser())
  dataBaseConnect()
  dotenv.config()
  app.use(session({
    store: new FileStore(),
    key:'auth',
    resave:false,
    saveUninitialized:false,
    secret:'superdupersecret',
    cookie:{
      expires:6000000,
      httpOnly:false
    }
  }))
};


