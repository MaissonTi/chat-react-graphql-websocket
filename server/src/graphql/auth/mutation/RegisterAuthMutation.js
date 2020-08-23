import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import User from '../../user/UserModel';
import AuthType from '../AuthType';
import UserType from '../../user/UserType';
import { generateToken } from '../../../core/auth';
//import pubSub, { EVENTS } from '../../../pubSub';

export default mutationWithClientMutationId({
  name: 'RegisterAuthMutation',
  description: '',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async input => {
    try {
      const user = await User.create(input);
      const token = generateToken({ id: user.id });
      const auth = { user, token };

      return { auth };
    } catch (err) {
      throw new Error(err);
    }
  },
  outputFields: {
    auth: {
      type: AuthType,
      resolve: ({ auth }) => auth,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
