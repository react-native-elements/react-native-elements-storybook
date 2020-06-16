import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";

import StorybookUIRoot from "storybook/config";

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
