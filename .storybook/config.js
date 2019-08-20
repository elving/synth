import { addDecorator, addParameters, configure } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import { getTokenValue } from '../packages/synth-core'
import { tokens } from '../packages/synth-tokens'

const files = require.context('../packages', true, /.story.js$/)

const loadStories = () => {
  addDecorator(centered)
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
