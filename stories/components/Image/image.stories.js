import React from 'react';
import { storiesOf } from '@storybook/react';

import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

storiesOf('Image|Image', module)

  .add('Standard Image', () => (
    <Image
      source={{ uri: 'https://picsum.photos/200/200' }}
      style={{ width: 200, height: 200 }}
    />
  ))

  .add('Image with custom placeholder content', () => (
    <Image
      source={{ uri: 'https://picsum.photos/300/300' }}
      style={{ width: 200, height: 200 }}
      PlaceholderContent={<ActivityIndicator />}
    />
  ));
