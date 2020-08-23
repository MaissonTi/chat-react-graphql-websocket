import { Schema, model, ObjectId } from 'mongoose';
import bcrypt from 'bcryptjs';

const schema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    file: {
      type: ObjectId,
      ref: 'File',
    },
  },
  {
    timestamps: true,
  }
);

schema.pre('save', async function encrypt(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

export default model('User', schema);
