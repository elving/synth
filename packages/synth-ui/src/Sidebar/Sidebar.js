import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { backgroundColor, padding } from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

const Sidebar = styled.div`
  ${setBaseStyles()}
  ${backgroundColor('@Shark')}
  ${padding('@spacing.2')}
  display: flex;
  flex-direction: column;
  max-width: 280px;  
  width: 100%;
`

export default withSynth(Sidebar)
