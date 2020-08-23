import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import Comment from '../CommentModel';

export default mutationWithClientMutationId({
  name: 'RemoveCommentsMutation',
  description: '',
  inputFields: {
    commentId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ commentId }) => {
    const comment = await Comment.findByIdAndDelete(commentId);

    if (comment) {
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
