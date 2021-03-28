import { GetStaticProps } from "next";
import React, { useState, useCallback, ChangeEvent } from "react";
import TopSection from "../../src/components/TopSection";
import ExploreLayout from "../../src/components/layout/ExploreLayout";

const ExploreAll = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value.trim());
	}, []);

	return (
		<ExploreLayout>
			<TopSection
				categoryTitle="Explore All"
				inputValue={searchQuery}
				onInputChange={handleInputChange}
			/>
		</ExploreLayout>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	console.log(context.params);

	return {
		props: {},
	};
};

export default ExploreAll;
