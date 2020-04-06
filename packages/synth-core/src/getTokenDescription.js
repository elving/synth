import getToken from './getToken'
import tokenHasMetadata from './tokenHasMetadata'

const getTokenDescription = (tokens, token) =>
  tokenHasMetadata(tokens, token)
    ? /** @type {import('@beatgig/synth-core').SynthTokenMetadata} */ (getToken(
        tokens,
        token,
      )).description
    : ''

export default getTokenDescription
