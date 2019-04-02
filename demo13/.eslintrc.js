module.exports = {
  root: true,
  extends: 'airbnb',
  "parser": 'babel-eslint',
  env: {
    node: true, // node环境
    browser: true, // 浏览器环境
  },
  plugins: [
    'html'
  ],
  rules: {
    'no-console': 'off',
    'arrow-parens': 0,
    'window': true,
    'import/no-extraneous-dependencies': 0,
  },
};
