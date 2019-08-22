import { withSynth } from '@beatgig/synth-react'
import React from 'react'
import styled from 'styled-components'

/**
 * @param {object} props
 * @param {boolean} props.inline
 * @returns {string}
 */
const setDisplayProperty = ({ inline }) => (inline ? 'inline-block' : 'block')

/**
 * @param {object} props
 * @param {boolean} props.bottom
 * @param {boolean} props.left
 * @param {boolean} props.right
 * @param {number} [props.scale=0]
 * @param {object} props.synth
 * @param {boolean} props.top
 * @returns {string}
 */
const setMarginProperty = ({ bottom, left, right, scale = 0, synth, top }) => {
  const margin = synth.getUnit(`@spacing.${scale}`)

  if (bottom) {
    return `margin-bottom: ${margin};`
  } else if (left) {
    return `margin-left: ${margin};`
  } else if (right) {
    return `margin-right: ${margin};`
  } else if (top) {
    return `margin-top: ${margin};`
  }

  return `margin: ${margin};`
}

const Spacer = styled.div`
  display: ${setDisplayProperty};
  ${setMarginProperty}
`

export default withSynth(Spacer)
