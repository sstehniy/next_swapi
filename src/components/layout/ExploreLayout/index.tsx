import React, { useState } from "react";
import Header from "../../Header";
import SideDrawer from "./SideDrawer";
import Main from "./Main";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
	const [showSideDrawer, setShowSideDrawer] = useState(true);

	return (
		<div className="layout__container">
			<Header />
			<SideDrawer
				isOpened={showSideDrawer}
				toggleOpened={() => setShowSideDrawer(prev => !prev)}
			/>
			<Main size={showSideDrawer ? "reduced" : "full"}>{children}</Main>
		</div>
	);
};

export default ExploreLayout;
