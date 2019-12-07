import { BUTTON_ICON_POSITION_BOTTOM } from '../constants'

/**
 * @param {import('@beatgig/synth-ui').ButtonIconPosition} position
 * @returns {boolean}
 */
const iconToBottom = (position) => position === BUTTON_ICON_POSITION_BOTTOM

export default iconToBottom
