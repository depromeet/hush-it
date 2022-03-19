import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Navigator from './RootNavigator';

const Container = Navigator;

storiesOf('App|navigation', module)
  .addDecorator(withKnobs)
  .add(
    'Root',
    () => {
      return <Container />;
    },
    {
      notes: 'Container',
    },
  );
