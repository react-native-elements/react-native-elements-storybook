import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { Text, View } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';

storiesOf('Badge|Badge', module)

  .add('Standard badge', () => (
    <View>
      <Badge value="99+" status="error" />
      <Badge value={<Text>My Custom Badge</Text>}></Badge>
    </View>
  ))

  .add('Mini badge', () => (
    <View>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="primary" />
      <Badge status="warning" />
    </View>
  ))

  .add('Avatar with mini badge', () => (
    <View style={{ margin: 10, width: 50 }}>
      <Avatar
        rounded
        source={{
          uri: 'https://randomuser.me/api/portraits/men/41.jpg',
        }}
        size="large"
      />

      <Badge
        status="success"
        containerStyle={{ position: 'absolute', top: 10, right: -20 }}
      />
    </View>
  ))

  .add('withBadge HOC', () => {
    const BadgedIcon = withBadge(1)(Icon)

    return (
      <BadgedIcon type="ionicon" name="ios-chatbubbles" />
    )
  });