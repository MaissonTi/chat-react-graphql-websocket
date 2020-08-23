import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import Message from '../MessageModel';

export default mutationWithClientMutationId({
  name: 'RemoveMessagesMutation',
  description: '',
  inputFields: {
    messageId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ messageId }) => {
    const message = await Message.remove({ user_to: messageId });

    if (message) {
      return { message: 'Item removido' };
    }

    throw new Error('Error! Item não encontrado');
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLString,
      resolve: error => error,
    },
  },
});
