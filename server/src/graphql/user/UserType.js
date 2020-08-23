import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

import FileType from '../file/FileType';
import FileModel from '../file/FileModel';

export default new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id: {
      type: GraphQLID,
      resolve: payload => payload._id,
    },
    name: {
      type: GraphQLString,
      resolve: payload => payload.name,
    },
    email: {
      type: GraphQLString,
      resolve: payload => payload.email,
    },
    file: {
      type: FileType,
      resolve: async payload =>
        FileModel.findOne({
          _id: payload.file,
        }),
    },
  }),
});
