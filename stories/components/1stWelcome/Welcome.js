import { Image, Text } from "react-native-elements"
import { View } from "react-native"
import PropTypes from "prop-types"
import React from "react"

export default class Welcome extends React.Component {
	styles = {
		wrapper: {
			flex: 1,
			paddingHorizontal: 12,
			paddingVertical: 24,
			justifyContent: "center",
			alignItems: "center"
		},
		header: {
			fontSize: 17,
			marginBottom: 18
		},
		content: {
			fontSize: 12,
			marginBottom: 25,
			lineHeight: 18,
			textAlign: "justify"
		},
		image: {
			height: 66,
			width: 300
		}
	}

	render() {
		return (
			<View style={this.styles.wrapper}>
				<Text style={this.styles.header}>Welcome to Quadio Elements Storybook</Text>
				<Text style={this.styles.content}>
					This is a the shared library for everything Quadio front end. Components, queries,
					services, constants, and styles live here, and can be imported into both web and native
					projects with no additional config work required. Isn't that something?
				</Text>
				<Image
					source={require("../../../assets/Images/logo-white-splash.png")}
					style={this.styles.image} />
			</View>
		)
	}
}

Welcome.defaultProps = {
	showApp: null
}

Welcome.propTypes = {
	showApp: PropTypes.func
}
