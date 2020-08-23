import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import path from 'path';

export default new GraphQLObjectType({
  name: 'FileType',
  fields: () => ({
    _id: {
      type: GraphQLID,
      resolve: payload => payload._id,
    },
    path: {
      type: GraphQLString,
      resolve: payload => `${process.env.APP_URL}:${process.env.PORT}/${payload.path}`,
    },
    filename: {
      type: GraphQLString,
      resolve: payload => payload.filename,
    },
    mimetype: {
      type: GraphQLString,
      resolve: payload => payload.mimetype,
    },
    encoding: {
      type: GraphQLString,
      resolve: payload => payload.encoding,
    },
  }),
});
