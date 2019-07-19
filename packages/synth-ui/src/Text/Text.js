import styled from 'styled-components'
import { fontSize } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { baseStyles } from '../utils'

const Text = styled.span`
  ${baseStyles}
  ${fontSize('text')}
`

export default withSynth(Text)
