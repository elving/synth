import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'
import { setBackground, setPadding } from './utils'

const setSelectStyles = () => css`
  ${setBaseStyles()}
  ${border('input')}
  ${backgroundColor('input')}
  ${borderRadius()};
  ${fontWeight('input')}
  ${setBackground()}
  ${setPadding()}
  appearance: none;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    ${backgroundColor('input:hover')}
    ${border('input:hover')}
  }

  &:focus,
  &.active {
    ${backgroundColor('input:focus')}
    ${border('input:focus')}
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }

  & > option {
    font-weight: normal;
  }
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'select', import('@beatgig/synth-ui').SelectProps>}
 */
const StyledSelect = styled.select`
  ${setSelectStyles()}
`

const Select = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SelectProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <StyledSelect {...props} className={className} synth={synth} ref={ref} />
  ),
)

Select.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Select.defaultProps = {
  className: '',
}

Select.displayName = 'Select'

export { setSelectStyles }
export default withSynth(Select)
