import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { margin } from '@beatgig/synth-styled-components'
import { Text, withSynth } from '@beatgig/synth-react'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-react').TextComponent>}
 */
const StyledParagraph = styled(Text)`
  ${margin('paragraph')}
`

const Paragraph = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ParagraphProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledParagraph
      {...props}
      forwardedAs="p"
      className={className}
      synth={synth}
      ref={ref}
    >
      {children}
    </StyledParagraph>
  ),
)

Paragraph.propTypes = {
  ...Text.propTypes,
  /**
   * The elements you want to display within the Paragraph component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Paragraph.defaultProps = {
  ...Text.defaultProps,
  children: null,
  className: '',
}

Paragraph.displayName = 'Paragraph'

export default withSynth(Paragraph)
