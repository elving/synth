import {
  INTENT_DANGER,
  INTENT_HIGHLIGHT,
  INTENT_NONE,
  INTENT_SUCCESS,
} from '../constants'

const getIntentColor = (intent = INTENT_NONE, defaultIntent = 'base') => {
  switch (intent) {
    case INTENT_NONE: {
      return defaultIntent
    }

    case INTENT_DANGER: {
      return '@Error'
    }

    case INTENT_SUCCESS: {
      return '@Success'
    }

    case INTENT_HIGHLIGHT: {
      return '@BeatGig'
    }

    default: {
      return defaultIntent
    }
  }
}

export default getIntentColor
