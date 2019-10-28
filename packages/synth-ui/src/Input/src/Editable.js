import { fontWeight, padding } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { baseStyles } from '../../utils'

const Editable = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${baseStyles}
  background-color: transparent;
  border: 0 none;
  ${fontWeight('control')}
  ${padding('control')}
  cursor: text;
  line-height: 1.45;
  transition: all 0.2s ease-in-out 0s;

  :focus {
    outline: 0 none;
  }
`

export default withSynth(Editable)
