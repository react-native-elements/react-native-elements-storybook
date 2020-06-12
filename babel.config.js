module.exports = function (api) {

  // https://babeljs.io/docs/en/config-files#apicache
  api.cache(true);

  if (process.env.REALM === 'WEB') {
    return {
      plugins: [
        ["module-resolver", {
          alias: {
            "^react-native$": "react-native-web"
          }
        }],
        "wildcard"
      ],
      presets: [["react-app"]],
    };
  }

  return {
    plugins: [
      ["module-resolver", {
        alias: {
          "@storybook/react": "@storybook/react-native"
        }
      }],
      "wildcard"
    ],
    presets: ['module:metro-react-native-babel-preset']
  };
};
