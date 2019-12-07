import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { Small } from '../Typography'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').SmallComponent, import('@beatgig/synth-ui').TagProps>}
 */
const StyledTag = styled(Small)`
  ${backgroundColor('tag')}
  ${borderRadius('tag')}
  ${padding('tag')}
  white-space: nowrap;
  align-content: center;
  display: inline-flex;
  justify-content: center;
`

const Tag = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').TagProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <StyledTag {...props} className={className} synth={synth} ref={ref} />
  ),
)

Tag.propTypes = {
  /**
   * The elements you want to display within the tag.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Tag.defaultProps = {
  children: null,
  className: '',
}

Tag.displayName = 'Tag'

export default withSynth(Tag)
