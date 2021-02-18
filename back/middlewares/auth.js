import jwt from 'jsonwebtoken';

export const maxAge = 3 * 24 * 60 * 60;
export const createToken = (id) => jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
  expiresIn: maxAge,
});
