import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { backgroundColor, padding } from '@beatgig/synth-styled-components'

import { Flex } from '../Flex'

const Header = styled(Flex).attrs(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
}))`
  ${backgroundColor('header')}
  ${padding('header')}
  width: 100%;
`

export default withSynth(Header)
