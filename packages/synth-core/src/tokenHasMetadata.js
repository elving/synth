import { isNil, isObject } from '@beatgig/is'

import getToken from './getToken'

const tokenHasMetadata = (tokens, token) => {
  const tokenContent = getToken(tokens, token)

  return (
    isObject(tokenContent) &&
    !isNil(
      /** @type {import('@beatgig/synth-core').SynthTokenMetadata} */ (tokenContent).value,
    ) &&
    Object.keys(tokenContent).length > 1
  )
}

export default tokenHasMetadata
