import express from 'express';
import cors from 'cors';

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(cors);
};

export default config;
