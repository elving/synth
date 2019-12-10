import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  color,
  fontWeight,
  textDecoration,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'a', import('@beatgig/synth-ui').HeaderLinkProps>}
 */
const StyledHeaderLink = styled.a`
  ${setBaseStyles()}
  ${color('@Oslo')}
  ${fontWeight('@fontWeights.2')}
  ${textDecoration('link')}

  :hover {
    ${color('@Porcelain')}
    ${textDecoration('link:hover')}
  }
`

const HeaderLink = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').HeaderLinkProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledHeaderLink {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledHeaderLink>
  ),
)

HeaderLink.propTypes = {
  /**
   * The elements you want to display within this component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

HeaderLink.defaultProps = {
  children: null,
  className: '',
}

HeaderLink.displayName = 'HeaderLink'

export default withSynth(HeaderLink)
