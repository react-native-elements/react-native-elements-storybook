import { storiesOf } from "@storybook/react"
import React from "react"

import { Image, StyleSheet, Text, View } from "react-native"
import { ListItem } from "react-native-elements"

storiesOf("ListItem|Custom View", module).add("Implemented with custom View for Subtitle", () => {
	const styles = StyleSheet.create({
		subtitleView: {
			flexDirection: "row",
			paddingLeft: 10,
			paddingTop: 5
		},
		ratingImage: {
			height: 19.21,
			width: 100
		},
		ratingText: {
			paddingLeft: 10,
			color: "grey"
		}
	})

	return (
		<ListItem
			title={"Limited supply! Its like digital gold!"}
			subtitle={
				<View style={styles.subtitleView}>
					<Image source={require("../../../src/logo.png")} style={styles.ratingImage} />
					<Text style={styles.ratingText}>5 months ago</Text>
				</View>
			}
			leftAvatar={{
				source: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/larrygerard/128.jpg" }
			}}
			containerStyle={{ width: 400 }} />
	)
})
