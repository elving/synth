import React from 'react'
import styled from 'styled-components'
import { func, node, string } from 'prop-types'
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

const StyledItem = styled.button`
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

const SynthItem = withSynth(StyledItem)

const MenuItem = ({
  children = null,
  className = '',
  icon = null,
  onClick = noop,
  ref,
  ...props
}) => {
  const hasIcon = !isNil(icon)

  return (
    <SynthItem {...props} className={className} ref={ref} onClick={onClick}>
      {hasIcon ? icon : null}
      {hasIcon ? <Spacer scale={1} inline right /> : null}
      {children}
    </SynthItem>
  )
}

MenuItem.propTypes = {
  children: node,
  className: string,
  icon: node,
  onClick: func,
}

export default withSynth(MenuItem)
