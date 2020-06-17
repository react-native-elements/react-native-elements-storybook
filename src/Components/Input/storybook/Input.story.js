import { storiesOf } from "@storybook/react-native"

import React from "react"

import { Text, View } from "../../"
import Input from "../"

storiesOf("Input", module).add("All Types", () => (
	<View style={{ width: "100%" }}>
		<Input label={"Default With LabelIcon"} />
		<Input firstName label={"First Name"} />
		<Input lastName label={"Last Name"} />
		<Input email label={"Email"} />
		<Input password label={"Password"} />
		<Input newPassword label={"New Password"} />
		<Input verificationCode label={"Verification Code"} />
		<Input number label={"Number"} />
	</View>
))
