import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { setActionsBorder, setBottomContentMargin } from './utils'

const ModalActions = styled.div`
  ${borderRadius()}
  ${padding('card')}
  ${setActionsBorder()}
  ${setBottomContentMargin()}
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default withSynth(ModalActions)
