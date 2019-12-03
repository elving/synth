import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'
import { setBorderColor, setBorderColorFocus } from './utils'

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${setBaseStyles()}
  ${backgroundColor('input')}
  ${border('input')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${padding('control')}
  ${setBorderColor()}
  cursor: text;
  line-height: 1.45;
  margin: 0;
  transition: all 0.2s ease-in-out 0s;

  :hover {
    ${backgroundColor('input:hover')}
    ${border('input:hover')}
  }

  :focus {
    ${backgroundColor('input:focus')}
    ${border('input:focus')}
    ${setBorderColorFocus()}
    outline: 0 none;
  }

  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export default withSynth(Input)
