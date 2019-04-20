import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 17,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 25,
      lineHeight: 18,
      textAlign: 'justify',
    },
    image: {
      height: 66,
      width: 300,
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Welcome to React Native Elements Storybook</Text>
        <Text style={this.styles.content}>
          This is a UI Component development environment for your React Native app. Here you can
          display and interact with your UI components as stories. A story is a single state of one
          or more UI components. You can have as many stories as you want. In other words a story is
          like a visual test case.
        </Text>
        <Image source={require('../../../assets/rne.storybook.png')} style={this.styles.image} />
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
