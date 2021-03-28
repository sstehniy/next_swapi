/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";
import { IContext } from "../../pages/api/graphql";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphicLink(context: IContext | {} = {}) {
	if (typeof window === "undefined") {
		// server
		const { SchemaLink } = require("@apollo/client/link/schema");
		const { schema } = require("../graphql/schemas");
		return new SchemaLink({ schema, context });
	}
	// client
	const { HttpLink } = require("@apollo/client/link/http");
	return new HttpLink({ uri: "/api/graphql" });
}

function createApolloClient(context?: IContext) {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: createIsomorphicLink(context),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = {}, context?: IContext) {
	const _apolloClient = apolloClient ?? createApolloClient(context);

	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}

	if (typeof window === "undefined") return _apolloClient;
	apolloClient = apolloClient ?? _apolloClient;

	return apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
