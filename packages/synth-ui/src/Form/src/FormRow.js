import { bool, object } from 'prop-types'
import { margin } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { baseStyles } from '../../utils'

/**
 * @typedef {object} Props
 * @property {boolean} [centered]
 * @property {boolean} [fullWidth]
 * @property {boolean} [inline]
 * @property {object} [synth]
 */

/**
 * @param {Props} props
 * @returns {string}
 */
const setElementMarginRight = ({ inline, synth }) =>
  `margin-right: ${inline ? synth.getUnit('@spacing.1') : 0};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setElementMarginBottom = ({ inline, synth }) =>
  `margin-bottom: ${inline ? 0 : synth.getUnit('@spacing.1')};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setElementWidth = ({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')

/**
 * @param {Props} props
 * @returns {string}
 */
const setAlignItems = ({ centered }) =>
  `align-items: ${centered ? 'center' : 'flex-start'};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setFlexDirection = ({ inline }) =>
  `flex-direction: ${inline ? 'row' : 'column'};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setJustifyContent = ({ centered }) =>
  `justify-content: ${centered ? 'center' : 'flex-start'};`

/**
 * @param {Props} props
 * @returns {string}
 */
const setTextAlign = ({ centered }) =>
  `text-align: ${centered ? 'center' : 'left'};`

/**
 * @type {import('react').ComponentType}
 */
const FormRow = styled.div`
  ${baseStyles}
  ${setTextAlign}
  display: flex;
  ${setAlignItems}
  ${setFlexDirection}
  ${setJustifyContent}
  width: 100%;
  ${margin('formRow')}

  & > * {
    ${setElementMarginRight}
    ${setElementMarginBottom}
    ${setElementWidth}

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

FormRow.propTypes = {
  centered: bool,
  fullWidth: bool,
  inline: bool,
  synth: object,
}

export default withSynth(FormRow)
