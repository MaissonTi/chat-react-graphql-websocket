import bcrypt from 'bcryptjs';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import User from '../../user/UserModel';
import AuthType from '../AuthType';
import { generateToken } from '../../../core/auth';
// import pubSub, { EVENTS } from '../../../pubSub';

export default mutationWithClientMutationId({
  name: 'LoginAuthMutation',
  description: '',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Unauthorized, wrong email or password!');
    }

    const token = generateToken({ id: user.id });

    const auth = { user, token };

    return { auth };
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
