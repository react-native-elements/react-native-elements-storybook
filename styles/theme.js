import Colors from "./colors";

// Style theme for react-native-elements
const primary = Colors.themeText;
const secondary = Colors.themeTextLight;

// Export object formatted for react-native-elements ThemeProvider
const ElementsTheme = {
  primary,
  secondary,

  // Button
  Button: {
    activeOpacity: 0.9,
    backgroundColor: Colors.themeBackground,
    titleStyle: {
      color: Colors.themeText,
      fontFamily: "Cabin",
      fontWeight: "900",
    },
  },

  // Text
  Text: {
    style: {
      fontFamily: "Cabin",
      fontWeight: "400",
      color: Colors.themeText,
    },
  },

  //Divider
  Divider: {
    style: {
      backgroundColor: Colors.themeBackgroundAccent,
    },
  },
};

export default ElementsTheme;
