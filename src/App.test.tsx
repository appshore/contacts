import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import App from './App';

it('renders without crashing', () => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(), 
    link: new HttpLink({
      uri: 'http://localhost:3001/'
    })
  })

  const div = document.createElement('div');
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
