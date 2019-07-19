import React from 'react'
import { getTokenValue } from '@beatgig/synth-core'
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
  getTokenValue: (tokenName) => getTokenValue(tokens, tokenName),
  ...withTokens(tokens),
})

export { SynthProvider, SynthConsumer }
