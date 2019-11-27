import { addDecorator, addParameters, configure } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'
import { Fragment } from 'react'
import React from 'react'

import { getTokenValue } from '../packages/synth-core'
import { tokens } from '../packages/synth-tokens'

const GlobalStyles = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
  }
`
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

addDecorator((story) => (
  <Fragment>
    <GlobalStyles />
    {story()}
  </Fragment>
))

configure(
  require.context('../packages/synth-ui/docs', true, /\.stories\.(js|mdx)$/),
  module,
)
