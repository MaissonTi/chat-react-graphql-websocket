import { GraphQLList } from 'graphql';
import CommentType from './CommentType';
import Comment from './CommentModel';

export default {
  comments: {
    type: GraphQLList(CommentType),
    resolve: async () => {
      const comments = await Comment.find().sort({ createdAt: -1 });
      return comments;
    },
  },
};
