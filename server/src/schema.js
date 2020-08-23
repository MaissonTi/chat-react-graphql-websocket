import { GraphQLSchema } from 'graphql';

import QueryType from './graphql/rootQuery';
import MutationType from './graphql/rootMutation';
import SubscriptionType from './graphql/rootSubscriptionType';

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  subscription: SubscriptionType,
});
