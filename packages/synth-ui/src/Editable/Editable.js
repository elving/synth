import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { fontWeight, padding } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'input', import('@beatgig/synth-ui').EditableProps>}
 */
const StyledEditable = styled.input.attrs(() => ({
  type: 'text',
}))`
  ${setBaseStyles()}
  ${fontWeight('input')}
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

const Editable = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').EditableProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <StyledEditable {...props} className={className} synth={synth} ref={ref} />
  ),
)

Editable.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Editable.defaultProps = {
  className: '',
}

Editable.displayName = 'Editable'

export default withSynth(Editable)
