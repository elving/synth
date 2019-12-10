import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { fontSize } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import Text from './Text'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').TextComponent>}
 */
const StyledSmall = styled(Text)`
  ${fontSize('small')}
  line-height: 1.25;
`

const Small = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SmallProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledSmall
      {...props}
      as="small"
      className={className}
      synth={synth}
      ref={ref}
    >
      {children}
    </StyledSmall>
  ),
)

Small.propTypes = {
  ...Text.propTypes,
  /**
   * The elements you want to display within the Small component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Small.defaultProps = {
  ...Text.defaultProps,
  children: null,
  className: '',
}

Small.displayName = 'Small'

export default withSynth(Small)
