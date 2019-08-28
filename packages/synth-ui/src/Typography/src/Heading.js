import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  fontSize,
  fontWeight,
  lineHeight,
  margin,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../../utils'

const Heading = styled.h1`
  ${baseStyles}
  ${fontSize('heading')}
  ${fontWeight('heading')}
  ${lineHeight('heading')}
  ${margin('heading')}
`

export default withSynth(Heading)
