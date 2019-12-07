import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { margin } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

import {
  setAlignItems,
  setChildMargin,
  setChildWidth,
  setFlexDirection,
  setJustifyContent,
  setTextAlign,
} from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').FormRowProps>}
 */
const StyledFormRow = styled.div`
  ${setBaseStyles()}
  ${margin('formRow')}
  ${setAlignItems()}
  ${setFlexDirection()}
  ${setJustifyContent()}
  ${setTextAlign()}
  display: flex;
  width: 100%;

  && > * {
    ${setChildMargin()}
    ${setChildWidth()}

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const FormRow = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').FormRowProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledFormRow {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledFormRow>
  ),
)

FormRow.propTypes = {
  /**
   * Boolean flag to determine if the elements in the row should be centered.
   */
  centered: PropTypes.bool,
  /**
   * The elements you want to display within this component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * Boolean flag to determine if the each element(s) in the row should take all the horizontal space.
   */
  fullWidth: PropTypes.bool,
  /**
   * Boolean flag to determine if the each element(s) in the row should be displayed inline.
   */
  inline: PropTypes.bool,
}

FormRow.defaultProps = {
  centered: false,
  children: null,
  className: '',
  fullWidth: false,
  inline: false,
}

FormRow.displayName = 'FormRow'

export default withSynth(FormRow)
