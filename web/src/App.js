import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import client from './apollo/client';

import { store, persistor } from './store';

import GlobalStyles from './styles/global';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyles />
          </Router>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
