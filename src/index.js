import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//Instance of QraphQL server
const httpLink = createHttpLink({
    uri: 'https://fakerql.com/graphql'
})

//Init Apollo client
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
