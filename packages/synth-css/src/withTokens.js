import * as SynthCore from '@beatgig/synth-core'

import { default as bindings } from './bindings'

const withTokens = (tokens) => {
  if (!SynthCore.isValidTokenConfig(tokens)) {
    SynthCore.throwTokenConfigError(tokens)
  }

  return Object.keys(bindings).reduce(
    /**
     * @param {object} bindingsWithTokens
     * @param { string } binding
     */
    (bindingsWithTokens, binding) => ({
      ...bindingsWithTokens,
      [binding]: (tokenName) => bindings[binding](tokens, tokenName),
    }),
    {},
  )
}

export default withTokens
