module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "jest": true,
  },
  "extends": [
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "globals": {},
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 5,
      "project": "tsconfig.json",
      "sourceType": "module",
      "ecmaFeatures": {
          "modules": true
      }
  },
  "plugins": [
      "@typescript-eslint",
      "@typescript-eslint/tslint"
  ],
  "settings": {},
  "rules": {
      "@typescript-eslint/indent": ["error", 2, {
          "SwitchCase": 1,
          "CallExpression": {"arguments": "first"},
          "FunctionExpression": {"parameters": "first"},
          "FunctionDeclaration": {"parameters": "first"}
      }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-object-literal-type-assertion": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/member-delimiter-style": [
          "error",
          {
              "singleline": {
                  "delimiter": "semi",
                  "requireLast": true
              }
          }
      ]
  }
};