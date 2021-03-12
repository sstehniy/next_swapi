// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addResolversToSchema, ApolloServer } from "apollo-server-micro";
import { resolvers } from "./resolvers";
import schema from "./schemas";
import { db } from "../../config/firebase";

export interface IContext {
	db: FirebaseFirestore.Firestore;
}

process.setMaxListeners(0);

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const apolloServer = new ApolloServer({
	schema: schemaWithResolvers,
	context: () => {
		return { db };
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default apolloServer.createHandler({ path: "/api/graphql" });
