import { storiesOf } from "@storybook/react-native"

import React from "react"

import { Text, View } from "components"
import Image from "../"

const source =
	"https://quadio-staging-quadiostagingrawaudiobucket-121twiwemuzuj.s3.amazonaws.com/us-east-1%3Acd786481-18a1-4df9-924b-ed096d2cc871/1574111488371/kelpie.aif"
const onPress = () => null

storiesOf("Image", module)
	.add("Sizes", () => (
		<View>
			<Text style={{ marginBottom: 10 }}>Custom Size</Text>
			<Image size={20} source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Small</Text>
			<Image small source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Default</Text>
			<Image source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Large</Text>
			<Image large source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Showcase</Text>
			<Image showcase source={source} />
		</View>
	))
	.add("Round", () => (
		<View>
			<Text style={{ marginBottom: 10 }}>Custom Size</Text>
			<Image round size={20} source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Small</Text>
			<Image round small source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Default</Text>
			<Image round source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Large</Text>
			<Image round large source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Showcase</Text>
			<Image round showcase source={source} />
		</View>
	))
	.add("Pressable", () => (
		<View>
			<Text style={{ marginBottom: 10 }}>Custom Size</Text>
			<Image onPress={onPress} size={20} source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Small</Text>
			<Image onPress={onPress} small source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Default</Text>
			<Image onPress={onPress} source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Large</Text>
			<Image onPress={onPress} large source={source} />
			<Text style={{ marginTop: 30, marginBottom: 10 }}>Showcase</Text>
			<Image onPress={onPress} showcase source={source} />
		</View>
	))
	.add("As Background", () => <Image background source={source} />)
