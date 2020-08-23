import { GraphQLList } from 'graphql';
import User from '../user/UserModel';
import UserType from '../user/UserType';

export default {
  user: {
    type: GraphQLList(UserType),
    resolve: async () => {
      const users = await User.find().sort({ createdAt: -1 });
      return users;
    },
  },
};
