import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'
import { setDisplay, setMargin } from './utils'

const StyledSpacer = styled.div`
  ${setBaseStyles()}
  ${setDisplay()}
  ${setMargin()}
`

const Spacer = withSynth(StyledSpacer)

Spacer.propTypes = {
  ...Spacer.propTypes,
  bottom: PropTypes.bool,
  inline: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  scale: PropTypes.number,
  top: PropTypes.bool,
}

export default Spacer
