import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
	cache: new InMemoryCache({
		typePolicies: {
			project: {
				keyFields: ['id'],
				merge(existing, incoming) {
					return { ...existing, ...incoming };
				},
			},
		},
	}),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network',
		},
	},
});

export default client;
