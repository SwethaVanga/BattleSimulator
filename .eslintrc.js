/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
    'env': {
        'browser': true,
				'es2021': true,
				'node': true,
				'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
		  	'indent': 0,
        'quotes': [
         'error',
         'single'
    ],
        'semi': [
         'error',
         'never'
		],
		'no-var': 1,
    'eqeqeq': 1,
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 0
    }
}
