import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"
import React from "react"

import H1 from "../"

const dummyFunction = () => null

storiesOf("H1", module)
	.add("Regular", () => <H1>Regular</H1>)
	.add("Bold", () => <H1 bold>Bold</H1>)
	.add("Very bold", () => <H1 veryBold>Very bold</H1>)
	.add("Ultra bold", () => <H1 ultraBold>Ultra bold</H1>)
	.add("Touchable", () => (
		<H1 ultraBold onPress={dummyFunction}>
			Touchable
		</H1>
	))
	.add("Using Style Array", () => (
		<H1 ultraBold style={[{ color: "red" }, { fontSize: 40 }]}>
			Style Array
		</H1>
	))
