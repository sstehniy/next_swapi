import Head from "next/head";
import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";

const GlobalStyles = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body{
	background-color: #ffffff;
}
`;

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<title>title</title>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
