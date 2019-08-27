import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Input } from '../../Input'
import { SearchIcon } from '../../Icons/src'

/**
 * @typedef {object} Props
 * @property {object} synth
 */

const SearchInputContainer = styled.label`
  align-items: center;
  display: flex;
  position: relative;
`

/**
 * @param {Props} props
 * @returns {string}
 */
const setIconFill = ({ synth }) => synth.getValue('@Porcelain')

/**
 * @param {Props} props
 * @returns {string}
 */
const setIconLeft = ({ synth }) => synth.getUnit('@spacing.1')

/**
 * @param {Props} props
 * @returns {string}
 */
const setIconFillFocus = ({ synth }) => synth.getValue('@BalticSea')

const CustomSearchIcon = withSynth(styled(SearchIcon)`
  fill: ${setIconFill};
  left: ${setIconLeft};
  pointer-events: none;
  position: absolute;
  z-index: 5;
`)

/**
 * @param {Props} props
 * @returns {string}
 */
const setInputPaddingLeft = ({ synth }) => `
  calc(${synth.getUnit('@icons')} + ${synth.getUnit(
  '@spacing.1',
)} + ${synth.getUnit('size:border:control')})
`

/**
 * @param {Props} props
 * @returns {string}
 */
const setInputBackgroundColorFocus = ({ synth }) => synth.getValue('@Porcelain')

/**
 * @param {Props} props
 * @returns {string}
 */
const setInputBorderColorFocus = ({ synth }) => synth.getValue('@Porcelain')

/**
 * @param {Props} props
 * @returns {string}
 */
const setInputColorFocus = ({ synth }) => synth.getValue('@BalticSea')

const CustomInput = withSynth(styled(Input).attrs(() => ({
  type: 'search',
}))`
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  padding-left: ${setInputPaddingLeft};
  z-index: 1;
  width: 200px;

  :focus {
    background-color: ${setInputBackgroundColorFocus};
    border-color: ${setInputBorderColorFocus};
    color: ${setInputColorFocus};
    outline: 0 none;
    width: 320px;

    & + svg {
      fill: ${setIconFillFocus};
    }
  }
`)

const SearchInput = (props) => (
  <SearchInputContainer>
    <CustomInput placeholder="Search" {...props} />
    <CustomSearchIcon />
  </SearchInputContainer>
)

export default withSynth(SearchInput)
