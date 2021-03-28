// eslint-disable-next-line import/no-extraneous-dependencies
import css from "styled-jsx/css";

export const globals = css.global`
	@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;300;400;500;600&display=swap");

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Roboto Mono";
	}
	body {
		height: 100vh;
		width: 100vw;
		background-color: #121212;
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
		font-size: 1em;
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

	li {
		list-style: none;
	}
`;
