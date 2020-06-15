/* eslint-disable react/prefer-stateless-function */
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import React, { Component } from "react"

export default class PropsList extends Component {
	render() {
		const { list } = this.props

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Props</Text>
				{list.map(({ key, type }, idx) => (
					<View key={`props-list-item-${idx}`} style={styles.propContainer}>
						<Text style={styles.propKey}>{key}</Text>
						<Text style={styles.propType}>{type}</Text>
					</View>
				))}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 32,
		paddingBottom: 32,
		paddingHorizontal: 16
	},

	title: {
		fontSize: 20,
		fontWeight: "800",
		marginBottom: 10
	},

	propContainer: {
		backgroundColor: "#FFFFFF11",
		borderColor: "#00000044",
		borderRadius: 5,
		borderWidth: 1,
		paddingHorizontal: 8,
		paddingVertical: 6,
		marginBottom: 2
	},

	propKey: {
		fontWeight: "700",
		fontSize: 15
	},

	propType: {
		fontWeight: "300",
		fontSize: 12
	}
})
