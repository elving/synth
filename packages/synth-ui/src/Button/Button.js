import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'

import {
  border,
  borderRadius,
  boxShadow,
  fontSize,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../Spacer'
import { setBaseStyles } from '../utils'

import {
  BUTTON_ICON_POSITION_LEFT,
  BUTTON_ICON_POSITIONS,
  BUTTON_INTENT_NONE,
  BUTTON_INTENTS,
} from './constants'

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

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'button', import('@beatgig/synth-ui').ButtonProps>}
 */
const StyledButton = styled.button`
  ${setBaseStyles()}
  ${border('control')}
  ${borderRadius()}
  ${fontSize('control')}
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
  transition: all 0.15s ease-in-out;
  line-height: 1.45;
  text-decoration: none;

  :hover {
    ${setBackgroundColorHover()}
    ${setColorHover()}
    text-decoration: none;
  }

  :focus {
    ${border('control:focus')}
    ${boxShadow('control:focus')}
    outline: 0 none;
    text-decoration: none;
  }

  :active {
    ${setBackgroundColorActive()}
    ${setBorderColorActive()}
    text-decoration: none;
  }
`

const Button = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ButtonProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      icon = null,
      iconPosition = BUTTON_ICON_POSITION_LEFT,
      intent = BUTTON_INTENT_NONE,
      synth,
      ...props
    },
    ref,
  ) => {
    const hasIcon = !isNil(icon)
    const hasContent = !isNil(children)

    return (
      <StyledButton
        type="button"
        {...props}
        className={className}
        iconPosition={iconPosition}
        intent={intent}
        synth={synth}
        ref={ref}
      >
        {iconToLeft(iconPosition) || iconToTop(iconPosition) ? icon : null}
        {hasIcon && hasContent && iconToLeft(iconPosition) ? (
          <Spacer inline scale={1} right />
        ) : null}
        {hasIcon && hasContent && iconToTop(iconPosition) ? (
          <Spacer inline scale={1} bottom />
        ) : null}
        {children}
        {hasIcon && hasContent && iconToRight(iconPosition) ? (
          <Spacer inline scale={1} left />
        ) : null}
        {hasIcon && hasContent && iconToBottom(iconPosition) ? (
          <Spacer inline scale={1} top />
        ) : null}
        {iconToRight(iconPosition) || iconToBottom(iconPosition) ? icon : null}
      </StyledButton>
    )
  },
)

Button.propTypes = {
  /**
   * The elements you want to display within the button.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * An optional icon component that can be rendered along side the
   * button's content.
   */
  icon: PropTypes.element,
  /**
   * The icon's position.
   */
  iconPosition: PropTypes.oneOf(
    /** @type {import('@beatgig/synth-ui').ButtonIconPosition[]} */ (BUTTON_ICON_POSITIONS),
  ),
  /**
   * The button's intent will determine it's text and background color.
   */
  intent: PropTypes.oneOf(
    /** @type {import('@beatgig/synth-ui').ButtonIntent[]} */ (BUTTON_INTENTS),
  ),
  /**
   * Displays the button only using it's outline.
   */
  outline: PropTypes.bool,
}

Button.defaultProps = {
  children: null,
  className: '',
  icon: null,
  iconPosition: /** @type {import('@beatgig/synth-ui').ButtonIconPosition} */ (BUTTON_ICON_POSITION_LEFT),
  intent: /** @type {import('@beatgig/synth-ui').ButtonIntent} */ (BUTTON_INTENT_NONE),
  outline: false,
}

Button.displayName = 'Button'

export default withSynth(Button)
