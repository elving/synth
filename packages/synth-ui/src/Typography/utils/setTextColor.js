import { color } from '@beatgig/synth-styled-components'

import getIntentColor from './getIntentColor'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').TextIntent} intent
 * @returns {<T>(props: T & Props) => string}
 */
const setColor = () => ({ intent, ...props }) =>
  color(getIntentColor(intent))(props)

export default setColor
