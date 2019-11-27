import React from 'react'
import { getTokenValue, unit } from '@beatgig/synth-core'
import { tokens } from '@beatgig/synth-tokens'
import { withTokens } from '@beatgig/synth-css'

const {
  Consumer: SynthConsumer,
  Provider: SynthProvider,
} = React.createContext({
  tokens,
  getUnit: (tokenName) => unit(getTokenValue(tokens, tokenName)),
  getValue: (tokenName) => getTokenValue(tokens, tokenName),
  ...withTokens(tokens),
})

export { SynthProvider, SynthConsumer }
