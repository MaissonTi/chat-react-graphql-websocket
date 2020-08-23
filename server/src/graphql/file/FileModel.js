import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    path: {
      type: String,
      unique: true,
    },
    path: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    mimetype: {
      type: String,
      required: true,
    },
    encoding: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('File', schema);
