import React from 'react'
import { tokens } from '@beatgig/synth-tokens'
import { withTokens } from '@beatgig/synth-css'

const {
  Provider: SynthProvider,
  Consumer: SynthConsumer,
} = React.createContext({
  tokens,
  ...withTokens(tokens),
})

export { SynthProvider, SynthConsumer }
