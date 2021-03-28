import clsx from "clsx";
import { FC } from "react";
import { useStyles } from "../../../../styles/styles";

const Main: FC<{ size: "full" | "reduced" }> = ({ children, size }) => {
	const { theme } = useStyles();
	return (
		<>
			<main
				className={clsx({
					main: true,
					full: size === "full",
					reduced: size === "reduced",
				})}
			>
				{children}
			</main>
			<style jsx>
				{`
					.main {
						position: absolute;
						top: 64px;
						bottom: 0;
						right: 0px !important;
						background-color: ${theme.primary.black};
						padding: 50px 30px 20px 70px;
					}

					.main.full {
						left: 0;
						transition: left 0.4s cubic-bezier(0.83, 0, 0.17, 1);
					}

					.main.reduced {
						left: calc(min(max(calc(75px + 17vw), 300px), 375px) - 5px);
						transition: left 0.4s cubic-bezier(0.83, 0, 0.17, 1);
					}
				`}
			</style>
		</>
	);
};

export default Main;
