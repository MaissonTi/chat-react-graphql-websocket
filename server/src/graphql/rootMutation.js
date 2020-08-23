import { GraphQLObjectType } from 'graphql';
import MessageMutation from './message/mutation';
import AuthMutation from './auth/mutation';
import UserMutation from './user/mutation';
import FileMutation from './file/mutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...MessageMutation,
    ...AuthMutation,
    ...UserMutation,
    ...FileMutation,
  }),
});
