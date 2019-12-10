import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { backgroundColor, padding } from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').HeaderProps>}
 */
const StyledHeader = styled.div`
  ${setBaseStyles()}
  ${backgroundColor('header')}
  ${padding('header')}
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Header = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').HeaderProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledHeader {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledHeader>
  ),
)

Header.propTypes = {
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

Header.defaultProps = {
  children: null,
  className: '',
}

Header.displayName = 'Header'

export default withSynth(Header)
