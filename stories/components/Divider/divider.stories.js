import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { View } from 'react-native';
import { Divider } from 'react-native-elements';

storiesOf('Divider|Divider', module)

  .add('usage', () => (
    <Divider style={{ backgroundColor: 'blue' }} />
  ))

  .add('with height', () => (
    <View style={{ margin: 10 }}>
      <Divider style={{ height: 3, backgroundColor: '#e1e8ee' }} />
    </View>
  ));
