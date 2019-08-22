import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../../utils'

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${baseStyles}
  ${border('input')}
  ${backgroundColor('input')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${padding('control')}
  cursor: text;
  transition: all 0.2s ease-in-out 0s;

  :focus {
    ${backgroundColor('input:focus')}
    ${border('input:focus')}
    outline: 0 none;
  }
`

export default withSynth(Input)
