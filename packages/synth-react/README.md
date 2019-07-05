# `@beatgig/synth-react`

React bindings for Synth.

## Installation

```bash
yarn add @beatgig/synth-react
```

## Usage

```javascript
import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { getTokenValue } from '@beatgig/synth-core'
import { SynthProvider, SynthConsumer } from '@beatgig/synth-react'
import { withTokens } from '@beatgig/synth-css'

const tokens = {
  '@coolBlue': 'blue',

  color: {
    background: {
      button: 'red',
      otherButton: '@coolBlue',
    },
  },
}

const Button = styled.button`
  ${({ synth }) => synth.backgroundColor('button')}
`

const OtherButton = styled.button`
  ${({ synth }) => synth.backgroundColor('otherButton')}
`

ReactDOM.render(
  <SynthProvider value={{
    tokens,
    ...withTokens(tokens),
  }}>
    <Button>A Red Button<Button>
    <SynthConsumer>
      {(synth) => (
        <OtherButton
          title={`Using this cool blue: ${getTokenValue(synth.tokens, '@coolBlue')}`}
        >
          A Blue Button
        </OtherButton>
      )}
    </SynthConsumer>
  </SynthProvider>,
  document.getElementById('root')
)
```
