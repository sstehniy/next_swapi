import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { gql } from "apollo-server-micro";

const filmsQuery = gql`
	query getFilms($keyword: String, $title: String, $limit: Int, $offset: Int) {
		getFilms(keyword: $keyword, title: $title, limit: $limit, offset: $offset) {
			pageInfo {
				hasNextPage
			}
			data {
				title
				opening_crawl
				director
				producer
				release_date
				images(first: true)
			}
		}
	}
`;

export const getFilmsPreview = async (
	client: ApolloClient<NormalizedCacheObject>,
	args: { keyword: string; limit: number; offset: number }
) =>
	client
		.query({
			query: filmsQuery,
			variables: { ...args },
			fetchPolicy: "network-only",
		})
		.then(resp => resp.data.getFilms);

export default filmsQuery;
