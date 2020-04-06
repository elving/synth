import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'
import { setSize } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'svg', import('@beatgig/synth-ui').IconProps>}
 */
const StyledIcon = styled.svg`
  ${setBaseStyles()}
  ${setSize()}
  transition: all 0.2s ease-in-out 0s;

  :not(:root) {
    overflow: hidden;
  }
`

const Icon = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconComponentProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    { children = null, className = '', fill = 'currentColor', synth, ...props },
    ref,
  ) => (
    <StyledIcon
      {...props}
      className={className}
      fill={fill}
      synth={synth}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </StyledIcon>
  ),
)

Icon.propTypes = {
  /**
   * The icon's markup.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A scale index from the `icons` synth token.
   */
  scale: PropTypes.number,
}

Icon.defaultProps = {
  children: null,
  className: '',
  fill: 'currentColor',
  scale: 1,
}

Icon.displayName = 'Icon'

export default withSynth(Icon)
