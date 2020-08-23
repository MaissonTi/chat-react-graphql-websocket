import { GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from '../user/UserType';

export default new GraphQLObjectType({
  name: 'AuthType',
  description: 'User data',
  fields: () => ({
    user: {
      type: UserType,
      resolve: payload => payload.user,
    },
    token: {
      type: GraphQLString,
      resolve: payload => payload.token,
    },
  }),
});
