module.exports = {
  env: {
    es2020: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/style-prop-object': 'off',
    'prettier/prettier': 'error',
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
};
