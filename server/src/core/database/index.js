import mongoose from 'mongoose';

import 'dotenv/config';

const { MONGO_URL } = process.env;

// Connect to MongoDB with Mongoose.
export const database = async () => {
  try {
    return await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    throw new Error('Mongoose connect failed!');
  }
};
