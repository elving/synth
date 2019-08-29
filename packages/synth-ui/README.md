# `@beatgig/synth-ui`

Synth UI is the component library used to build products at [BeatGig](https://beatgig.com), built on React and styled-components and powered by Synth design tokens.

## Installation

```bash
yarn add @beatgig/synth-ui
```

## Usage

Import any component you want to use and render them with React:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Card, Paragraph } from '@beatgig/synth-ui'

ReactDOM.render(
  <Card>
    <Paragraph>This is so cool!</Paragraph>
    <Button>Yes, I agree</Button>
  </Card>,
  document.getElementById('root')
)
```
