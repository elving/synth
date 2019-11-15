import {
  INTENT_DANGER,
  INTENT_HIGHLIGHT,
  INTENT_NONE,
  INTENT_SUCCESS,
} from './constants'

export const getColorFromIntent = (intent = INTENT_NONE) => {
  switch (intent) {
    case INTENT_NONE: {
      return 'control'
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
      return 'control'
    }
  }
}
