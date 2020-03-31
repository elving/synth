import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Box, withSynth } from '@beatgig/synth-react'

import { setHeadingFontSize, setHeadingMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-react').BoxComponent, import('@beatgig/synth-ui').HeadingProps>}
 */
const StyledHeading = styled(Box)`
  ${setHeadingMargin()}
  ${setHeadingFontSize()}
`

const Heading = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').HeadingProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      fontWeight = 'heading',
      level = 'h1',
      lineHeight = 'heading',
      synth,
      withoutMargin = false,
      ...props
    },
    ref,
  ) => (
    <StyledHeading
      {...props}
      as={level}
      className={className}
      fontWeight={fontWeight}
      level={level}
      lineHeight={lineHeight}
      ref={ref}
      synth={synth}
      withoutMargin={withoutMargin}
    >
      {children}
    </StyledHeading>
  ),
)

Heading.propTypes = {
  ...Box.propTypes,
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
  level: PropTypes.oneOf(
    /** @type {import('@beatgig/synth-ui').HeadingLevel[]} */ ([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ]),
  ),
  /**
   * A boolean flag to determine if the heading should be displayed *without* any margin.
   */
  withoutMargin: PropTypes.bool,
}

Heading.defaultProps = {
  ...Box.defaultProps,
  children: null,
  className: '',
  fontWeight: 'heading',
  level: /** @type {import('@beatgig/synth-ui').HeadingLevel} */ ('h1'),
  lineHeight: 'heading',
  withoutMargin: false,
}

Heading.displayName = 'Heading'

export default withSynth(Heading)
