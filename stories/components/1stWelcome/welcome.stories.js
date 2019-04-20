import React from 'react';
import { storiesOf } from '@storybook/react';

import Welcome from './Welcome';

storiesOf('Welcome', module)

  .add('to Storybook', () => <Welcome />);
