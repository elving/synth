import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import withSynth from '../../withSynth'
import { setTextProperties } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'span', import('@beatgig/synth-react').TextProps>}
 */
const StyledText = styled.span`
  ${setTextProperties()}
`

const Text = forwardRef(
  /**
   * @param {import('@beatgig/synth-react').TextProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      synth,
      withoutDefaults = false,
      ...props
    },
    ref,
  ) => {
    console.log('primitive', props)
    return (
      <StyledText
        {...props}
        className={className}
        ref={ref}
        synth={synth}
        withoutDefaults={withoutDefaults}
      >
        {children}
      </StyledText>
    )
  },
)

Text.propTypes = {
  /**
   * The elements you want to display within this Text component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The value to be assigned to the `color` CSS property.
   */
  color: PropTypes.string,
  /**
   * The value to be assigned to the `text-decoration` CSS property.
   */
  decoration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `font-family` CSS property.
   */
  font: PropTypes.string,
  /**
   * The value to be assigned to the `line-height` CSS property.
   */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `font-size` CSS property.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `letter-spacing` CSS property.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The value to be assigned to the `text-transform` CSS property.
   */
  transform: PropTypes.string,
  /**
   * The value to be assigned to the `font-weight` CSS property.
   */
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A boolean flag to determine if the component should *not* include `base`
   * token values as defaults.
   */
  withoutDefaults: PropTypes.bool,
}

Text.defaultProps = {
  children: null,
  className: '',
  withoutDefaults: false,
}

Text.displayName = 'Text'

export default withSynth(Text)
