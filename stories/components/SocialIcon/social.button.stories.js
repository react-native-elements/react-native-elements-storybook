import { storiesOf } from "@storybook/react"
import React from "react"

import { SocialIcon } from "react-native-elements"

storiesOf("SocialIcon|Button", module)
	.add("button type", () => <SocialIcon button type={"medium"} />)

	.add("Facebook type", () => (
		<SocialIcon title={"Sign In With Facebook"} button type={"facebook"} />
	))

	.add("Twitter type", () => <SocialIcon title={"Some Twitter Message"} button type={"twitter"} />)

	.add("button and light", () => <SocialIcon button light type={"instagram"} />)
