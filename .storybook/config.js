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
  'prominent',
  'primary',
  'contrast.1',
  'contrast.2',
  'contrast.3',
  'contrast.4',
]

addParameters({
  backgrounds: colorNames.map((color) => ({
    name: color,
    value: getTokenValue(tokens, `color:@${color}`),
    default: color === 'primary',
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
      appBg: getTokenValue(tokens, 'color:@primary'),
      appContentBg: getTokenValue(tokens, 'color:@primary'),
      colorSecondary: getTokenValue(tokens, 'color:@contrast.1'),
      barBg: getTokenValue(tokens, 'color:@contrast.2'),
      barTextColor: getTokenValue(tokens, 'color:@contrast.3'),
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
