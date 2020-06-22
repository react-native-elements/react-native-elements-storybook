// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path")

module.exports = ({ config }) => {
	config.module.rules.push(
		// add your custom rules.
		{
			test: /\.js$/,
			include: [
				path.resolve(__dirname, "../node_modules/react-native/"),
				path.resolve(__dirname, "../node_modules/react-native-elements/"),
				path.resolve(__dirname, "../node_modules/react-native-ratings/"),
				path.resolve(__dirname, "../node_modules/react-native-vector-icons/")
			],
			use: {
				loader: "babel-loader",
				options: {
					cacheDirectory: false,
					presets: [["react-app", { disableImportExportTransform: true }]],
					plugins: [
						// needed to support async/await
						"@babel/plugin-transform-runtime",
						"@babel/plugin-proposal-class-properties"
					]
				}
			}
		},
		// loader for fonts
		{
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			use: [
				{
					loader: "url-loader",
					query: {
						name: "[name].[ext]"
					}
				}
			],
			include: [
				path.resolve(__dirname, "../assets/Fonts/"),
				path.resolve(__dirname, "../node_modules/react-native-vector-icons/")
			]
		}
	)

	return config
}
