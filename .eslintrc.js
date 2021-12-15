module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      'no-tabs': 0,
      indent: [ 1, 'tab' , { SwitchCase: 1 } ],
      'vue/html-indent': [ 4, 'tab' ],
      'vue/script-indent': [ 4, 'tab' , { SwitchCase: 1 } ],
      'space-before-function-paren': [ 'error', 'never' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'never' ],
      'vue/return-in-computed-property': [ 'error', { "treatUndefinedAsUnspecified": true } ],
      "prettier/prettier": ["error", {"singleQuote": true, "tabWidth": 4, "semi": false}]
    },
    overrides: [
      {
        files: ["*.vue"],
        rules: {
          indent: "off"
        }
      }
    ],
    parserOptions: {
      parser: "babel-eslint"
    }
  };
  