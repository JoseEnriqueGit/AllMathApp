module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		}
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'warn',
		'react/prop-type': "off",
		"spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }],
		"eqeqeq": "off",
		"no-dupe-keys": "off",
		"no-useless-escape": "off",
		"react/prop-types": "off",
	},
};