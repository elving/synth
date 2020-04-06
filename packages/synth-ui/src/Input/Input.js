import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontSize,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'
import { setBorderColor, setBorderColorFocus } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'input', import('@beatgig/synth-ui').InputProps>}
 */
const StyledInput = styled.input`
  ${setBaseStyles()}
  ${backgroundColor('input')}
  ${border('input')}
  ${borderRadius()}
  ${fontSize('control')}
  ${fontWeight('input')}
  ${padding('control')}
  ${setBorderColor()}
  cursor: text;
  line-height: 1.45;
  margin: 0;
  transition: all 0.2s ease-in-out 0s;

  :hover {
    ${backgroundColor('input:hover')}
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

const Input = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').InputProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, type = 'text', ...props }, ref) => (
    <StyledInput
      {...props}
      className={className}
      ref={ref}
      synth={synth}
      type={type}
    />
  ),
)

Input.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A string indicating which input type the <input> element represents.
   */
  type: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  type: 'text',
}

Input.displayName = 'Input'

export default withSynth(Input)
