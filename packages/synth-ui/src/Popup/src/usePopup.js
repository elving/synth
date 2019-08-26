import { unit } from '@beatgig/synth-core'
import { useOnClickOutside, useRect } from '@beatgig/hooks'
import React, { useLayoutEffect, useCallback, useRef, useState } from 'react'

import Popup from './Popup'
import styled from 'styled-components'

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

/**
 * @typedef {object} PopupProps
 * @property {import('react').RefObject} ref
 * @property {*} ref.current
 * @property {(POSITION_LEFT|POSITION_RIGHT|POSITION_CENTER)} [options.x] - X position of the popup.
 * @property {(POSITION_TOP|POSITION_BOTTOM|POSITION_CENTER)} [options.y] - Y position of the popup.
 * @property {number|string} [options.xOffset] - Offset for the popup's x position.
 * @property {number|string} [options.yOffset] - Offset for the popup's y position.
 * @property {DOMRect} [options.popupRect] - The popup element's DOMRect object.
 * @property {object} [options.triggerRect] - The trigger element's DOMRect object.
 * @property {boolean} [options.useTriggerWidth] - If true, the popup's width will match it's target's width.
 * @property {boolean} [options.useTriggerHeight] - If true, the popup's height will match it's target's height.
 */

const ControlledPopup = styled(Popup)`
  ${setHeight}
  ${setWidth}
  ${setPosition}
  position: fixed;
  z-index: 1000;
`

/**
 * @typedef {object} PopupHookData
 * @property {function} close - Function used to close the popup.
 * @property {boolean} isOpen - Boolean flag to determine whether or  not the popup is open.
 * @property {function} open - Function used to open the popup.
 * @property {import('react').FunctionComponent} Popup - Popup component.
 * @property {import('react').RefObject} popupRef - React ref pointing to the popup DOM element.
 * @property {function} toggle - Function used to toggle the popup.
 * @property {import('react').RefObject} triggerRef - React ref pointing to the trigger DOM element.
 */

/**
 * Generates everything you need to render and control a popup component.
 *
 * @param {object} options
 * @param {(POSITION_LEFT|POSITION_RIGHT|POSITION_CENTER)} [options.x] - X position of the popup.
 * @param {(POSITION_TOP|POSITION_BOTTOM|POSITION_CENTER)} [options.y] - Y position of the popup.
 * @param {boolean} [options.isOpenByDefault] - Flag that determines if the popup is visible or not.
 * @param {number|string} [options.xOffset] - Offset for the popup's x position.
 * @param {number|string} [options.yOffset] - Offset for the popup's y position.
 * @param {function} [options.onClickOutside] - Callback function that gets called whenever the user clicks outside of the popup **and** it's target.
 * @param {boolean} [options.useTriggerWidth] - If true, the popup's width will match it's target's width.
 * @param {boolean} [options.useTriggerHeight] - If true, the popup's height will match it's target's height.
 * @returns {PopupHookData}
 */
const usePopup = (options = {}) => {
  const {
    isOpenByDefault = false,
    onClickOutside = () => {},
    useTriggerHeight = false,
    useTriggerWidth = false,
    x = POSITION_LEFT,
    xOffset = 0,
    y = POSITION_TOP,
    yOffset = 0,
  } = options

  const popupRef = useRef(null)
  const triggerRef = useRef(null)
  const triggerRect = useRect(triggerRef)
  const [isOpen, setOpenState] = useState(isOpenByDefault)
  const [popupRect, setPopupRect] = useState({})

  const open = useCallback(() => {
    setOpenState(true)
  }, [setOpenState])

  const close = useCallback(() => {
    setOpenState(false)
  }, [setOpenState])

  const toggle = useCallback(() => setOpenState((prevState) => !prevState), [
    setOpenState,
  ])

  const clickOutsideCallback = useCallback(() => {
    close()
    onClickOutside()
  }, [close, onClickOutside])

  useOnClickOutside(popupRef, clickOutsideCallback, [triggerRef])

  /**
   * We don't use the `useRect` hook for the popup element because it is not
   * rendered by the time the hook tries to get it's DOMRect object. In this
   * case, we have to run a useLayoutEffect that checks when the popup is both
   * opened and rendered to get it's DOMRect object and pass it to the
   * `ControlledPopup` component so it can position itself correctly.
   */
  useLayoutEffect(() => {
    if (isOpen && popupRef.current) {
      setPopupRect(popupRef.current.getBoundingClientRect())
    }
  }, [isOpen])

  return {
    close,
    isOpen,
    open,
    Popup: ({ className, ...props }) => (
      <ControlledPopup
        {...props}
        className={className}
        ref={popupRef}
        x={x}
        y={y}
        xOffset={xOffset}
        yOffset={yOffset}
        popupRect={popupRect}
        triggerRect={triggerRect}
        useTriggerWidth={useTriggerWidth}
        useTriggerHeight={useTriggerHeight}
      />
    ),
    popupRef,
    toggle,
    triggerRef,
  }
}

export default usePopup
