import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { backgroundColor, padding } from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').SidebarProps>}
 */
const StyledSidebar = styled.div`
  ${setBaseStyles()}
  ${backgroundColor('@Shark')}
  ${padding('@spacing.2')}
  display: flex;
  flex-direction: column;
  max-width: 280px;  
  width: 100%;
`

const Sidebar = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SidebarProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledSidebar {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledSidebar>
  ),
)

Sidebar.propTypes = {
  /**
   * The elements you want to display within the sidebar.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

Sidebar.defaultProps = {
  children: null,
  className: '',
}

Sidebar.displayName = 'Sidebar'

export default withSynth(Sidebar)
