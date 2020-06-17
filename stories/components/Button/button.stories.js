import { storiesOf } from "@storybook/react"
import React from "react"

import { Button } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

storiesOf("Button|Button", module)
	.add("with title", () => <Button title={"Solid Button"} />)

	.add("with outline type", () => <Button title={"Outline Button"} type={"outline"} />)

	.add("with clear type", () => <Button title={"Clear Button"} type={"clear"} />)

	.add("with icon object", () => (
		<Button
			icon={{
				name: "arrow-right",
				size: 15,
				color: "white",
				type: "font-awesome"
			}}
			title={"Button with icon object"} />
	))

	.add("with icon component", () => (
		<Button
			icon={<Icon name={"arrow-right"} size={15} color={"white"} type={"font-awesome"} />}
			title={"Button with icon component"} />
	))

	.add("with right icon", () => (
		<Button
			icon={<Icon name={"arrow-right"} size={15} color={"white"} type={"font-awesome"} />}
			iconRight
			title={"Button with right icon"} />
	))

	.add("with loading", () => <Button title={"Loading button"} loading />)
