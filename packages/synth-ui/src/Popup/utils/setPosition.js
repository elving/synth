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
 * @property {string} x - The popup's x position.
 * @property {string} y - The popup's y position.
 * @property {number|string} xOffset - The popup's x offset value.
 * @property {number|string} yOffset - The popup's y offset value.
 * @property {DOMRect} popupRect - The popup's DOMRect object.
 * @property {object} triggerRect - The target's DOMRect object.
 * @returns {<T>(props: T & Props) => string}
 */
const setPosition = () => ({
  x,
  y,
  xOffset,
  yOffset,
  popupRect,
  triggerRect,
}) => {
  const triggerRectX = unit(triggerRect.x)
  const triggerRectY = unit(triggerRect.y)
  const xOffsetUnit = unit(xOffset)
  const yOffsetUnit = unit(yOffset)

  const yTop = `top: calc(${triggerRectY} - ${unit(
    popupRect.height,
  )} + ${yOffsetUnit});`

  const yBottom = `top: calc(${triggerRectY} + ${unit(
    triggerRect.height,
  )} + ${yOffsetUnit});`

  const yCenter = `top: calc(${triggerRectY} + ${unit(
    triggerRect.height / 2 - popupRect.height / 2,
  )} + ${yOffsetUnit});`

  const xLeft = `left: calc(${triggerRectX} + ${xOffsetUnit});`

  const xRight = `left: calc(${triggerRectX} + ${unit(
    triggerRect.width - popupRect.width,
  )} + ${xOffsetUnit});`

  const xCenter = `left: calc(${triggerRectX} + ${unit(
    triggerRect.width / 2 - popupRect.width / 2,
  )} + ${xOffsetUnit});`

  if (x === POPUP_POSITION_LEFT && y === POPUP_POSITION_BOTTOM) {
    return `
      ${yBottom}
      ${xLeft}
    `
  } else if (x === POPUP_POSITION_CENTER && y === POPUP_POSITION_BOTTOM) {
    return `
      ${yBottom}
      ${xCenter}
    `
  } else if (x === POPUP_POSITION_RIGHT && y === POPUP_POSITION_BOTTOM) {
    return `
      ${yBottom}
      ${xRight}
    `
  } else if (x === POPUP_POSITION_LEFT && y === POPUP_POSITION_TOP) {
    return `
      ${yTop}
      ${xLeft}
    `
  } else if (x === POPUP_POSITION_CENTER && y === POPUP_POSITION_TOP) {
    return `
      ${yTop}
      ${xCenter}
    `
  } else if (x === POPUP_POSITION_RIGHT && y === POPUP_POSITION_TOP) {
    return `
      ${yTop}
      ${xRight}
    `
  } else if (x === POPUP_POSITION_LEFT && y === POPUP_POSITION_CENTER) {
    return `
      ${yCenter}
      left: calc(${triggerRectX} - ${unit(popupRect.width)} + ${xOffsetUnit});
    `
  } else if (x === POPUP_POSITION_RIGHT && y === POPUP_POSITION_CENTER) {
    return `
      ${yCenter}
      left: calc(${triggerRectX} + ${unit(triggerRect.width)} + ${unit(
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

export default setPosition
