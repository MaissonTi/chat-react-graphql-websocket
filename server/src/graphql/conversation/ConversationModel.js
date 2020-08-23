import { Schema, model, ObjectId } from 'mongoose';

const schema = new Schema(
  {
    members: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model('Conversation', schema);
