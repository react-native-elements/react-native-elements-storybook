/* eslint-disable react/prefer-stateless-function */
import { Colors } from "styles"
import { ScrollView, StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import Divider from "./Divider"
import React, { Component } from "react"

export default class Explorer extends Component {
	render() {
		const { title, exportName, description, children, contentStyle } = this.props

		return (
			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.exportedNameLabelText}>
						Exported name: <Text style={styles.exportedNameText}>{exportName}</Text>
					</Text>
					<View style={styles.descriptionContainer}>
						{!!description && <Text style={styles.descriptionText}>{description}</Text>}
					</View>
				</View>
				<Divider />

				<View style={contentStyle}>{children}</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 16,
		paddingBottom: 32,
		paddingHorizontal: 0
	},

	titleContainer: {
		paddingHorizontal: 16,
		marginBottom: 16
	},

	title: {
		fontSize: 27,
		fontWeight: "800",
		marginBottom: 8
	},

	exportedNameLabelText: {
		fontSize: 14
	},

	exportedNameText: {
		fontSize: 14,
		fontWeight: "700",
		color: Colors.themePrimary
	},

	descriptionContainer: {
		marginTop: 8
	},

	descriptionText: {
		fontSize: 12
	}
})
