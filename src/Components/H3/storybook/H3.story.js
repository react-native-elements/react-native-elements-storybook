import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"

import React from "react"

import H3 from "../"

const dummyFunction = () => null

storiesOf("H3", module)
	.add("Regular", () => <H3>Regular</H3>)
	.add("Bold", () => <H3 bold>Bold</H3>)
	.add("Very bold", () => <H3 veryBold>Very bold</H3>)
	.add("Ultra bold", () => <H3 ultraBold>Ultra bold</H3>)
	.add("Touchable", () => (
		<H3 ultraBold onPress={dummyFunction}>
			Touchable
		</H3>
	))
	.add("Using Style Array", () => (
		<H3 ultraBold style={[{ color: "red" }, { fontSize: 40 }]}>
			Style Array
		</H3>
	))
