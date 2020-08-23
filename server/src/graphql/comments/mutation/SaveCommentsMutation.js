import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import Comment from '../CommentModel';
import CommentType from '../CommentType';
import pubSub, { EVENTS } from '../../../pubSub';

export default mutationWithClientMutationId({
  name: 'SaveCommentsMutation',
  description: '',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, content }) => {
    const comment = await Comment.create({ name, content });

    pubSub.publish(EVENTS.MESSAGE.SENDED, {
      CommentResponse: comment,
    });

    return comment;
  },
  outputFields: {
    comment: {
      type: CommentType,
      resolve: comment => comment,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
