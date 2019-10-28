import { func, node, string } from 'prop-types'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import {
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../../Spacer'
import { baseStyles } from '../../utils'

const Item = withSynth(styled.button`
  ${baseStyles}
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
  width: 100%;
  line-height: 1.35;
  text-align: left;
  transition: background-color 0.25s ease;

  :hover,
  :focus,
  &.active {
    ${backgroundColor('popupItem:hover')}
  }
`)

const PopupMenuItem = forwardRef(
  ({ children, className, icon, onClick }, ref) => {
    const hasIcon = !isNil(icon)

    return (
      <Item className={className} ref={ref} onClick={onClick}>
        {hasIcon ? icon : null}
        {hasIcon ? <Spacer scale={1} inline right /> : null}
        {children}
      </Item>
    )
  },
)

PopupMenuItem.propTypes = {
  children: node,
  className: string,
  icon: node,
  onClick: func,
  url: string,
}

PopupMenuItem.defaultProps = {
  children: null,
  className: '',
  icon: null,
  onClick: () => {},
}

export default withSynth(PopupMenuItem)
