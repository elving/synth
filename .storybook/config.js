import React from 'react'
import { configure, addDecorator } from '@storybook/react'

const files = require.context('../packages', true, /.story.js$/)

function loadStories() {
  addDecorator((story) => (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        overflow: 'auto',
        minHeight: '100vh',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {story()}
    </div>
  ))

  files.keys().forEach((filename) => files(filename))
}

configure(loadStories, module)
