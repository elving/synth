import { unit } from '../../utils'

/**
 * Sets the popup's `height` and `width`.
 * @typedef {object} Props
 * @property {object} triggerRect - The target's DOMRect object.
 * @property {boolean} useTriggerHeight - Boolean flag to determine if the popup should have the trigger's height.
 * @property {boolean} useTriggerWidth - Boolean flag to determine if the popup should have the trigger's width.
 * @returns {<T>(props: T & Props) => string}
 */
const setSize = () => ({ triggerRect, useTriggerHeight, useTriggerWidth }) => `
  ${useTriggerHeight ? `height: ${unit(triggerRect.height)};` : ''}
  ${useTriggerWidth ? `width: ${unit(triggerRect.width)};` : ''}
`

export default setSize
