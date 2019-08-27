import React from 'react'
import { renderToString } from 'react-dom/server'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
  padding,
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
const setBackgroundImage = ({ synth }) => {
  const svg = renderToString(
    <ChevronDownIcon fill={synth.getValue('color:text:base')} />,
  )

  return `background-image: url('data:image/svg+xml;base64,${btoa(svg)}');`
}

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundSize = ({ synth }) =>
  `background-size: auto ${synth.getUnit('@icons.2')};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setBackgroundPosition = ({ synth }) =>
  `background-position: calc(100% - ${synth.getUnit('@spacing.1')}) center;`

const Select = styled.select`
  ${baseStyles}
  ${border('control')}
  ${backgroundColor('control')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${padding('control')}
  appearance: none;
  ${setBackgroundImage}
  ${setBackgroundSize}
  ${setBackgroundPosition}
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    ${backgroundColor('control:hover')}
  }

  &:focus {
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
