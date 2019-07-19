import { addDecorator, addParameters, configure } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

const files = require.context('../packages', true, /.story.js$/)

function loadStories() {
  addDecorator(centered)
  files.keys().forEach((filename) => files(filename))
}

addParameters({
  backgrounds: [
    { name: 'Dark Background', value: '#212025', default: true },
    { name: 'Light Background', value: '#f9f9f9' },
  ],
})

configure(loadStories, module)
