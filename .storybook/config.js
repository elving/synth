import { addDecorator, addParameters, configure } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'
import { Fragment } from 'react'
import React from 'react'

import { getTokenValue } from '../packages/synth-core'
import { tokens } from '../packages/synth-tokens'

const files = require.context('../packages', true, /.story.js$/)

const GlobalStyles = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }
`

const loadStories = () => {
  addDecorator((story) => (
    <Fragment>
      <GlobalStyles />
      {story()}
    </Fragment>
  ))

  files.keys().forEach((filename) => files(filename))
}

const colorNames = [
  'Porcelain',
  'Thunder',
  'BalticSea',
  'Shark',
  'Mako',
  'Abbey',
  'ShuttleGray',
]

addParameters({
  backgrounds: colorNames.map((color) => ({
    name: color,
    value: getTokenValue(tokens, `@${color}`),
    default: color === 'Thunder',
  })),
})

configure(loadStories, module)
