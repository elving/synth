import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Spacer } from '../../Spacer'

const PopupMenuDivider = styled(Spacer).attrs(() => ({
  bottom: true,
  scale: 1,
  top: true,
}))`
  border-bottom: 1px solid
    ${({ synth }) => synth.getValue('color:border:popup')};
`

export default withSynth(PopupMenuDivider)
