import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'
import { backgroundColor, padding } from '@beatgig/synth-styled-components'

import { Flex } from '../../Flex'
import { baseStyles } from '../../utils'

const Sidebar = styled(Flex).attrs(() => ({
  column: true,
  fullWidth: true,
}))`
  ${baseStyles}
  ${backgroundColor('@Shark')}
  ${padding('@spacing.2')}
  max-width: 280px;  
`

export default withSynth(Sidebar)
