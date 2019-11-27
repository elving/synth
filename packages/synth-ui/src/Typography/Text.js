import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { INTENTS } from '../constants'
import { setBaseStyles } from '../utils'
import { setTextColor, setTextFontSize } from './utils'

const StyledText = styled.span`
  ${setBaseStyles()}
  ${setTextColor()}
  ${setTextFontSize()}
`
const Text = withSynth(StyledText)

Text.propTypes = {
  ...Text.propTypes,
  intent: PropTypes.oneOf(INTENTS),
}

export default Text
