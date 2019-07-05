# `@beatgig/synth-styled-components`

styled-components bindings for Synth.

## Installation

```bash
yarn add @beatgig/synth-styled-components
```

## Usage

```javascript
import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { backgroundColor, color } from '@beatgig/synth-styled-components'
import { SynthProvider } from '@beatgig/synth-react'
import { withTokens } from '@beatgig/synth-css'

const tokens = {
  '@coolWhite': 'white',

  color: {
    text: {
      button: '@coolWhite',
    },

    background: {
      button: 'red',
    },
  },
}

const Button = styled.button`
  ${backgroundColor('button')}
  ${color('button')}
`

ReactDOM.render(
  <SynthProvider value={{
    tokens,
    ...withTokens(tokens),
  }}>
    <Button>A Red Button<Button>
  </SynthProvider>,
  document.getElementById('root')
)
```
