import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import {
  color,
  fontSize,
  fontWeight,
  textTransform,
} from '@beatgig/synth-styled-components'

import Text from './Text'

const StyledStatus = styled(Text)`
  ${color('status')}
  ${fontSize('status')}
  ${fontWeight('status')}
  ${textTransform('status')}
`

const Status = withSynth(StyledStatus)

Status.propTypes = {
  ...Status.propTypes,
  ...Text.propTypes,
}

export default Status
