import { GraphQLFileLoader } from "apollo-server-micro";
import { loadSchemaSync } from "@graphql-tools/load";

const schema = loadSchemaSync("./src/pages/api/schema.graphql", {
	loaders: [new GraphQLFileLoader()],
});

export default schema;
