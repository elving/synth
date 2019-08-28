import { color } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import Small from './Small'

const Error = styled(Small)`
  && {
    ${color('@Error')}
  }
`

export default withSynth(Error)
