/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";
import { useStyles } from "../../../styles/styles";

type StyledLinkProps = {
	path: { text: string; path: string };
	isActive?: boolean;
};

const StyledLink: FC<StyledLinkProps> = ({ path, isActive = false }) => {
	const { theme, shadow, radius } = useStyles();
	return (
		<>
			<Link href={path.path}>
				<div
					aria-label="link"
					className={clsx({ link: true, active: isActive })}
				>
					<a>{path.text}</a>
				</div>
			</Link>
			<style jsx>{`
				.link {
					background-color: ${theme.primary.black};
					padding: 10px 0;
					position: relative;
					text-align: center;
					border-radius: ${radius.md};
					box-shadow: ${shadow.md};
					color: ${theme.primary.light};
					text-transform: uppercase;
					letter-spacing: 1px;
					font-weight: 500;
					font-size: 1.2rem;
					cursor: pointer;
					user-select: none;
					transition: color 0.3s cubic-bezier(0.25, 0.75, 0.5, 1.25) 0s;
				}

				.link:hover {
					color: ${theme.carrot[300]};
				}

				.link:after {
					content: "";
					z-index: -1;
					position: absolute;
					border-radius: ${radius.normal};
					width: 98%;
					left: 1%;
					right: 1%;
					background-color: ${theme.carrot[400]};
					height: 20px;
					bottom: 5px;
					transition: transform 0.2s linear;
				}

				.link:hover:after {
					transform: translateY(8px);
				}

				.link.active {
					color: ${theme.carrot[500]};
				}

				.active.link:after {
					content: "";
					height: 0;
					width: 0;
					position: absolute;
				}
				.active.link:before {
					content: "";
					z-index: -1;
					position: absolute;
					border-radius: ${radius.normal};
					width: 98%;
					left: 1%;
					right: 1%;
					background-color: ${theme.carrot[500]};
					height: 10px;
					bottom: -3px;
				}
			`}</style>
		</>
	);
};

export default StyledLink;
