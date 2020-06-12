module.exports = function (api) {

  // https://babeljs.io/docs/en/config-files#apicache
  api.cache(true);

  if (process.env.REALM === 'WEB') {
    return {
      presets: [["react-app"]],
      plugins: [
        ["module-resolver", {
          alias: {
            "^react-native$": "react-native-web"
          }
        }],
      ],
    };
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module-resolver", {
        alias: {
          "@storybook/react": "@storybook/react-native"
        }
      }],
    ],
  };
};
