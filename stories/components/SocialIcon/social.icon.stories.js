import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { SocialIcon } from 'react-native-elements';

storiesOf('SocialIcon|Icon', module)

  .add('basic usage', () => (
    <SocialIcon type='twitter' />
  ))

  .add('with raised false', () => (
    <SocialIcon
      raised={false}
      type='gitlab'
    />
  ))

  .add('reverse icon color scheme', () => (
    <SocialIcon
      light
      type='medium'
    />
  ))

  .add('reverse and light', () => (
    <SocialIcon
      light
      raised={false}
      type='medium'
    />
  ));
