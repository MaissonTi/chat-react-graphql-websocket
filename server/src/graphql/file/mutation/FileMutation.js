import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLUpload } from 'graphql-upload';
import { processUpload } from '../../../utils/upload';
import FileType from '../FileType';
import FileModel from '../FileModel';

export default mutationWithClientMutationId({
  name: 'FileMutation',
  description: '',
  inputFields: {
    file: {
      type: GraphQLUpload,
    },
  },
  mutateAndGetPayload: async data => {
    const { file } = data;
    const upload = await processUpload(file);
    const file_new = await FileModel.create(upload);

    return { file: file_new };
  },
  outputFields: {
    file: {
      type: FileType,
      resolve: ({ file }) => file,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
