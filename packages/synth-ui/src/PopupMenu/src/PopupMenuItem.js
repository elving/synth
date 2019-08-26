import { func, node, string } from 'prop-types'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'
import React from 'react'
import styled from 'styled-components'

import {
  backgroundColor,
  color,
  fontSize,
  fontWeight,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../../Spacer'
import { baseStyles } from '../../utils'

const Item = withSynth(styled.button`
  ${baseStyles}
  ${color('control')}
  ${fontSize('control')}
  ${fontWeight('control')}
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  outline: 0 none;
  align-items: center;
  display: flex;
  padding: ${({ synth }) => synth.getUnit('@spacing.1')} ${({ synth }) =>
  synth.getUnit('@spacing.2')};
  line-height: 1.35;
  text-align: left;

  :hover {
    ${backgroundColor('control')}
  }
`)

const PopupMenuItem = ({ children, className, icon, onClick, url }) => {
  const hasIcon = !isNil(icon)

  return (
    <Item className={className} onClick={onClick}>
      {hasIcon ? icon : null}
      {hasIcon ? <Spacer scale={1} inline right /> : null}
      {children}
    </Item>
  )
}

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
