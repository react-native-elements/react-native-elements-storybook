import { storiesOf } from "@storybook/react"
import React from "react"

import { Divider } from "react-native-elements"
import { View } from "react-native"

storiesOf("Divider|Divider", module)
	.add("usage", () => <Divider style={{ backgroundColor: "blue" }} />)

	.add("with height", () => (
		<View style={{ margin: 10 }}>
			<Divider style={{ height: 3, backgroundColor: "#e1e8ee" }} />
		</View>
	))
