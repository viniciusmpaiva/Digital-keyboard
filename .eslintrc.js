module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 2,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'default-param-last': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-unused-expressions': 0,
    'prefer-const': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
