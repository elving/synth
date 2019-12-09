import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { INTENT_NONE, INTENTS } from './constants'
import { setBaseStyles } from '../utils'
import { setTextColor, setTextFontSize } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'span', import('@beatgig/synth-ui').TextProps>}
 */
const StyledText = styled.span`
  ${setBaseStyles()}
  ${setTextColor()}
  ${setTextFontSize()}
`
const Text = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').TextProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', scale = 2, synth, ...props }, ref) => (
    <StyledText
      {...props}
      className={className}
      scale={scale}
      synth={synth}
      ref={ref}
    >
      {children}
    </StyledText>
  ),
)

Text.propTypes = {
  /**
   * The elements you want to display within the text component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The intent will determine the text and background color.
   */
  intent: PropTypes.oneOf(INTENTS),
  /**
   * A scale index from the `fontSizes` synth token.
   */
  scale: PropTypes.number,
}

Text.defaultProps = {
  children: null,
  className: '',
  // eslint-disable-next-line prettier/prettier
  intent: /** @type {import('@beatgig/synth-ui').TextIntent} */ (INTENT_NONE),
  scale: 2,
}

Text.displayName = 'Text'

export default withSynth(Text)
