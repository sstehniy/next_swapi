module.exports = {
	extends: [
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"prettier",
	],
	plugins: ["react", "@typescript-eslint", "prettier"],
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		createDefaultProgram: true,
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
	rules: {
		"linebreak-style": "off",
		"react/react-in-jsx-scope": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"react/jsx-props-no-spreading": 0,
		"react/prop-types": 0,
		"import/prefer-default-export": 0,
		"import/no-cycle": 0,
		"react/require-default-props": 0,
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"jsx-a11y/no-noninteractive-tabindex": 0,
		"consistent-return": 0,
	},
};
