import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { setTopContentMargin } from './utils'

const ModalContent = styled.div`
  ${padding('card')}
  ${borderRadius()}
  ${setTopContentMargin()}
`

export default withSynth(ModalContent)
