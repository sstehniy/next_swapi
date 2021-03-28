import { gql } from "@apollo/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import { initializeApollo } from "../../../src/context/ApolloProvider";
import ExploreLayout from "../../../src/components/layout/ExploreLayout";
import { Film } from "../../../types";
import { getFilmsPreview } from "../../api/actions/getFilmsPreview";
import { createMongoClient } from "../../../src/graphql/config/mongodb";

const ExploreFilms: React.FC<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ data, hasNextPage: initialHasNextPage, offset: initialOffset }) => {
	const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
	const [offset, setOffset] = useState(initialOffset);
	const [filmData, setFilmData] = useState(data);
	return (
		<ExploreLayout>
			<div>{filmData[0].director}</div>
		</ExploreLayout>
	);
};

export const getStaticProps = async () => {
	const client = await createMongoClient();
	const apolloClient = await initializeApollo({}, { db: client.db("swapi") });

	const data = await getFilmsPreview(apolloClient, {
		keyword: "",
		offset: 0,
		limit: 20,
	});

	return {
		props: {
			data: data.data as Film[],
			hasNextPage: data.pageInfo?.hasNextPage as boolean,
			offset: 20,
		},
	};
};

export default ExploreFilms;
