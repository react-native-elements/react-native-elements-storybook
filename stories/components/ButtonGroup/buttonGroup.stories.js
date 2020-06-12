import React, { Component } from 'react';
import { storiesOf } from 'react-native-hybrid-storybook';

import ButtonGroupComponents from './ButtonGroupComponents';
import ButtonGroupStrings from './ButtonGroupStrings';

storiesOf('Button|ButtonGroup', module)

  .add('Using strings', () => (
    <ButtonGroupStrings />
  ))

  .add('Using components', () => (
    <ButtonGroupComponents />
  ));
