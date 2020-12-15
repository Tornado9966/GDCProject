module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  extends: ['airbnb', "eslint:recommended", "plugin:react/recommended"],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'no-undef': 0,
    'react/jsx-indent': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'indent': 0,
    'no-tabs': 0,
    'import/no-unresolved': 0,
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-wrap-multilines': 0,
    "react/forbid-prop-types": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 0,
    'no-unused-expressions': 0,
    "semi": "error",
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/no-unused-prop-types": 0,
    "react/no-access-state-in-setstate": 0,
    "quotes": [
      "error",
      "single"
    ]
  }
};