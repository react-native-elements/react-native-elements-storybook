import { storiesOf } from "@storybook/react-native"

import React from "react"

import TouchableOpacity from "../"
import View from "../../View"

storiesOf("TouchableOpacity", module).add("View", () => (
	<TouchableOpacity>
		<View style={{ width: 100, height: 100, backgroundColor: "pink" }} />
	</TouchableOpacity>
))
