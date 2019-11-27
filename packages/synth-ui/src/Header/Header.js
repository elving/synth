import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { backgroundColor, padding } from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

const Header = styled.div`
  ${setBaseStyles()}
  ${backgroundColor('header')}
  ${padding('header')}
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export default withSynth(Header)
