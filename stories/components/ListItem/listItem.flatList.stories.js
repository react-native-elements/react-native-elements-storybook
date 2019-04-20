import React from 'react';
import { storiesOf } from '@storybook/react';

import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

storiesOf('ListItem|Using RN FlatList', module)

  .add('Implemented with link and avatar', () => {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ]

    const keyExtractor = (_, index) => index.toString()

    const renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
      />
    )

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    )
  })

  .add('Implemented with custom avatar component', () => {
    const list = [
      {
        name: 'Amy Farha',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      }
    ]

    const keyExtractor = (_, index) => index.toString()

    const renderItem = ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{
          source: item.avatar_url && { uri: item.avatar_url },
          title: item.name[0]
        }}
      />
    )

    return (
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    )
  });