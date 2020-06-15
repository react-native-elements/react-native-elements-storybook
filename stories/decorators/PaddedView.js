/* eslint-disable react/prefer-stateless-function */
import { StyleSheet, View } from "react-native"
import React, { Component } from "react"

export default class PaddedView extends Component {
	render() {
		return <View style={styles.description}>{this.props.children}</View>
	}
}

const styles = StyleSheet.create({
	description: {
		paddingHorizontal: 16
	}
})
