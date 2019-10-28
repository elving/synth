import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { baseStyles } from '../../utils'

/**
 * @typedef {object} Props
 * @property {number} [props.scale]
 * @property {object} [props.synth]
 */

/**
 * @param {Props} props
 * @returns {string}
 */
const setFontSizeProperty = ({ scale, synth }) =>
  `font-size: ${
    isNil(scale)
      ? synth.getUnit('typography:size:text')
      : synth.getUnit(`@fontSizes.${scale}`)
  };`

const Text = styled.span`
  ${baseStyles}
  ${setFontSizeProperty}
`

export default withSynth(Text)
