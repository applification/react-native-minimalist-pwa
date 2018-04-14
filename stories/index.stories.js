import React from 'react'

// /import { HeaderText } from 'react-native-minimalist'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

// storiesOf('HeaderText', module)
//   .add('HeaderText', () => (<HeaderText>Big Header</HeaderText>))
//   .add('HeaderText in red', () => (
//     <HeaderText color="red">Red Header</HeaderText>
//   ))
//   .add('HeaderText should be single line even if long', () => (
//     <HeaderText>React Native Minimalist</HeaderText>
//   ))

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
