import mongoose from 'mongoose';
import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';
import MessageType from './MessageType';
import MessageModel from './MessageModel';

const { ObjectId } = mongoose.Types;

export default {
  messages: {
    type: GraphQLList(MessageType),
    description: 'Take messages from conversation',
    args: {
      conversationId: {
        type: GraphQLString,
      },
      limit: {
        name: 'limit',
        type: GraphQLInt,
      },
      offset: {
        name: 'offset',
        type: GraphQLInt,
      },
    },
    resolve: async (obj, { conversationId, limit = 15, offset = 0 }, { user }) => {
      const message = await MessageModel.paginate(
        {
          conversation: ObjectId(conversationId),
          user: {
            $ne: ObjectId(user._id),
          },
        },
        { offset, limit, sort: { createdAt: 1 } },
        (err, result) => result
      );

      return message.docs;
    },
  },
};
