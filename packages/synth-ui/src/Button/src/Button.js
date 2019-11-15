import { bool, node, object, oneOf, string } from 'prop-types'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import {
  backgroundColor,
  border,
  borderRadius,
  color,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../../Spacer'

import { baseStyles } from '../../utils'

import {
  ICON_POSITION_BOTTOM,
  ICON_POSITION_LEFT,
  ICON_POSITION_RIGHT,
  ICON_POSITION_TOP,
  ICON_POSITIONS,
  INTENT_HIGHLIGHT,
  INTENT_NONE,
  INTENTS,
} from './constants'

import { getColorFromIntent } from './utils'

/**
 * @typedef {object} Props
 * @property {import('react').ReactNode} [children]
 * @property {string} [className]
 * @property {boolean} [disabled]
 * @property {import('react').ReactNode} [icon]
 * @property {string} [iconPosition]
 * @property {string} [intent]
 * @property {boolean} [isIconButton]
 * @property {boolean} [outline]
 * @property {object} [synth]
 * @property {boolean} [primary]
 */

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToBottom = ({ iconPosition }) => iconPosition === ICON_POSITION_BOTTOM

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToLeft = ({ iconPosition }) => iconPosition === ICON_POSITION_LEFT

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToRight = ({ iconPosition }) => iconPosition === ICON_POSITION_RIGHT

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToTop = ({ iconPosition }) => iconPosition === ICON_POSITION_TOP

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundColor = ({ outline, intent, ...props }) => {
  if (outline) {
    return 'background-color: transparent;'
  } else {
    return backgroundColor(getColorFromIntent(intent))(props)
  }
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundColorHover = ({ outline, intent, synth }) =>
  intent !== INTENT_NONE
    ? synth.getValue(`${getColorFromIntent(intent)}.${outline ? 0 : 1}`)
    : synth.getValue(`color:background:control${!outline ? ':hover' : ''}`)

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundColorActive = ({ outline, intent, synth }) =>
  intent !== INTENT_NONE
    ? synth.getValue(getColorFromIntent(intent))
    : synth.getValue('color:background:control:active')

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderColor = ({ outline, intent, synth }) => {
  if (intent !== INTENT_NONE) {
    return outline
      ? `border-color: ${synth.getValue(getColorFromIntent(intent))};`
      : ''
  } else if (outline) {
    return `border-color: ${synth.getValue('color:background:control')};`
  }

  return ''
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderColorActive = ({ outline, intent, synth }) =>
  intent === INTENT_NONE && outline
    ? `border-color: ${synth.getValue('color:background:control:active')};`
    : ''

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderRadius = ({ isIconButton, ...props }) =>
  isIconButton ? 'border-radius: 50%;' : borderRadius()(props)

/**
 * @param {Props} props
 * @returns {string}
 */
const setColorHover = ({ outline, intent, synth }) =>
  intent === INTENT_HIGHLIGHT && outline
    ? `color: ${synth.getValue('@BalticSea')};`
    : synth.color('base')

/**
 * @param {Props} props
 * @returns {string}
 */
const setCursor = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer')

/**
 * @param {Props} props
 * @returns {string}
 */
const setColor = ({ outline, intent, ...props }) => {
  if (intent !== INTENT_NONE && outline) {
    return color(getColorFromIntent(intent))(props)
  } else if (intent === INTENT_HIGHLIGHT && !outline) {
    return color('@BalticSea')(props)
  } else {
    return color('base')(props)
  }
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setPadding = ({ isIconButton, ...props }) =>
  padding(isIconButton ? '@spacing' : 'control')(props)

/**
 * @param {Props} props
 * @returns {number}
 */
const setOpacity = ({ disabled }) => (disabled ? 0.5 : 1)

/**
 * @param {Props} props
 * @returns {string}
 */
const setFlexDirection = (props) =>
  iconToTop(props) || iconToBottom(props) ? 'column' : 'row'

/**
 * @param {Props} props
 * @returns {string}
 */
const setPointerEvents = ({ disabled }) => (disabled ? 'none' : 'inherit')

/**
 * @param {Props} props
 */
const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${baseStyles}
  ${setBackgroundColor}
  ${border('control')}
  ${setBorderColor}
  ${setBorderRadius}
  ${setColor}
  ${fontWeight('control')}
  ${setPadding}
  cursor: ${setCursor};
  opacity: ${setOpacity};
  align-content: center;
  align-items: center;
  display: inline-flex;
  flex-direction: ${setFlexDirection};
  justify-content: center;
  margin: 0;
  transition: all 0.2s ease-in-out 0s;
  line-height: 1.45;
  text-decoration: none;
  pointer-events: ${setPointerEvents};
  ${setBorderColor}

  :hover {
    background-color: ${setBackgroundColorHover};
    ${setColorHover}
    text-decoration: none;
  }

  :focus {
    outline: 0 none;
    text-decoration: none;
  }

  :active {
    background-color: ${setBackgroundColorActive};
    ${setBorderColorActive}
    text-decoration: none;
  }
`

const Button = forwardRef(
  /**
   * @param {Props} props
   * @param {import('react').RefObject} ref
   * @param {*} ref.current
   * @returns {import('react').ReactElement}
   */
  ({ children, className, icon, ...props }, ref) => {
    const hasContent = !isNil(children)
    const hasIcon = !isNil(icon)
    const isIconButton = hasIcon && !hasContent

    return (
      <StyledButton
        {...props}
        className={className}
        isIconButton={isIconButton}
        ref={ref}
      >
        {iconToLeft(props) || iconToTop(props) ? icon : null}
        {hasIcon && !isIconButton && iconToLeft(props) ? (
          <Spacer inline right />
        ) : null}
        {hasIcon && !isIconButton && iconToTop(props) ? (
          <Spacer inline bottom />
        ) : null}
        {children}
        {hasIcon && !isIconButton && iconToRight(props) ? (
          <Spacer inline left />
        ) : null}
        {hasIcon && !isIconButton && iconToBottom(props) ? (
          <Spacer inline top />
        ) : null}
        {iconToRight(props) || iconToBottom(props) ? icon : null}
      </StyledButton>
    )
  },
)

Button.propTypes = {
  children: node,
  className: string,
  disabled: bool,
  icon: node,
  iconPosition: oneOf(ICON_POSITIONS),
  intent: oneOf(INTENTS),
  outline: bool,
  synth: object.isRequired,
}

Button.defaultProps = {
  children: null,
  className: '',
  icon: null,
  iconPosition: ICON_POSITION_LEFT,
  intent: INTENT_NONE,
}

export default withSynth(Button)
