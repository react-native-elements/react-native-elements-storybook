import { storiesOf } from "@storybook/react"
import React from "react"

import { Icon } from "react-native-elements"

storiesOf("Icon|Icon", module)
	.add("basic usage", () => <Icon name={"rowing"} />)

	.add("with color", () => <Icon name={"g-translate"} color={"#00aced"} />)

	.add("change default font type", () => (
		<Icon name={"sc-telegram"} type={"evilicon"} color={"#517fa4"} />
	))

	.add("reverse icon", () => (
		<Icon reverse name={"ios-american-football"} type={"ionicon"} color={"#517fa4"} />
	))

	.add("raised icon", () => (
		<Icon
			raised
			name={"heartbeat"}
			type={"font-awesome"}
			color={"#f50"}
			onPress={() => console.log("hello")} />
	))
