import React from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import { ListItem } from 'react-native-elements';

storiesOf('Avatar|Placeholder', module)

  .add('with title placeholder', () => (
    <ListItem
      leftAvatar={{
        title: "LG",
        source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/larrygerard/128.jpg' },
        showEditButton: true,
      }}
      title="Larry Gerrard"
      subtitle="CEO"
      chevron
    />
  ));