import { GraphQLObjectType } from 'graphql';
import MessageQuery from './message/MessageQuery';
import ConversationQuery from './conversation/ConversationQuery';
import AuthQuery from './auth/AuthQuery';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    ...MessageQuery,
    ...AuthQuery,
    ...ConversationQuery,
  }),
});
