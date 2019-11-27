import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  color,
  fontWeight,
  textDecoration,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

const HeaderLink = styled.a`
  ${setBaseStyles()}
  ${color('@Oslo')}
  ${fontWeight('@fontWeights.2')}
  ${textDecoration('link')}

  :hover {
    ${color('@Porcelain')}
    ${textDecoration('link:hover')}
  }
`

export default withSynth(HeaderLink)
