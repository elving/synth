import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../Spacer'
import { setBaseStyles, noop } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'button', import('@beatgig/synth-ui').MenuItemProps>}
 */
const StyledMenuItem = styled.button`
  ${setBaseStyles()}
  ${color('control')}
  ${fontSize('control')}
  ${fontWeight('control')}
  ${backgroundColor('popupItem')}
  ${padding('popupItem')}
  border: 0 none;
  cursor: pointer;
  outline: 0 none;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  line-height: 1.35;
  text-align: left;
  transition: background-color 0.25s ease;

  :hover,
  :focus,
  &.active {
    ${backgroundColor('popupItem:hover')}
  }
`

const MenuItem = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').MenuItemProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      icon = null,
      onClick = noop,
      synth,
      ...props
    },
    ref,
  ) => {
    const hasIcon = !isNil(icon)

    return (
      <StyledMenuItem
        {...props}
        className={className}
        onClick={onClick}
        ref={ref}
        synth={synth}
      >
        {hasIcon ? icon : null}
        {hasIcon ? <Spacer scale={1} inline right /> : null}
        {children}
      </StyledMenuItem>
    )
  },
)

MenuItem.propTypes = {
  /**
   * The elements you want to display within the menu item.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * An optional icon component that can be rendered along side the
   * menu item's content.
   */
  icon: PropTypes.element,
  /**
   * A callback function that is called whenever the user clicks on the
   * menu item.
   */
  onClick: PropTypes.func,
}

MenuItem.defaultProps = {
  children: null,
  className: '',
  icon: null,
  onClick: noop,
}

MenuItem.displayName = 'MenuItem'

export default withSynth(MenuItem)
