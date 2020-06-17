import React from "react"

import { configure, addDecorator } from "@storybook/react"
import { loadFont, loadFontsFromDirectories } from "./fontLoader"
import { StoryBackground } from "storybook/decorators"
import path from "path"

addDecorator((storyFn) => <StoryBackground>{storyFn()}</StoryBackground>)

const fontFolders = [
	path.resolve(__dirname, "../assets/Fonts/"),
	path.resolve(__dirname, "../node_modules/react-native-vector-icons/")
]

// todo - fix this
// loadFontsFromDirectories(fontFolders)
// loadFont(`${fontFolders[0]}Cabin-Bold.ttf`, "Cabin")

const storyFiles = require.context("../src", true, /\.(stories|story|storybook)\.js$/)
function loadStories() {
	storyFiles.keys().forEach((filename) => storyFiles(filename))
}

configure(loadStories, module)
