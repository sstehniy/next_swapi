import {
	addResolversToSchema,
	GraphQLFileLoader,
	loadSchemaSync,
} from "apollo-server-micro";
import { resolvers } from "../resolvers";

export const schema = addResolversToSchema({
	schema: loadSchemaSync("./src/graphql/schema.graphql", {
		loaders: [new GraphQLFileLoader()],
	}),
	resolvers,
});
