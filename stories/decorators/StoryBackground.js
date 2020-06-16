/* eslint-disable react/prefer-stateless-function */
import { Colors, Theme } from "styles";
import { StyleSheet, View, Text } from "react-native";
import { ThemeProvider } from "react-native-elements";
import PropTypes from "prop-types";
import React from "react";

class StoryBackground extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <View style={styles.main}>{this.props.children}</View>
      </ThemeProvider>
    );
  }
}

StoryBackground.defaultProps = {
  children: <View></View>,
};

StoryBackground.propTypes = {
  children: PropTypes.node,
};

export default StoryBackground;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.themeBackground,
  },
});
