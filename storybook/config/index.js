import { addDecorator, configure, getStorybookUI } from "@storybook/react-native"
import React from "react"

import { StoryBackground } from "../decorators"
import { loadStories } from "./storyLoader"

addDecorator((getStory) => <StoryBackground>{getStory()}</StoryBackground>)

configure(() => {
	loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({})

export default StorybookUIRoot
