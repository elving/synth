import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'

import {
  border,
  borderRadius,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../Spacer'
import { setBaseStyles, withForwardedRef } from '../utils'

import { INTENT_NONE, INTENTS } from '../constants'
import { ICON_POSITION_LEFT, ICON_POSITIONS } from './constants'

import {
  iconToBottom,
  iconToLeft,
  iconToRight,
  iconToTop,
  setBackgroundColor,
  setBackgroundColorActive,
  setBackgroundColorHover,
  setBorderColor,
  setBorderColorActive,
  setColorHover,
  setCursor,
  setColor,
  setFlexDirection,
  setOpacity,
  setPointerEvents,
} from './utils'

const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${setBaseStyles()}
  ${border('control')}
  ${borderRadius()}
  ${fontWeight('control')}
  ${padding('control')}
  ${setBackgroundColor()}
  ${setBorderColor()}
  ${setColor()}
  ${setCursor()}
  ${setOpacity()}
  ${setFlexDirection()}
  ${setPointerEvents()}
  align-content: center;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin: 0;
  transition: all 0.2s ease-in-out 0s;
  line-height: 1.45;
  text-decoration: none;

  :hover {
    ${setBackgroundColorHover()}
    ${setColorHover()}
    text-decoration: none;
  }

  :focus {
    outline: 0 none;
    text-decoration: none;
  }

  :active {
    ${setBackgroundColorActive()}
    ${setBorderColorActive()}
    text-decoration: none;
  }
`

const SynthButton = withSynth(StyledButton)

const Button = ({
  children = null,
  className = '',
  icon = null,
  iconPosition = ICON_POSITION_LEFT,
  intent = INTENT_NONE,
  ref,
  ...props
}) => {
  const hasIcon = !isNil(icon)

  return (
    <SynthButton
      {...props}
      className={className}
      iconPosition={iconPosition}
      intent={intent}
      ref={ref}
    >
      {iconToLeft(iconPosition) || iconToTop(iconPosition) ? icon : null}
      {hasIcon && iconToLeft(iconPosition) ? <Spacer inline right /> : null}
      {hasIcon && iconToTop(iconPosition) ? <Spacer inline bottom /> : null}
      {children}
      {hasIcon && iconToRight(iconPosition) ? <Spacer inline left /> : null}
      {hasIcon && iconToBottom(iconPosition) ? <Spacer inline top /> : null}
      {iconToRight(iconPosition) || iconToBottom(iconPosition) ? icon : null}
    </SynthButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(ICON_POSITIONS),
  intent: PropTypes.oneOf(INTENTS),
  outline: PropTypes.bool,
}

export default withForwardedRef(Button)
