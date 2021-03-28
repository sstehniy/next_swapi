import { ApolloServer } from "apollo-server-micro";
import { Db, MongoClient } from "mongodb";
import { schema } from "../../src/graphql/schemas";
import { createMongoClient } from "../../src/graphql/config/mongodb";

process.setMaxListeners(0);

let client: MongoClient;

(async () => {
	client = await createMongoClient();
})();

export interface IContext {
	db: Db;
}

const apolloServer = new ApolloServer({
	schema,
	introspection: true,
	context: () => ({ db: client.db("swapi") }),
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default apolloServer.createHandler({ path: "/api/graphql" });
