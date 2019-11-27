import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Heading } from '../Typography'

const ModalTitle = styled(Heading)`
  margin-bottom: 0;
`

export default withSynth(ModalTitle)
