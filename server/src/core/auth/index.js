import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../../graphql/user/UserModel';

const { APP_SECRET } = process.env;

export const generateToken = payload =>
  jwt.sign(payload, APP_SECRET, {
    expiresIn: 86400,
  });

export const getUser = async token => {
  if (!token) return { user: null };
  try {
    const decodedToken = jwt.verify(token.substring(7), APP_SECRET);
    //const decodedToken = await promisify(jwt.verify)(token, APP_SECRET);
    const user = await User.findOne({ _id: decodedToken._id });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
};
