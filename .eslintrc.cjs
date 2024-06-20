module.exports = {
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    // Add specific ESLint rules here if needed
  }
}
