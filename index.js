import { AppRegistry } from "react-native"

import { name as appName } from "./app.json"
import StorybookUIRoot from "./stories/config"

AppRegistry.registerComponent(appName, () => StorybookUIRoot)
