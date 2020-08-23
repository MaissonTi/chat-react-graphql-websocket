import ApolloClient from 'apollo-client';
import { InMemoryCache, split } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';

import { APP_SERVER } from '~/config';

import { store } from '../store';
import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';

export const getToken = async () =>
  JSON.parse(await localStorage.getItem('persist:authPersist'))['auth'] || null;

const httpLink = new createUploadLink({
  uri: `http://${APP_SERVER}/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  const { token } = JSON.parse(await getToken());

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: `ws://${APP_SERVER}/subscriptions`,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: async () => {
      const { token } = JSON.parse(await getToken());
      return {
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    },
  },
});

const erros = onError(
  ({ response, operation, graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );

        if (message == 'Unauthorized!') {
          store.dispatch(signOut());
          setTimeout(() => {
            history.push('/');
          }, 1000);
        }
      });

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  erros.concat(wsLink),
  erros.concat(authLink.concat(httpLink))
);

const client = new ApolloClient({
  link,
  cache,
  onError: e => console.log(e),
});

export default client;
