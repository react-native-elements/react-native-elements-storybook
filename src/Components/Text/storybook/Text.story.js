import { storiesOf } from "@storybook/react-native"

import React from "react"

import Text from "../"

const dummyFunction = () => null

storiesOf("Text", module)
	.add("Regular", () => <Text>Regular</Text>)
	.add("Bold", () => <Text bold>Bold</Text>)
	.add("Very bold", () => <Text veryBold>Very bold</Text>)
	.add("Ultra bold", () => <Text ultraBold>Ultra bold</Text>)
	.add("Touchable", () => (
		<Text ultraBold onPress={dummyFunction}>
			Touchable
		</Text>
	))
	.add("Using Style Array", () => (
		<Text ultraBold style={[{ color: "red" }, { fontSize: 40 }]}>
			Style Array
		</Text>
	))
