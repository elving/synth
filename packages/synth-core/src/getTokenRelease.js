import getToken from './getToken'
import tokenHasMetadata from './tokenHasMetadata'

const getTokenRelease = (tokens, token) =>
  tokenHasMetadata(tokens, token)
    ? /** @type {import('@beatgig/synth-core').SynthTokenMetadata} */ (getToken(
        tokens,
        token,
      )).release
    : ''

export default getTokenRelease
