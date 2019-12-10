import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setMenuPadding } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').MenuProps>}
 */
const StyledMenu = styled.div`
  ${setMenuPadding()}
  display: flex;
  flex-direction: column;
`

const Menu = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').MenuProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledMenu {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledMenu>
  ),
)

Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Menu.propTypes = {
  /**
   * The elements you want to display within the menu.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Menu.defaultProps = {
  children: null,
  className: '',
}

Menu.displayName = 'Menu'

export default withSynth(Menu)
