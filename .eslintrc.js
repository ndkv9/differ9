module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'jest'],
	rules: {
		indent: [2, 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-unused-vars': 0,
		'no-undef': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		eqeqeq: 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': ['error', 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'no-console': 0,
		'react/prop-types': 0,
	},
}
