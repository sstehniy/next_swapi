import { gql, GraphQLFileLoader } from "apollo-server-micro";
import { loadSchemaSync } from "@graphql-tools/load";

const schema = loadSchemaSync("./pages/api/schema.graphql", {
	loaders: [new GraphQLFileLoader()],
});

export default schema;
