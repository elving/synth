import { bool, node, object, oneOf, string } from 'prop-types'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'
import React, { forwardRef, Fragment } from 'react'
import styled from 'styled-components'

import {
  backgroundColor,
  border,
  borderRadius,
  color,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../../utils'
import { Spacer } from '../../Spacer'

/**
 * @typedef {object} Props
 * @property {import('react').ReactNode} [children]
 * @property {string} [className]
 * @property {boolean} [disabled]
 * @property {import('react').ReactNode} [icon]
 * @property {POSITION_BOTTOM|POSITION_LEFT|POSITION_RIGHT|POSITION_TOP} [iconPosition]
 * @property {boolean} [isIconButton]
 * @property {boolean} [outline]
 * @property {object} [synth]
 * @property {boolean} [primary]
 */

/**
 * @typedef {string} POSITION_TOP
 * @constant
 * @default
 */
const POSITION_TOP = 'top'

/**
 * @typedef {string} POSITION_LEFT
 * @constant
 * @default
 */
const POSITION_LEFT = 'left'

/**
 * @typedef {string} POSITION_RIGHT
 * @constant
 * @default
 */
const POSITION_RIGHT = 'right'

/**
 * @typedef {string} POSITION_BOTTOM
 * @constant
 * @default
 */
const POSITION_BOTTOM = 'bottom'

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToBottom = ({ iconPosition }) => iconPosition === POSITION_BOTTOM

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToLeft = ({ iconPosition }) => iconPosition === POSITION_LEFT

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToRight = ({ iconPosition }) => iconPosition === POSITION_RIGHT

/**
 * @param {object} props
 * @returns {boolean}
 */
const iconToTop = ({ iconPosition }) => iconPosition === POSITION_TOP

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundColor = ({ outline, primary, ...props }) => {
  if (outline) {
    return 'background-color: transparent;'
  } else if (primary) {
    return backgroundColor('@BeatGig')(props)
  } else {
    return backgroundColor('control')(props)
  }
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundColorHover = ({ outline, primary, synth }) =>
  primary
    ? synth.getValue(`@BeatGig.${outline ? 0 : 1}`)
    : synth.getValue(`color:background:control${!outline ? ':hover' : ''}`)

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderColor = ({ outline, primary, synth }) => {
  if (primary) {
    return outline ? `border-color: ${synth.getValue('@BeatGig')};` : ''
  } else if (outline) {
    return `border-color: ${synth.getValue('color:background:control')};`
  }

  return ''
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setBorderColorActive = ({ outline, synth }) =>
  outline
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
const setColorHover = ({ outline, primary, synth }) =>
  primary && outline ? `color: ${synth.getValue('@BalticSea')};` : ''

/**
 * @param {Props} props
 * @returns {string}
 */
const setCursor = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer')

/**
 * @param {Props} props
 * @returns {string}
 */
const setColor = ({ outline, primary, ...props }) => {
  if (primary && outline) {
    return color('@BeatGig')(props)
  } else if (primary && !outline) {
    return color('@BalticSea')(props)
  } else {
    return color('control')(props)
  }
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setPadding = ({ isIconButton, ...props }) =>
  padding(isIconButton ? '@spacing.1' : 'control')(props)

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
    ${backgroundColor('control:active')}
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
        {hasIcon && !hasContent ? <Fragment>&zwnj;</Fragment> : null}
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
  iconPosition: oneOf([
    POSITION_BOTTOM,
    POSITION_LEFT,
    POSITION_RIGHT,
    POSITION_TOP,
  ]),
  outline: bool,
  primary: bool,
  synth: object.isRequired,
}

Button.defaultProps = {
  children: null,
  className: '',
  icon: null,
  iconPosition: POSITION_LEFT,
}

export default withSynth(Button)
