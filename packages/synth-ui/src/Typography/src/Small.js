import { fontSize } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { baseStyles } from '../../utils'

const Small = styled.small`
  ${baseStyles}
  ${fontSize('small')}
  line-height: 1.25;
`

export default withSynth(Small)
