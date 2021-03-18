import { useRouter } from "next/router";
import Link from "next/link";
import NavLink from "./NavLink";

const paths = [
	{ path: "/explore", text: "Show me All!" },
	{ path: "/explore/people", text: "People" },
	{ path: "/explore/species", text: "Species" },
	{ path: "/explore/vehicles", text: "Vehicles" },
	{ path: "/explore/films", text: "Films" },
	{ path: "/explore/planets", text: "Planets" },
];

const SideDrawer = () => {
	return (
		<div className="w-72 absolute z-10 top-16 bottom-0 bg-primary-dark p-3 shadow-xl border-t-4 border-primary-black">
			<ul>
				{paths.map((path, key) => (
					// eslint-disable-next-line react/no-array-index-key
					<li key={key}>
						<NavLink href={path.path}>
							<div
								className={`relative cursor-pointer w-100 ${
									key > 0 && "mt-4"
								} bg-primary-black text-center py-2 rounded-sm shadow-xl text-primary-light uppercase letter tracking-wider text-xl`}
							>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a>{path.text}</a>
								<div
									className="absolute bg-primary-blue h-full rounded-sm"
									style={{
										zIndex: -1,
										top: "2px",
										width: "99.5%",
										left: "50%",
										transform: "translateX(-50%)",
									}}
								/>
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SideDrawer;
