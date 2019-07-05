# `@beatgig/synth-tokens`

Default token declarations used for building UI components at BeatGig.

## Installation

```bash
yarn add @beatgig/synth-tokens
```

## Usage

```javascript
import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { backgroundColor, color } from '@beatgig/synth-styled-components'
import { SynthProvider } from '@beatgig/synth-react'
import { tokens } from '@beatgig/synth-tokens'
import { withTokens } from '@beatgig/synth-css'

const customTokens = {
  ...tokens,

  color: {
    text: {
      customButton: 'white',
    },

    background: {
      customButton: 'red',
    },
  },
}

const CustomButton = styled.button`
  ${backgroundColor('customButton')}
  ${color('customButton')}
`

ReactDOM.render(
  <SynthProvider value={{
    tokens: customTokens,
    ...withTokens(customTokens),
  }}>
    <CustomButton>A Custom Button<CustomButton>
  </SynthProvider>,
  document.getElementById('root')
)
```
