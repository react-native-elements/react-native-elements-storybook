import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

storiesOf('Input|Input', module)

  .add('Basic input', () => (
    <Input
      placeholder='BASIC INPUT'
    />
  ))

  .add('Input with icon', () => (
    <Input
      placeholder='INPUT WITH ICON'
      leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
    />
  ))

  .add('Input with custom icon', () => (
    <Input
      placeholder='INPUT WITH CUSTOM ICON'
      leftIcon={
        <Icon
          name='user'
          size={24}
          color='black'
        />
      }
    />
  ))

  .add('Input with error message', () => (
    <Input
      placeholder='INPUT WITH ERROR MESSAGE'
      errorStyle={{ color: 'red' }}
      errorMessage='ENTER A VALID ERROR HERE'
    />
  ));
