import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import tw from "twin.macro";
import { ClientContextProvider } from "../context/ApolloProvider";

const GlobalStyles = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Roboto", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
	height: 100vh;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.17em;
}

h4 {
  font-size: 1.00em;
}

h5 {
  font-size: 0.83em;
}

h6 {
  font-size: 0.67em;
}

a {
	display: block;
	cursor: pointer;
}

`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<ClientContextProvider>
				<Component {...pageProps} />
			</ClientContextProvider>
		</>
	);
}

export default MyApp;
