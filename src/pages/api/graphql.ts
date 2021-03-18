// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addResolversToSchema, ApolloServer } from "apollo-server-micro";
import { Db, MongoClient } from "mongodb";
import { resolvers } from "./resolvers";
import schema from "./schemas";
import { createMongoClient } from "./config/mongodb";

process.setMaxListeners(0);

let client: MongoClient;

(async () => {
	client = await createMongoClient();
})();

export interface IContext {
	db: Db;
}

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const apolloServer = new ApolloServer({
	schema: schemaWithResolvers,
	context: () => {
		return { db: client.db("swapi") };
	},
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default apolloServer.createHandler({ path: "/api/graphql" });
