import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Text, withSynth } from '@beatgig/synth-react'
import { lineHeight } from '@beatgig/synth-styled-components'

import { setHeadingFontSize, setHeadingMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-react').TextComponent, import('@beatgig/synth-ui').HeadingProps>}
 */
const StyledHeading = styled(Text)`
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
      level = 'h1',
      lineHeight = 'heading',
      synth,
      weight = 'heading',
      withoutMargin = false,
      ...props
    },
    ref,
  ) => (
    <StyledHeading
      {...props}
      className={className}
      forwardedAs={level}
      level={level}
      lineHeight={lineHeight}
      ref={ref}
      synth={synth}
      weight={weight}
      withoutMargin={withoutMargin}
    >
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
  ...Text.defaultProps,
  children: null,
  className: '',
  level: /** @type {import('@beatgig/synth-ui').HeadingLevel} */ ('h1'),
  lineHeight: 'heading',
  weight: 'heading',
  withoutMargin: false,
}

Heading.displayName = 'Heading'

export default withSynth(Heading)
