import { storiesOf } from "@storybook/react"
import React from "react"

import { PricingCard } from "react-native-elements"

storiesOf("Pricing|PricingCard", module)
	.add("basic usage", () => (
		<PricingCard
			color={"#4f9deb"}
			title={"Free"}
			price={"$0"}
			info={["1 User", "Basic Support", "All Core Features"]}
			button={{ title: "GET STARTED", icon: "flight-takeoff" }} />
	))

	.add("with buttonStyle", () => (
		<PricingCard
			color={"#a72ce9"}
			title={"Starter"}
			price={"IDR 200k"}
			info={["10 Users", "Basic Support", "All Core Features", "Premium Addons Unlocked"]}
			button={{
				title: "GET STARTED",
				icon: "flight-takeoff",
				buttonStyle: {
					flexDirection: "row-reverse",
					justifyContent: "space-around",
					paddingHorizontal: 111
				}
			}}
			onButtonPress={() => console.log("Cool, you hit me!")}
			containerStyle={{ width: 400 }} />
	))
