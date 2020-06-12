import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { Avatar } from 'react-native-elements';

storiesOf('Avatar|Standard', module)

  .add('standard Avatar', () => (
    <Avatar
      rounded
      source={{
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      }}
    />
  ))

  .add('with Title', () => (
    <Avatar rounded title="MD" />
  ))

  .add('with Icon', () => (
    <Avatar rounded icon={{ name: 'home', type: 'font-awesome' }} />
  ))

  .add('with edit button', () => (
    <Avatar
      source={{
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      }}
      showEditButton
    />
  ));