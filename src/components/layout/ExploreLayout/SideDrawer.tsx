import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useStyles } from "../../../../styles/styles";
import StyledLink from "../../ui/StyledLink";

const paths = [
	{ path: "/explore", text: "Show me All!" },
	{ path: "/explore/people", text: "People" },
	{ path: "/explore/species", text: "Species" },
	{ path: "/explore/vehicles", text: "Vehicles" },
	{ path: "/explore/films", text: "Films" },
	{ path: "/explore/planets", text: "Planets" },
];

const SideDrawer = ({
	isOpened,
	toggleOpened,
}: {
	isOpened: boolean;
	toggleOpened: () => void;
}) => {
	const { asPath } = useRouter();
	const { shadow, theme, radius } = useStyles();
	return (
		<>
			<nav
				className={clsx({
					nav: true,
					closed: !isOpened,
					open: isOpened,
				})}
			>
				<h2 className="nav-header">Categories</h2>
				<button
					className={clsx({
						"toggle-button": true,
						closed: !isOpened,
						open: isOpened,
					})}
					type="button"
					onClick={toggleOpened}
				>
					<FontAwesomeIcon icon={faArrowLeft} rotate={90} />
				</button>
				<ul>
					{paths.map((path, key) => (
						// eslint-disable-next-line react/no-array-index-key
						<li key={key}>
							<StyledLink path={path} isActive={path.path === asPath} />
						</li>
					))}
				</ul>
			</nav>
			<style jsx>
				{`
					.nav {
						position: absolute;
						z-index: 10;
						top: 68px;
						bottom: 0;
						padding: 4.2rem 0.75rem;
						min-width: 300px;
						max-width: 375px;
						width: calc(75px + 17vw);
						background-color: ${theme.primary.dark};
						border-top-right-radius: ${radius.xl};
						transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1);
						box-shadow: ${shadow.xl};
					}

					.nav.closed {
						transform: translateX(
							max(min(calc(-75px + -17vw), -300px), -375px)
						);
					}

					.nav.open {
						transform: translateX(0);
					}

					.nav-header {
						position: absolute;
						height: 3.7rem;
						top: calc(0.75rem);
						left: 50%;
						transform: translateX(-50%);
						text-transform: uppercase;
						color: ${theme.carrot[400]};
						letter-spacing: 2px;
						border-bottom: 1px solid ${theme.primary.black};
					}

					li {
						margin-bottom: 1.5vh;
					}

					.toggle-button {
						position: absolute;
						z-index: 1;
						top: 1rem;
						border: none;
						cursor: pointer;
						margin-bottom: 0.5rem;
						height: 1.75rem;
						width: 1.75rem;
						font-size: 1rem;
						display: flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						border-radius: 50%;
						transform-origin: center;
						background-color: ${theme.primary.black};
						color: ${theme.carrot[400]};
						transition: right 0.6s cubic-bezier(0.83, 0, 0.17, 1),
							transform 0.6s cubic-bezier(0.83, 0, 0.17, 1),
							background-color 0.2s ease, color 0.2s ease;
					}

					.toggle-button.open:hover {
						background-color: ${theme.carrot[500]};
						color: ${theme.primary.black};
					}

					.toggle-button:active,
					.toggle-button:focus {
						border: none;
						outline: none;
					}

					.toggle-button.open {
						right: 0.75rem;
						transform: rotate(0deg);
					}

					.toggle-button.closed {
						color: ${theme.primary.dark};
						font-size: 1.4rem;
						stroke: ${theme.carrot[500]};
						stroke-width: 10px;
						right: calc(-2.95rem);
						transform: rotate(180deg);
					}
				`}
			</style>
		</>
	);
};

export default SideDrawer;
