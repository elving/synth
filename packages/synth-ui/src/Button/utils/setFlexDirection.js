import iconToTop from './iconToTop'
import iconToBottom from './iconToBottom'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIconPosition} iconPosition
 * @returns {<T>(props: T & Props) => string}
 */
const setFlexDirection = () => ({ iconPosition }) =>
  `flex-direction: ${
    iconToTop(iconPosition) || iconToBottom(iconPosition) ? 'column' : 'row'
  };`

export default setFlexDirection
