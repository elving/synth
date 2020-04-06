import React from 'react'
import { getTokenValue } from '@beatgig/synth-core'
import { tokens } from '@beatgig/synth-tokens'

import {
  getTokenValue as getTokenCSSValue,
  withTokens,
} from '@beatgig/synth-css'

const {
  Consumer: SynthConsumer,
  Provider: SynthProvider,
} = React.createContext({
  tokens,
  getUnit: (tokenName) => getTokenCSSValue(tokens, tokenName),
  getValue: (tokenName) => getTokenValue(tokens, tokenName),
  ...withTokens(tokens),
})

export { SynthProvider, SynthConsumer }
