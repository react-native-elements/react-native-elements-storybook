import React from 'react';

import { Button as RNEButton } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('RNE Button', module)
  .add('with title', () => <RNEButton title='Hit me!' />)
  .add('with icon', () => (
    <RNEButton
      icon={{
        name: "arrow-right",
        size: 15,
        color: "white",
        type: "font-awesome"
      }}
      title="Button with icon"
    />
  ))
  .add('with Icon component', () => (
    <RNEButton
      icon={<Icon
        name="arrow-right"
        size={15}
        color="white"
        type="font-awesome"
      />}
      title="Button with Icon component"
    />
  ));
