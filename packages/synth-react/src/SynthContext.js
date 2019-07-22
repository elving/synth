import React from 'react'
import { getTokenValue, unit } from '@beatgig/synth-core'
import { tokens } from '@beatgig/synth-tokens'
import { withTokens } from '@beatgig/synth-css'

/**
 * @typedef {object} SynthContext
 * @property {import('react').ComponentType} Provider
 * @property {import('react').ComponentType} Consumer
 */

/**
 * @type {SynthContext}
 */
const {
  Provider: SynthProvider,
  Consumer: SynthConsumer,
} = React.createContext({
  tokens,
  getUnit: (tokenName) => unit(getTokenValue(tokens, tokenName)),
  getValue: (tokenName) => getTokenValue(tokens, tokenName),
  ...withTokens(tokens),
})

export { SynthProvider, SynthConsumer }
