import React from 'react'
import { renderToString } from 'react-dom/server'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../../utils'
import { ChevronDownIcon } from '../../Icons'

/**
 * @typedef {object} Props
 * @property {import('react').ReactNode} [children]
 * @property {string} [className]
 * @property {object} [synth]
 */

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundImage = ({ synth }) =>
  `background-image: url('data:image/svg+xml;base64,${btoa(
    renderToString(
      <ChevronDownIcon fill={synth.getValue('color:text:base')} />,
    ),
  )}');`

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundSize = ({ synth }) =>
  `background-size: auto ${synth.getUnit('@icons.5')};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundPosition = ({ synth }) => {
  const padding = synth.getValue('space:padding:control')
  const paddingX = `${padding[1]}px`

  return `background-position: calc(100% - ${paddingX}) center;`
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setPadding = ({ synth }) => {
  const padding = synth.getValue('space:padding:control')
  const paddingY = `${padding[0]}px`
  const paddingX = `${padding[1]}px`
  const iconSize = synth.getUnit('@icons.5')

  return `padding: ${paddingY} calc(${iconSize} + ${paddingX} * 2) ${paddingY} ${paddingX};`
}

const Select = styled.select`
  ${baseStyles}
  ${border('input')}
  ${backgroundColor('input')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${setBackgroundImage}
  ${setBackgroundSize}
  ${setBackgroundPosition}
  ${setPadding}
  appearance: none;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    ${backgroundColor('input:hover')}
    ${border('input:hover')}
  }

  &:focus,
  &.active {
    ${backgroundColor('input:focus')}
    ${border('input:focus')}
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }

  & > option {
    font-weight: normal;
  }
`

export default withSynth(Select)
