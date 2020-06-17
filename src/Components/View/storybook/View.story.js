import { storiesOf } from "@storybook/react-native"
import React from "react"

import View from "../"

storiesOf("View", module)
	.add("Padding", () => <View padH={10} padV={20} content style={{ backgroundColor: "orange" }} />)
	.add("Touchable", () => (
		<View onPress={() => null} padH={10} padV={20} content style={{ backgroundColor: "red" }} />
	))
	.add("Flex", () => (
		<View flex={1}>
			<View flex={1} style={{ backgroundColor: "yellow" }} />
			<View flex={4} style={{ backgroundColor: "deepskyblue" }} />
			<View flex={2} style={{ backgroundColor: "green" }} />
		</View>
	))
