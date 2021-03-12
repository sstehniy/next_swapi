import { useRouter } from "next/router";

const FilteredEvents = () => {
	const router = useRouter();

	return (
		<div>
			<p>Events for filter</p>
			<ul>
				{Object.keys(router.query).map((filter, key) => (
					<li key={key}>
						{filter}: {router.query[filter]}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FilteredEvents;
