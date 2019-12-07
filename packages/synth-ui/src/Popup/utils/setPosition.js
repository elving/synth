import { unit } from '@beatgig/synth-core'

import {
  POPUP_POSITION_BOTTOM,
  POPUP_POSITION_CENTER,
  POPUP_POSITION_LEFT,
  POPUP_POSITION_RIGHT,
  POPUP_POSITION_TOP,
} from '../constants'

/**
 * Calculates and return the popup's `top` and `left` CSS values.
 * @typedef {object} Props
 * @property {HTMLElement} container
 * @property {string} x - The popup's x position.
 * @property {string} y - The popup's y position.
 * @property {number|string} xOffset - The popup's x offset value.
 * @property {number|string} yOffset - The popup's y offset value.
 * @property {DOMRect} popupRect - The popup's DOMRect object.
 * @property {object} triggerRect - The target's DOMRect object.
 * @returns {<T>(props: T & Props) => string}
 */
const setPosition = () => ({
  container,
  x,
  y,
  xOffset,
  yOffset,
  popupRect,
  triggerRect,
}) => {
  console.log(window.scrollX, triggerRect.x, triggerRect)
  console.log(window.scrollY, triggerRect.y)

  const triggerRectX = unit(triggerRect.x + window.scrollX)
  const triggerRectY = unit(triggerRect.y + window.scrollY)
  const xOffsetUnit = unit(xOffset)
  const yOffsetUnit = unit(yOffset)

  const yTop = `calc(${triggerRectY} - ${unit(
    popupRect.height,
  )} + ${yOffsetUnit})`

  const yBottom = `calc(${triggerRectY} + ${unit(
    triggerRect.height,
  )} + ${yOffsetUnit})`

  const yCenter = `calc(${triggerRectY} + ${unit(
    triggerRect.height / 2 - popupRect.height / 2,
  )} + ${yOffsetUnit})`

  const xLeft = `calc(${triggerRectX} + ${xOffsetUnit})`

  const xRight = `calc(${triggerRectX} + ${unit(
    triggerRect.width - popupRect.width,
  )} + ${xOffsetUnit})`

  const xCenter = `calc(${triggerRectX} + ${unit(
    triggerRect.width / 2 - popupRect.width / 2,
  )} + ${xOffsetUnit})`

  if (x === POPUP_POSITION_LEFT && y === POPUP_POSITION_BOTTOM) {
    return `transform: translate3d(${xLeft}, ${yBottom}, 0px);`
  } else if (x === POPUP_POSITION_CENTER && y === POPUP_POSITION_BOTTOM) {
    return `transform: translate3d(${xCenter}, ${yBottom}, 0px);`
  } else if (x === POPUP_POSITION_RIGHT && y === POPUP_POSITION_BOTTOM) {
    return `transform: translate3d(${xRight}, ${yBottom}, 0px);`
  } else if (x === POPUP_POSITION_LEFT && y === POPUP_POSITION_TOP) {
    return `transform: translate3d(${xLeft}, ${yTop}, 0px);`
  } else if (x === POPUP_POSITION_CENTER && y === POPUP_POSITION_TOP) {
    return `transform: translate3d(${xCenter}, ${yTop}, 0px);`
  } else if (x === POPUP_POSITION_RIGHT && y === POPUP_POSITION_TOP) {
    return `transform: translate3d(${xRight}, ${yTop}, 0px);`
  } else if (x === POPUP_POSITION_LEFT && y === POPUP_POSITION_CENTER) {
    return `transform: translate3d(calc(${triggerRectX} - ${unit(
      popupRect.width,
    )} + ${xOffsetUnit}), ${yCenter}, 0px);`
  } else if (x === POPUP_POSITION_RIGHT && y === POPUP_POSITION_CENTER) {
    return `transform: translate3d(calc(${triggerRectX} + ${unit(
      triggerRect.width,
    )} + ${unit(xOffset)}), ${yCenter}, 0px);`
  } else {
    return `transform: translate3d(${xLeft}, ${yBottom}, 0px);`
  }
}

export default setPosition
