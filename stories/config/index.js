import React from 'react';
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';

import { loadStories } from './storyLoader';
import { StoryBackground } from '../decorators';
import { name as appName } from '../../app.json';

export const setDecorators = () => {
  addDecorator(getStory => <StoryBackground>{getStory()}</StoryBackground>)
}

setDecorators()

configure(() => {
  loadStories()
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
