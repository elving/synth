import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Button } from '../Button'

import { setColor } from './utils'
import { ICON_POSITIONS } from '../Button/constants'
import { INTENTS } from '../constants'

const StyledClickable = styled(Button)`
  &,
  &:hover,
  &:active,
  &:focus {
    ${setColor()}
    background-color: transparent;
    border-color: transparent;
  }
`

const Clickable = withSynth(StyledClickable)

Clickable.propTypes = {
  ...Clickable.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(ICON_POSITIONS),
  intent: PropTypes.oneOf(INTENTS),
}

export default Clickable
