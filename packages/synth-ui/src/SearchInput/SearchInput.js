import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Input } from '../Input'
import { SearchIcon } from '../Icons'

import {
  setIconFill,
  setIconFillFocus,
  setIconPosition,
  setInputFocusStyles,
  setInputPadding,
} from './utils'

const SearchInputContainer = styled.label`
  align-items: center;
  display: flex;
  position: relative;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthSearchIconProps>>}
 */
const StyledSearchIcon = styled(SearchIcon)`
  ${setIconFill()}
  ${setIconPosition()}
  pointer-events: none;
  position: absolute;
  z-index: 5;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthInputProps>>}
 */
const StyledInput = styled(Input).attrs(() => ({
  type: 'search',
}))`
  ${setInputPadding()}
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  z-index: 1;
  width: 200px;

  :focus {
    ${setInputFocusStyles()}
    outline: 0 none;
    width: 320px;

    & + svg {
      ${setIconFillFocus()}
    }
  }
`

const SearchInput = ({ synth, ...props }) => (
  <SearchInputContainer>
    <StyledInput {...props} synth={synth} />
    <StyledSearchIcon synth={synth} />
  </SearchInputContainer>
)

export default withSynth(SearchInput)
