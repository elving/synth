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

/**
 * @typedef {object} Props
 * @property {boolean} [hasError]
 * @property {object} [synth]
 */

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderColor = ({ hasError, synth }) =>
  `border-color: ${
    hasError ? synth.getValue('@Error') : synth.getValue('color:border:input')
  };`

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderColorFocus = ({ hasError, synth }) =>
  `border-color: ${
    hasError
      ? synth.getValue('@Error')
      : synth.getValue('color:border:input:focus')
  };`

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${baseStyles}
  ${border('input')}
  ${setBorderColor}
  ${backgroundColor('input')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${padding('control')}
  cursor: text;
  line-height: 1.45;
  transition: all 0.2s ease-in-out 0s;

  :focus {
    ${backgroundColor('input:focus')}
    ${border('input:focus')}
    ${setBorderColorFocus}
    outline: 0 none;
  }
`

export default withSynth(Input)
