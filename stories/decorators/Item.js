/* eslint-disable react/prefer-stateless-function */
import { Colors } from "styles"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import Divider from "./Divider"
import React, { Component } from "react"

export default class Item extends Component {
	render() {
		const { name, description, children, typeInfo, contentStyle } = this.props

		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					{!!name && (
						<Text key={"name"} style={styles.title}>
							{name}
						</Text>
					)}
					{!!name && !!typeInfo && (
						<Text key={"type"} style={styles.typeInfo}>
							{typeInfo}
						</Text>
					)}
				</View>
				<View style={styles.descriptionContainer}>
					{!!description && <Text style={styles.subtitle}>{description}</Text>}
				</View>
				<View style={contentStyle}>{children}</View>
				<Divider />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10
	},

	titleContainer: {
		paddingHorizontal: 16,
		flexDirection: "row"
	},

	title: {
		color: Colors.themeText,
		fontSize: 16,
		fontWeight: "600",
		textDecorationLine: "underline",
		paddingBottom: 5
	},

	typeInfo: {
		color: "#999",
		fontSize: 16,
		paddingBottom: 5,
		marginLeft: 5
	},

	subtitle: {
		fontSize: 14,
		paddingBottom: 5
	},

	descriptionContainer: {
		paddingHorizontal: 16
	},

	example: {
		marginTop: 24,
		justifyContent: "center"
	}
})
