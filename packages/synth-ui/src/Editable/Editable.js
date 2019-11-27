import styled from 'styled-components'
import { fontWeight, padding } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

const Editable = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${setBaseStyles()}
  ${fontWeight('control')}
  ${padding('control')}
  background-color: transparent;
  border: 0 none;
  cursor: text;
  line-height: 1.45;
  transition: all 0.2s ease-in-out 0s;

  :focus {
    outline: 0 none;
  }
`

export default withSynth(Editable)
