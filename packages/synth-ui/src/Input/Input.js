import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../utils'

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${baseStyles}
  ${border('input')}
  ${backgroundColor('control')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${padding('control')}
  cursor: text;
  transition: all 0.25s ease;

  :focus {
    ${backgroundColor('control:focus')}
    outline: 0 none;
  }
`

export default withSynth(Input)
