import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { Children, FC, ReactChildren, ReactNode } from "react";

const NavLink = ({
	activeClassName,
	href,
	children,
	...rest
}: LinkProps & {
	activeClassName?: string;
	children: any;
}) => {
	const router = useRouter();
	const { pathname } = router;
	const isActive = pathname === href;
	const child = React.Children.only(children);

	return (
		<Link href={href} {...rest}>
			{React.cloneElement(child, {
				className: `${
					pathname === href
						? `${child.props.className} ${activeClassName || ""}`
						: child.props.className || ""
				}`.trim(),
				style: child.props.style,
			})}
		</Link>
	);
};

export default NavLink;
