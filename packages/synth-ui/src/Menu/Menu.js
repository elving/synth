import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setMenuPadding } from './utils'

const Menu = styled.div`
  ${setMenuPadding()}
  display: flex;
  flex-direction: column;
`

export default withSynth(Menu)
