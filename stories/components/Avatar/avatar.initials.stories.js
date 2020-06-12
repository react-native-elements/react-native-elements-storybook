import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { Avatar } from 'react-native-elements';

storiesOf('Avatar|Initials', module)

  .add('rounded Avatar', () => (
    <Avatar
      size="small"
      rounded
      title="MT"
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('medium size', () => (
    <Avatar
      size="medium"
      title="BP"
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('large size', () => (
    <Avatar
      size="large"
      title="LW"
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('extra large and rounded', () => (
    <Avatar
      size="xlarge"
      rounded
      title="CR"
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ));