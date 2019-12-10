import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { fontWeight } from '@beatgig/synth-styled-components'

import Text from './Text'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').TextComponent>}
 */
const StyledLabel = styled(Text)`
  ${fontWeight('control')}
  cursor: pointer;
  line-height: 1.25;
  display: flex;
  position: relative;
`

const Label = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').LabelProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledLabel
      {...props}
      as="label"
      className={className}
      synth={synth}
      ref={ref}
    >
      {children}
    </StyledLabel>
  ),
)

Label.propTypes = {
  ...Text.propTypes,
  /**
   * The elements you want to display within the label component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Label.defaultProps = {
  ...Text.defaultProps,
  children: null,
  className: '',
}

Label.displayName = 'Label'

export default withSynth(Label)
