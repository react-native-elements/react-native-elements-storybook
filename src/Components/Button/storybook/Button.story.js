import { storiesOf } from "@storybook/react-native"
import React from "react"

import { Text, View } from "components"
import Colors from "styles/colors"
import Button from "../"

storiesOf("Button", module)
	.add("Follow Buttons", () => (
		<View>
			<View style={{ marginBottom: 20 }}>
				<Button bold rounded outline opaque borderColor={Colors.grey4}>
					Follow
				</Button>
			</View>
			<Button rounded outline opaque borderColor={Colors.grey4}>
				Following
			</Button>
		</View>
	))
	.add("Small Buttons", () => (
		<View>
			<Text style={{ marginBottom: 5 }}>Standard/bold</Text>
			<Button small bold background={"gray"}>
				Small
			</Button>
			<Text style={{ marginTop: 20, marginBottom: 5 }}>Round/opaque/outline</Text>
			<Button small rounded outline opaque borderColor={Colors.grey4}>
				Small
			</Button>
		</View>
	))
	.add("Standard Buttons", () => (
		<View>
			<Text style={{ marginBottom: 5 }}>Standard/bold</Text>
			<Button bold background={"gray"}>
				Standard
			</Button>
			<Text style={{ marginTop: 20, marginBottom: 5 }}>Round/opaque/outline</Text>
			<Button rounded outline opaque borderColor={Colors.grey4}>
				Standard
			</Button>
		</View>
	))
	.add("Large Buttons", () => (
		<View>
			<Text style={{ marginBottom: 5 }}>Standard/bold</Text>
			<Button bold large background={"gray"}>
				Large
			</Button>
			<Text style={{ marginTop: 20, marginBottom: 5 }}>Round/opaque/outline</Text>
			<Button large rounded outline opaque borderColor={Colors.grey4}>
				Large
			</Button>
		</View>
	))
	.add("Full Buttons", () => (
		<View style={{ width: "100%" }}>
			<Text style={{ marginBottom: 5 }}>Standard/bold</Text>
			<Button full bold background={"gray"}>
				Full
			</Button>
			<Text style={{ marginTop: 20, marginBottom: 5 }}>Round/opaque/outline</Text>
			<Button full rounded outline opaque borderColor={Colors.grey4}>
				Full
			</Button>
		</View>
	))
