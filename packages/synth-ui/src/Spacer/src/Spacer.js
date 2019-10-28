import React, { Fragment } from 'react'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { baseStyles } from '../../utils'

/**
 * @typedef {object} Props
 * @property {boolean} [props.bottom]
 * @property {boolean} [props.inline]
 * @property {boolean} [props.left]
 * @property {boolean} [props.right]
 * @property {number} [props.scale=0]
 * @property {object} [props.synth]
 * @property {boolean} [props.top]
 */

/**
 * @type {string}
 * @constant
 * @default
 */
const POSITION_TOP = 'top'

/**
 * @type {string}
 * @constant
 * @default
 */
const POSITION_LEFT = 'left'

/**
 * @type {string}
 * @constant
 * @default
 */
const POSITION_RIGHT = 'right'

/**
 * @type {string}
 * @constant
 * @default
 */
const POSITION_BOTTOM = 'bottom'

/**
 * @type {array}
 * @constant
 * @default
 */
const POSITIONS = [POSITION_TOP, POSITION_LEFT, POSITION_RIGHT, POSITION_BOTTOM]

/**
 * @param {Props} props
 * @returns {string}
 */
const setDisplayProperty = ({ inline }) => (inline ? 'inline-block' : 'block')

/**
 * @param {Props} props
 * @returns {string}
 */
const setMarginProperty = ({ scale = 0, synth, ...props }) => {
  let css = ''
  const margin = synth.getUnit(`@spacing.${scale}`)

  Object.keys(props).forEach((key) => {
    if (POSITIONS.includes(key) && props[key]) {
      css += `margin-${key}: ${margin};`
    }
  })

  return css || `margin: ${margin};`
}

const Spacer = styled.div`
  ${baseStyles}
  display: ${setDisplayProperty};
  ${setMarginProperty}
`

// const Spacer = styled.div.attrs(() => ({
//   children: <Fragment>&zwnj;</Fragment>,
// }))`
//   ${baseStyles}
//   display: ${setDisplayProperty};
//   ${setMarginProperty}
// `

export default withSynth(Spacer)
