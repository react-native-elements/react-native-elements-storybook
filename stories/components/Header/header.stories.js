import { storiesOf } from "@storybook/react"
import React from "react"

import { Header } from "react-native-elements"
import { Text } from "react-native"

import MyCustomCenterComponent from "./MyCustomCenterComponent"
import MyCustomLeftComponent from "./MyCustomLeftComponent"
import MyCustomRightComponent from "./MyCustomRightComponent"

storiesOf("Header|Header", module)
	.add("with default components", () => (
		<Header
			leftComponent={{ icon: "menu", color: "#fff" }}
			centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
			rightComponent={{ icon: "home", color: "#fff" }} />
	))

	.add("Left aligned center component", () => (
		<Header
			placement={"left"}
			leftComponent={{ icon: "menu", color: "#fff" }}
			centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
			rightComponent={{ icon: "home", color: "#fff" }} />
	))

	.add("with custom components passed in through props", () => (
		<Header
			leftComponent={<MyCustomLeftComponent />}
			centerComponent={<MyCustomCenterComponent />}
			rightComponent={<MyCustomRightComponent />} />
	))

	.add("with mixed components", () => {
		const renderCenterComponent = () => (
			<Text style={{ fontWeight: "bold", color: "#fff" }}>React Native Elements</Text>
		)

		return (
			<Header
				leftComponent={<MyCustomLeftComponent />}
				centerComponent={renderCenterComponent()}
				rightComponent={{ icon: "home", style: { color: "#fff" } }} />
		)
	})

	.add("with custom components passed in as children", () => (
		<Header>
			<MyCustomLeftComponent />
			<MyCustomCenterComponent />
			<MyCustomRightComponent />
		</Header>
	))

	.add("Header customisability", () => (
		<Header
			statusBarProps={{ barStyle: "light-content" }}
			barStyle={"light-content"} // or directly
			leftComponent={<MyCustomLeftComponent />}
			centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
			containerStyle={{
				backgroundColor: "#3D6DCC",
				justifyContent: "space-around"
			}} />
	))
