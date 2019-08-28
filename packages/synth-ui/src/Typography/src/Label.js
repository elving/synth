import { withSynth } from '@beatgig/synth-react'
import { fontWeight } from '@beatgig/synth-styled-components'
import styled from 'styled-components'

import { baseStyles } from '../../utils'

const Label = styled.label`
  ${baseStyles}
  ${fontWeight('control')}
  line-height: 1.25;
  cursor: default;
  align-self: center;
  display: flex;
`

export default withSynth(Label)
