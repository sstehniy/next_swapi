import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { useApollo } from "../src/context/ApolloProvider";
import { globals } from "../styles/globals";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
	const client = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={client}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Component {...pageProps} />
			<style jsx global>
				{globals}
			</style>
		</ApolloProvider>
	);
}

export default MyApp;
