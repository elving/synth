import { isObject } from '@beatgig/is'

import { TOKEN_STATES, TOKEN_STATE_DEFAULT } from './constants'
import getToken from './getToken'

const tokenHasStates = (tokens, token) => {
  const tokenContent = getToken(tokens, token, true)

  if (isObject(tokenContent)) {
    let hasStates = false

    for (const state in /** @type {object} */ (tokenContent)) {
      /**
       * Check if the current key is a valid state.
       */
      if (state !== TOKEN_STATE_DEFAULT && TOKEN_STATES.includes(state)) {
        hasStates = true
        break
      }
    }

    return hasStates
  }

  return false
}

export default tokenHasStates
