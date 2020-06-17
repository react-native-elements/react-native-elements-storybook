import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"
import React from "react"

import H2 from "../"

const dummyFunction = () => null

storiesOf("H2", module)
	.add("Regular", () => <H2>Regular</H2>)
	.add("Bold", () => <H2 bold>Bold</H2>)
	.add("Very bold", () => <H2 veryBold>Very bold</H2>)
	.add("Ultra bold", () => <H2 ultraBold>Ultra bold</H2>)
	.add("Touchable", () => (
		<H2 ultraBold onPress={dummyFunction}>
			Touchable
		</H2>
	))
	.add("Using Style Array", () => (
		<H2 ultraBold style={[{ color: "red" }, { fontSize: 40 }]}>
			Style Array
		</H2>
	))
