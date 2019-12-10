import { BUTTON_ICON_POSITION_LEFT } from '../constants'

/**
 * @param {import('@beatgig/synth-ui').ButtonIconPosition} position
 * @returns {boolean}
 */
const iconToLeft = (position) => position === BUTTON_ICON_POSITION_LEFT

export default iconToLeft
