import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql', // GraphQL endpoint
    cache: new InMemoryCache(),
});

export default client;