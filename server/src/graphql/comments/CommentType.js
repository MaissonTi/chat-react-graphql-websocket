import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      resolve: payload => payload.id,
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve: payload => payload.name,
    },
    content: {
      type: GraphQLNonNull(GraphQLString),
      resolve: payload => payload.content,
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLDateTime),
      resolve: payload => payload.createdAt,
    },
    updatedAt: {
      type: GraphQLNonNull(GraphQLDateTime),
      resolve: payload => payload.updatedAt,
    },
    orderBy: {
      type: GraphQLDateTime,
    },
  }),
});
