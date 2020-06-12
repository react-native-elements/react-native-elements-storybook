import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import Welcome from './Welcome';

storiesOf('Welcome', module)

  .add('to Storybook', () => <Welcome />);
