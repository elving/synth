import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  fontWeight,
  lineHeight,
  margin,
} from '@beatgig/synth-styled-components'

import Text from './Text'

import { setHeadingFontSize } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').TextComponent>}
 */
const StyledHeading = styled(Text).attrs(({ level = 'h1' }) => ({
  as: level,
}))`
  ${fontWeight('heading')}
  ${lineHeight('heading')}
  ${margin('heading')}
  ${setHeadingFontSize()}
`

const Heading = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').HeadingProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledHeading {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledHeading>
  ),
)

Heading.propTypes = {
  ...Text.propTypes,
  /**
   * The elements you want to display within the heading component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * Sets the element's heading level (h1, h2, etc.) and it's font-size accordingly
   */
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

Heading.defaultProps = {
  ...Text.defaultProps,
  children: null,
  className: '',
  // eslint-disable-next-line prettier/prettier
  level: /** @type {import('@beatgig/synth-ui').HeadingLevel} */ ('h1'),
}

Heading.displayName = 'Heading'

export default withSynth(Heading)
