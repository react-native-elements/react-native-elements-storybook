import { AppRegistry } from "react-native"
import { addDecorator, configure, getStorybookUI } from "@storybook/react-native"
import React from "react"

import { StoryBackground } from "../decorators"
import { name as appName } from "../../app.json"
import { loadStories } from "./storyLoader"

export const setDecorators = () => {
	addDecorator((getStory) => <StoryBackground>{getStory()}</StoryBackground>)
}

setDecorators()

configure(() => {
	loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({})
AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
