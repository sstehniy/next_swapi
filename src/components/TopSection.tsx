import React from "react";
import { useStyles } from "../../styles/styles";
import SearchBar, { SearchBarProps } from "./SearchBar";

type TopSectionProps = { categoryTitle: string } & SearchBarProps;

const TopSection: React.FC<TopSectionProps> = ({ categoryTitle, ...props }) => {
	const { theme } = useStyles();
	return (
		<>
			<div className="top-section">
				<span className="category-name">{categoryTitle}</span>
				<SearchBar {...props} />
			</div>
			<style jsx>
				{`
					.top-section {
						width: 100%;
						display: flex;
						align-items: stretch;
					}

					.category-name {
						flex: 1;
						font-size: 1.7rem;
						color: ${theme.carrot[500]};
					}
				`}
			</style>
		</>
	);
};

export default TopSection;
