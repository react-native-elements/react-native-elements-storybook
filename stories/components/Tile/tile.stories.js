import { storiesOf } from "@storybook/react"
import React from "react"

import { Text, Tile } from "react-native-elements"
import { View } from "react-native"

storiesOf("Tile|Tile", module)
	.add("Featured Tile", () => (
		<Tile
			imageSrc={{ uri: "https://i.imgur.com/E3CM1z4.jpg" }}
			title={
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
			}
			featured
			caption={"Some Caption Text"} />
	))

	.add("Featured Tile with Icon", () => (
		<Tile
			imageSrc={{ uri: "https://i.imgur.com/E3CM1z4.jpg" }}
			icon={{ name: "play-circle", type: "font-awesome" }}
			featured />
	))

	.add("Tile with Icon", () => (
		<Tile
			imageSrc={{ uri: "https://i.imgur.com/E3CM1z4.jpg" }}
			title={"Lorem ipsum dolor sit amet, consectetur"}
			icon={{ name: "play-circle", type: "font-awesome" }} // optional
			contentContainerStyle={{ height: 70 }}>
			<View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
				<Text>Caption</Text>
				<Text>Caption</Text>
			</View>
		</Tile>
	))
