import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AppContext, { Context } from './Context';
import App from './App';

const URI = 'https://petgram-server-evinracher.vercel.app/graphql';
const AppContainer = () => {
  const { removeAuth } = useContext(Context);
  const httpLink = createHttpLink({
    uri: URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = window.sessionStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((error) => {
        console.log(error);
        console.log(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`
        );
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }

    // On any error:
    window.sessionStorage.removeItem('token');
    removeAuth();
  });

  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <AppContext.Provider>
    <AppContainer />
  </AppContext.Provider>,
  document.getElementById('app')
);
