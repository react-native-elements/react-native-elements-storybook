import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import { loadStories } from './storyLoader';
import CenterView from '../components/CenterView';
import { name as appName } from '../../app.json';

// using decorator to centering all components
// https://storybook.js.org/docs/basics/writing-stories/#using-decorators
addDecorator(getStory => <CenterView>{getStory()}</CenterView>)

// import stories
configure(() => {
  loadStories()
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
