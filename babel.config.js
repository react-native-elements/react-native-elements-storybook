module.exports = function (api) {

  // https://babeljs.io/docs/en/config-files#apicache
  api.cache(true);

  if (process.env.REALM === 'WEB') {
    return {
      plugins: [
        ["module-resolver", {
          "root": ["./"],
          "alias": {
            "assets": "./assets",
            "components": "./src/components",
            "config": "./src/config",
            "modules": "./src/modules",
            "navigation": "./src/navigation",
            "screens": "./src/screens",
            "services": "./src/services",
            "styles": "./styles",
            "stories": "./stories"
          },
          "extensions": [".js", ".ios.js", ".android.js"]
        }, {
          alias: {
            "^react-native$": "react-native-web"
          }
        }]
      ],
      presets: [["react-app"]],
    };
  }

  return {
    plugins: [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "assets": "./assets",
          "components": "./src/components",
          "config": "./src/config",
          "modules": "./src/modules",
          "navigation": "./src/navigation",
          "screens": "./src/screens",
          "services": "./src/services",
          "styles": "./styles",
          "stories": "./stories"
        },
        "extensions": [".js", ".ios.js", ".android.js"]
      }, {
        alias: {
          "@storybook/react": "@storybook/react-native"
        }
      }]
    ],
    presets: ['module:metro-react-native-babel-preset']
  };
};
