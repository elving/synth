import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { renderToString } from 'react-dom/server'
import { themes } from '@storybook/theming'

import StylesOverride from './styles'
import { BaseStyles, Flex, FullLogo } from '../packages/synth-ui/src'
import { getTokenValue } from '../packages/synth-core/src'
import { tokens } from '../packages/synth-tokens/src'

const colorNames = [
  'Porcelain',
  'Thunder',
  'BalticSea',
  'Shark',
  'Tuna',
  'Mako',
  'Abbey',
  'ShuttleGray',
  'Stone',
  'Oslo',
]

addParameters({
  backgrounds: colorNames.map((color) => ({
    name: color,
    value: getTokenValue(tokens, `color:@${color}`),
    default: color === 'BalticSea',
  })),
})

addParameters({
  options: {
    theme: {
      ...themes.dark,
      brandTitle: 'Synth',
      brandUrl: 'https://beatgig.com',
      brandImage: `data:image/svg+xml;base64,${btoa(
        renderToString(<FullLogo height={30} width="100%" />),
      )}`,
      appBg: getTokenValue(tokens, 'color:@Shark'),
      appContentBg: getTokenValue(tokens, 'color:@Thunder'),
      colorSecondary: getTokenValue(tokens, 'color:@Tuna'),
      barBg: getTokenValue(tokens, 'color:@BalticSea'),
      barTextColor: getTokenValue(tokens, 'color:@Oslo'),
      barSelectedColor: getTokenValue(tokens, 'color:@BeatGig.1'),
    },
  },
})

const StoryContainer = styled(Flex)`
  position: relative;
`

addDecorator((story) => (
  <StoryContainer center full>
    <BaseStyles />
    {story()}
  </StoryContainer>
))

ReactDOM.render(
  <Fragment>
    <BaseStyles />
    <StylesOverride />
  </Fragment>,
  document.getElementById('root'),
)

configure(require.context('../packages', true, /\.stories\.(js|mdx)$/), module)
