import { GraphQLObjectType } from 'graphql';

import MessageSubscriptions from '../graphql/message/subscription';

export default new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    ...MessageSubscriptions,
  },
});
