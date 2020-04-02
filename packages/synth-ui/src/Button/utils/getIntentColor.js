import {
  BUTTON_INTENT_DANGER,
  BUTTON_INTENT_HIGHLIGHT,
  BUTTON_INTENT_NONE,
  BUTTON_INTENT_SUCCESS,
} from '../constants'

/**
 * @param {import('@beatgig/synth-ui').ButtonIntent} [intent]
 * @param {string} [defaultIntent]
 * @returns {string}
 */
const getIntentColor = (
  intent = BUTTON_INTENT_NONE,
  defaultIntent = 'control',
) => {
  switch (intent) {
    case BUTTON_INTENT_NONE: {
      return defaultIntent
    }

    case BUTTON_INTENT_DANGER: {
      return '@Error.1'
    }

    case BUTTON_INTENT_SUCCESS: {
      return '@Success.1'
    }

    case BUTTON_INTENT_HIGHLIGHT: {
      return '@BeatGig.1'
    }

    default: {
      return defaultIntent
    }
  }
}

export default getIntentColor
