import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { Small } from '../Typography'

const Tag = styled(Small)`
  ${backgroundColor('tag')}
  ${borderRadius('tag')}
  ${padding('tag')}
  white-space: nowrap;
  align-content: center;
  display: inline-flex;
  justify-content: center;
`

export default withSynth(Tag)
