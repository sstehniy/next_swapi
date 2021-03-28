import { useStyles } from "../../styles/styles";

const Header = () => {
	const { theme, shadow } = useStyles();
	return (
		<>
			<header className="header">
				<h1 className="title">Title Placeholder</h1>
			</header>
			<style jsx>{`
				.header {
					position: absolute;
					z-index: 10;
					height: 64px;
					width: 100vw;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: ${theme.primary.dark};
					color: ${theme.primary.light};
					box-shadow: ${shadow.md};
				}

				.title {
					text-transform: uppercase;
					letter-spacing: 2px;
					color: ${theme.carrot[500]};
				}
			`}</style>
		</>
	);
};

export default Header;
