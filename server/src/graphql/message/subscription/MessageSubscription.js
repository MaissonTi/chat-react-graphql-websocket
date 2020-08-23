import { withFilter } from 'graphql-subscriptions';
import { GraphQLString, GraphQLNonNull } from 'graphql';
import MessageType from '../MessageType';
import pubSub, { EVENTS } from '../../../pubSub';

const MessageSendedSubscription = {
  type: MessageType,
  args: {
    conversationId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  subscribe: withFilter(
    () => pubSub.asyncIterator(EVENTS.MESSAGE.SENDED),
    (payload, args, { user }) => {
      return (
        payload.MessageSended.conversation.toString() === args.conversationId.toString() &&
        payload.MessageSended.author.toString() !== user._id.toString()
      );
    }
  ),
};

export default MessageSendedSubscription;
