import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import UserModel from '../UserModel';
import UserType from '../UserType';

export default mutationWithClientMutationId({
  name: 'UpdateUserMutation',
  description: '',
  inputFields: {
    name: {
      type: GraphQLString,
    },
    file: {
      type: GraphQLString,
    },
  },
  mutateAndGetPayload: async ({ file, name }, { user }) => {
    const record = await UserModel.findById(user._id);

    record.name = name;
    if (file) record.file = file;

    const newUser = await UserModel.findOneAndUpdate({ _id: record._id }, record, { new: true });

    return { newUser };
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: ({ newUser }) => newUser,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
