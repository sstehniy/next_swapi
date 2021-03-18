import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ReactNode, createContext, useContext } from "react";

const client = new ApolloClient({
	uri: "/api/graphql",
	cache: new InMemoryCache(),
});

type ProviderProps = {
	children: ReactNode;
};

const ClientContext = createContext({
	client,
});

const ClientContextProvider = ({ children }: ProviderProps) => {
	return (
		<ClientContext.Provider value={{ client }}>
			{children}
		</ClientContext.Provider>
	);
};

export { ClientContextProvider, client };
