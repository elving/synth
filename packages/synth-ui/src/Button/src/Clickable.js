import { color } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import Button from './Button'

import { getColorFromIntent } from './utils'
import { INTENT_HIGHLIGHT, INTENT_NONE } from './constants'

const setColor = ({ intent, ...props }) => {
  if (intent !== INTENT_NONE) {
    return color(getColorFromIntent(intent))(props)
  } else {
    return color('base')(props)
  }
}

const Clickable = styled(Button)`
  &,
  &:hover,
  &:active,
  &:focus {
    ${setColor}
    background-color: transparent;
    border-color: transparent;
  }
`

export default withSynth(Clickable)
