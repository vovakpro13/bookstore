module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    globals: {
        window: true,
        document: true,
        localStorage: true,
        sessionStorage: true,
        fetch: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],

    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                'no-console': 'warn',
                'no-debugger': 'error',
                'no-empty-pattern': 'error',
                'object-shorthand': 'error',
                'prefer-object-spread': 'error',
                'array-callback-return': 'error',
                'prefer-destructuring': 'error',
                'prefer-template': 'error',
                'no-eval': 'error',
                'prefer-const': 'warn',
                'prefer-rest-params': 'error',
                'prefer-arrow-callback': 'error',
                'default-param-last': 'warn',
                'no-duplicate-imports': 'error',
                'dot-notation': 'warn',
                'no-else-return': 'warn',
                eqeqeq: 'warn',
                'no-nested-ternary': 'warn',
                'no-unneeded-ternary': 'warn',
                'no-mixed-operators': 'warn',
                'no-use-before-define': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error'],
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                'nonblock-statement-body-position': 'warn',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-empty-function': 'warn',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/interface-name-prefix': 'off',
                'react/prop-types': 'off',
                'react-hooks/rules-of-hooks': 'error',
                'import/no-unresolved': 'error',
                'import/no-mutable-exports': 'error',
                'import/first': 'error',
                'import/default': 'error',
                'import/newline-after-import': ['warn', { count: 1 }],
                'import/no-named-as-default-member': 'error',
                'import/no-webpack-loader-syntax': 'off',
                'react-hooks/exhaustive-deps': 'off',
                'import/no-unused-modules': [1, { unusedExports: true }],
            },
        },
    ],

    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            // use <root>/tsconfig.json
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
            },
        },
    },
};
