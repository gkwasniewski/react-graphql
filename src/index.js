import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { Provider } from "react-redux";
import store from './store'

import './index.css'

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
    <Provider store={store}>
        <ApolloProvider client={client}>
            <AppContainer />
        </ApolloProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
