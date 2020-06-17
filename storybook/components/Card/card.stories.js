import { storiesOf } from "@storybook/react"
import React from "react"

import { Button, Card, Icon, Image, ListItem, Text } from "react-native-elements"
import { StyleSheet, View } from "react-native"

const users = [
	{
		name: "Johh Smith",
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
	},
	{
		name: "Sarah Parker",
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg"
	},
	{
		name: "Paul Allen",
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
	},
	{
		name: "Terry Andrews",
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg"
	},
	{
		name: "Andy Vitale",
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg"
	},
	{
		name: "Katy Friedson",
		avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
	}
]

storiesOf("Card|Card", module)
	.add("Implemented with header", () => {
		const styles = StyleSheet.create({
			image: {
				height: 32,
				width: 32
			},
			name: {
				marginLeft: 4,
				marginTop: 8
			},
			user: {
				flexDirection: "row",
				marginBottom: 4
			}
		})

		return (
			<Card title={"CARD WITH DIVIDER"}>
				{users.map((u, i) => {
					return (
						<View key={i} style={styles.user}>
							<Image style={styles.image} resizeMode={"cover"} source={{ uri: u.avatar }} />
							<Text style={styles.name}>{u.name}</Text>
						</View>
					)
				})}
			</Card>
		)
	})

	.add("Implemented without header, using ListItem component", () => (
		<Card containerStyle={{ padding: 0, alignSelf: "stretch" }}>
			{users.map((u, i) => {
				return (
					<ListItem
						key={i}
						roundAvatar
						title={u.name}
						leftAvatar={{ source: { uri: u.avatar } }}
						bottomDivider
						titleStyle={{ marginLeft: 8 }}
					/>
				)
			})}
		</Card>
	))

	.add("Implemented with Text and Button as children", () => (
		<Card title={"HELLO WORLD"} image={require("../../../assets/Images/logo-white-splash.png")}>
			<Text style={{ marginBottom: 10 }}>
				The idea with React Native Elements is more about component structure than actual design.
			</Text>
			<Button
				icon={<Icon name={"code"} color={"#ffffff"} />}
				backgroundColor={"#03A9F4"}
				buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
				title={"VIEW NOW"}
			/>
		</Card>
	))
