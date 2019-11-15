import { backgroundColor, border } from '@beatgig/synth-styled-components'
import { createPortal } from 'react-dom'
import { unit } from '@beatgig/synth-core'
import { withSynth } from '@beatgig/synth-react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { Card } from '../../Card'

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
 * @typedef {string} POSITION_CENTER
 * @constant
 * @default
 */
const POSITION_CENTER = 'center'

/**
 * @typedef {string} POSITION_BOTTOM
 * @constant
 * @default
 */
const POSITION_BOTTOM = 'bottom'

/**
 * Returns the popup's `height`.
 *
 * @param {object} props
 * @param {object} [props.triggerRect] - The target's DOMRect object.
 * @param {boolean} [props.useTriggerHeight] - Boolean flag to determine if the popup should have the trigger's height.
 * @returns {string}
 */
const setHeight = ({ triggerRect, useTriggerHeight }) =>
  useTriggerHeight ? `height: ${unit(triggerRect.height)};` : ''

/**
 * Returns the popup's `height`.
 *
 * @param {object} props
 * @param {object} [props.triggerRect] - The target's DOMRect object.
 * @param {boolean} [props.useTriggerWidth] - Boolean flag to determine if the popup should have the trigger's width.
 * @returns {string}
 */
const setWidth = ({ triggerRect, useTriggerWidth }) =>
  useTriggerWidth ? `width: ${unit(triggerRect.width)};` : ''

/**
 * Will calculate and return the popup's `top` and `left` CSS values.
 *
 * @param {object} props
 * @param {string} [props.x] - The popup's x position.
 * @param {string} [props.y] - The popup's y position.
 * @param {number|string} [props.xOffset] - The popup's x offset value.
 * @param {number|string} [props.yOffset] - The popup's y offset value.
 * @param {DOMRect} [props.popupRect] - The popup's DOMRect object.
 * @param {object} [props.triggerRect] - The target's DOMRect object.
 * @returns {string} - CSS `top` and `left` declarations.
 */
const setPosition = ({ x, y, xOffset, yOffset, popupRect, triggerRect }) => {
  const yTop = `top: calc(${unit(triggerRect.y)} - ${unit(
    popupRect.height,
  )} + ${unit(yOffset)});`

  const yBottom = `top: calc(${unit(triggerRect.y)} + ${unit(
    triggerRect.height,
  )} + ${unit(yOffset)});`

  const yCenter = `top: calc(${unit(triggerRect.y)} + ${unit(
    triggerRect.height / 2 - popupRect.height / 2,
  )} + ${unit(yOffset)});`

  const xLeft = `left: calc(${unit(triggerRect.x)} + ${unit(xOffset)});`

  const xRight = `left: calc(${unit(triggerRect.x)} + ${unit(
    triggerRect.width - popupRect.width,
  )} + ${unit(xOffset)});`

  const xCenter = `left: calc(${unit(triggerRect.x)} + ${unit(
    triggerRect.width / 2 - popupRect.width / 2,
  )} + ${unit(xOffset)});`

  if (x === POSITION_LEFT && y === POSITION_BOTTOM) {
    return `
      ${yBottom}
      ${xLeft}
    `
  } else if (x === POSITION_CENTER && y === POSITION_BOTTOM) {
    return `
      ${yBottom}
      ${xCenter}
    `
  } else if (x === POSITION_RIGHT && y === POSITION_BOTTOM) {
    return `
      ${yBottom}
      ${xRight}
    `
  } else if (x === POSITION_LEFT && y === POSITION_TOP) {
    return `
      ${yTop}
      ${xLeft}
    `
  } else if (x === POSITION_CENTER && y === POSITION_TOP) {
    return `
      ${yTop}
      ${xCenter}
    `
  } else if (x === POSITION_RIGHT && y === POSITION_TOP) {
    return `
      ${yTop}
      ${xRight}
    `
  } else if (x === POSITION_LEFT && y === POSITION_CENTER) {
    return `
      ${yCenter}
      left: calc(${unit(triggerRect.x)} - ${unit(popupRect.width)} + ${unit(
      xOffset,
    )});
    `
  } else if (x === POSITION_RIGHT && y === POSITION_CENTER) {
    return `
      ${yCenter}
      left: calc(${unit(triggerRect.x)} + ${unit(triggerRect.width)} + ${unit(
      xOffset,
    )});
    `
  } else {
    return `
      ${yBottom}
      ${xLeft}
    `
  }
}

const PopupContainer = withSynth(styled(Card)`
  ${backgroundColor('popup')}
  ${border('popup')}
  ${setHeight}
  ${setWidth}
  ${setPosition}
  position: fixed;
  z-index: 1000;
`)

const renderPopup = (container, renderInPlace, popup) =>
  renderInPlace ? popup : createPortal(popup, container)

const Popup = forwardRef(
  /**
   * @param {object} props
   * @param {string} [props.className]
   * @param {React.ReactChild} [props.children]
   * @param {HTMLElement} [props.container=HTMLDivElement]
   * @param {(POSITION_LEFT|POSITION_RIGHT|POSITION_CENTER)} [props.x] - X position of the popup.
   * @param {(POSITION_TOP|POSITION_BOTTOM|POSITION_CENTER)} [props.y] - Y position of the popup.
   * @param {number|string} [props.xOffset] - Offset for the popup's x position.
   * @param {number|string} [props.yOffset] - Offset for the popup's y position.
   * @param {DOMRect} [props.popupRect] - The popup element's DOMRect object.
   * @param {object} [props.triggerRect] - The trigger element's DOMRect object.
   * @param {boolean} [props.renderInPlace]
   * @param {boolean} [props.useTriggerWidth] - If true, the popup's width will match it's target's width.
   * @param {boolean} [props.useTriggerHeight] - If true, the popup's height will match it's target's height.
   * @param {React.RefObject} ref
   */
  (
    {
      children,
      className = '',
      container = document.getElementById('root'),
      popupRect,
      renderInPlace = false,
      triggerRect,
      useTriggerHeight = false,
      useTriggerWidth = false,
      x = POSITION_LEFT,
      xOffset = 0,
      y = POSITION_BOTTOM,
      yOffset = 0,
      ...props
    },
    ref,
  ) =>
    renderPopup(
      container,
      renderInPlace,
      <PopupContainer
        {...props}
        className={className}
        popupRect={popupRect}
        ref={ref}
        triggerRect={triggerRect}
        useTriggerHeight={useTriggerHeight}
        useTriggerWidth={useTriggerWidth}
        x={x}
        xOffset={xOffset}
        y={y}
        yOffset={yOffset}
      >
        {children}
      </PopupContainer>,
    ),
)

export default Popup
