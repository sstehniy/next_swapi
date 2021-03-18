import React, { useState } from "react";
import Header from "../components/Header";
import SideDrawer from "../components/SideDrawer";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
	const [showSideDrawer, setShowSideDrawer] = useState(false);
	return (
		<div className="relative h-screen">
			<Header />
			<SideDrawer />
			<main className="relative h-full pt-16">
				<div className="bg-primary-black w-100 h-full">{children}</div>
			</main>
		</div>
	);
};

export default ExploreLayout;
