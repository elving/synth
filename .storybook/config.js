import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'

import { BaseStyles, Flex, FullLogo } from '../packages/synth-ui/src'
import { getTokenValue, unit } from '../packages/synth-core/src'
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
    value: getTokenValue(tokens, `@${color}`),
    default: color === 'Thunder',
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
      appBg: getTokenValue(tokens, '@Shark'),
      appContentBg: getTokenValue(tokens, '@Thunder'),
      colorSecondary: getTokenValue(tokens, '@Tuna'),
      barBg: getTokenValue(tokens, '@BalticSea'),
      barTextColor: getTokenValue(tokens, '@Oslo'),
      barSelectedColor: getTokenValue(tokens, '@BeatGig'),
    },
  },
})

const BaseStylesOverride = createGlobalStyle`
  body, html {
    background-color: transparent;
  }

  body, html, #root {
    height: 100%;
    width: 100%;
  }

  .sbdocs {
    code {
      background-color: rgba(255, 255, 255, 0.055) !important;
      border: 1px solid rgba(255,255,255,.035) !important;
      border-radius: ${unit(
        getTokenValue(tokens, 'size:radius:base'),
      )} !important;
      color: rgba(255, 255, 255, 0.75) !important;
      font-family: "Operator Mono", "Fira Code Retina", "Fira Code", FiraCode-Retina, "Andale Mono", "Lucida Console", Consolas, Monaco, monospace !important;
      font-size: 85% !important;
      padding: 1px 2px 2px !important;
    }

    .sbdocs-content {
      max-width: 1024px;
    }

    .sbdocs-h2 {
      color: #fff;
      border: 0 none;
      margin: 35px 0;
      padding: 0;
    }

    .sbdocs-p {
      font-size: ${getTokenValue(tokens, 'typography:size:text')}px;

      a {
        color: ${getTokenValue(tokens, '@BeatGig')};
        font-size: ${getTokenValue(tokens, 'typography:size:text')}px;
        text-decoration: underline;
      }
    }

    .sbdocs-table {
      width: 100% !important;

      thead tr, thead th, tbody tr, tbody td {
        border: 0 none !important;
      }

      thead tr {
        border-bottom: 1px solid ${getTokenValue(tokens, '@Shark')} !important;
      }

      th {
        color: ${getTokenValue(tokens, '@Oslo')} !important;
      }
      
      tr {
        background-color: transparent !important;

        &:nth-child(even) {
          background-color: rgba(0, 0, 0, 0.15) !important;
        }

        td {
          &:first-child {
            border-top-left-radius: ${unit(
              getTokenValue(tokens, 'size:radius:base'),
            )} !important;
            border-bottom-left-radius: ${unit(
              getTokenValue(tokens, 'size:radius:base'),
            )} !important;
          }

          &:last-child {
            border-top-right-radius: ${unit(
              getTokenValue(tokens, 'size:radius:base'),
            )} !important;
            border-bottom-right-radius: ${unit(
              getTokenValue(tokens, 'size:radius:base'),
            )} !important;
          }        
        }
      }

      th, td {
        border-left: 0 none !important;
        border-right: 0 none !important;
        padding: 10px !important;
      }
    }

    [data-simplebar="init"] + div {
      background-color: transparent !important;
    }
  }
`

const StoryContainer = styled(Flex)`
  position: relative;
`

addDecorator((story) => (
  <StoryContainer center full>
    <BaseStyles />
    <BaseStylesOverride />
    {story()}
  </StoryContainer>
))

configure(require.context('../packages', true, /\.stories\.(js|mdx)$/), module)
