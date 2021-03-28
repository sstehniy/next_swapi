/* eslint-disable react/no-array-index-key */
import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "../../styles/styles";
import { OptionData } from "./types";
import OptionSelect from "./ui/OptionSelect";

export type SearchBarProps = {
	inputValue: string;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	sortOptions?: OptionData[];
	currentSortOption?: OptionData;
	onSortOptionSelect?: (sortOprion: OptionData) => void;
	filterOptions?: OptionData[];
	currentFilterOption?: OptionData;
	onFilterOptionSelect?: (filterOption: OptionData) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
	inputValue,
	onInputChange,
	sortOptions,
	currentSortOption,
	onSortOptionSelect,
	filterOptions,
	currentFilterOption,
	onFilterOptionSelect,
}) => {
	const { radius, theme, shadow } = useStyles();

	return (
		<>
			<div className="seachbar-container">
				<input
					type="text"
					className="search-input"
					value={inputValue}
					onChange={onInputChange}
				/>
				{!!(sortOptions && currentSortOption && onSortOptionSelect) && (
					<OptionSelect
						options={sortOptions}
						currentOption={currentSortOption}
						icon={faSort}
						onOptionSelect={onSortOptionSelect}
					/>
				)}
				{!!(filterOptions && currentFilterOption && onFilterOptionSelect) && (
					<OptionSelect
						options={filterOptions}
						currentOption={currentFilterOption}
						icon={faFilter}
						onOptionSelect={onFilterOptionSelect}
					/>
				)}
			</div>
			<style jsx>{`
				.seachbar-container {
				}

				.search-input {
					width: 300px;
					height: 40px;
					padding: 10px 20px;
					font-size: 0.9rem;
					border: 1px solid ${`${theme.carrot[300]}30`};
					box-shadow: ${shadow.inner};
					background-color: ${theme.primary.dark};
					border-radius: ${radius.md};
					outline: none;
					transition: box-shadow 0.3s ease, border 0.3s ease;
				}

				.search-input:active,
				.search-input:focus {
					box-shadow: none;
					border-color: ${`${theme.carrot[400]}90`};
				}
			`}</style>
		</>
	);
};

export default SearchBar;
