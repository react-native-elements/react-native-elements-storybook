import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { ListItem } from 'react-native-elements';

storiesOf('ListItem|Badge', module)

  .add('Example badge usage', () => {
    return (
      <ListItem
        badge={{
          value: 3,
          textStyle: { color: 'orange' },
          containerStyle: { marginTop: 20 }
        }}
        containerStyle={{
          borderColor: 'rgb(32, 137, 220)',
          borderWidth: 1
        }}
      />
    )
  });