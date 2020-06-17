import { configure } from "@storybook/react"
import { setDecorators } from "storybook/config"
import { loadFont, loadFontsFromDirectories } from "./fontLoader"
import path from "path"

const fontFolders = [
	path.resolve(__dirname, "../assets/Fonts/"),
	path.resolve(__dirname, "../node_modules/react-native-vector-icons/")
]

// todo - fix this
// loadFontsFromDirectories(fontFolders)
// loadFont(`${fontFolders[0]}Cabin-Bold.ttf`, "Cabin")

setDecorators()

const storyFiles = {
	...require.context("../src", true, /\.(stories|story|storybook)\.js$/),
	...require.context("../storybook", true, /\.(stories|story|storybook)\.js$/)
}

function loadStories() {
	storyFiles.keys().forEach((filename) => storyFiles(filename))
}

configure(loadStories, module)
