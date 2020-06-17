import { ActivityIndicator, Dimensions, StyleSheet } from "react-native"
import React from "react"

import Text from "../Text"
import View from "../View"

const deviceHeight = Dimensions.get("window").height
const fontSizeSmall = 12

export default class Spinner extends React.PureComponent {
	render() {
		return (
			<View style={!this.props.fit && styles.container}>
				<ActivityIndicator color={this.props.color || "white"} size={this.props.size || "small"} />
				{this.props.label && this.props.label.length && (
					<Text bold style={styles.label}>
						{this.props.label}
					</Text>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		minHeight: 200,
		maxHeight: deviceHeight / 3
	},

	label: {
		marginTop: 5,
		fontSize: fontSizeSmall
	}
})
