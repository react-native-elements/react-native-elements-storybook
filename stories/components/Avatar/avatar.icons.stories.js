import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { Avatar } from 'react-native-elements';

storiesOf('Avatar|Icons', module)

  .add('default size', () => (
    <Avatar
      rounded
      icon={{ name: 'user', type: 'font-awesome' }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('small size', () => (
    <Avatar
      size="small"
      rounded
      icon={{ name: 'cake', type: 'material' }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('medium size', () => (
    <Avatar
      size="medium"
      overlayContainerStyle={{ backgroundColor: 'blue' }}
      icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('large size', () => (
    <Avatar
      size="large"
      icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
      overlayContainerStyle={{ backgroundColor: 'white' }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('xlarge size', () => (
    <Avatar
      size="xlarge"
      rounded
      icon={{ name: 'home', type: 'font-awesome' }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ))

  .add('with fixed size', () => (
    <Avatar
      size={200}
      rounded
      icon={{ name: 'user', type: 'font-awesome' }}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  ));