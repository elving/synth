import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Input } from '../../Input'
import { SearchIcon } from '../../Icons/src'

const SearchInputContainer = styled.label`
  align-items: center;
  display: flex;
  position: relative;
`

const CustomSearchIcon = withSynth(styled(SearchIcon).attrs(({ synth }) => ({
  size: synth.getUnit('@fontSizes.6'),
}))`
  fill: ${({ synth }) => synth.getValue('@Porcelain')};
  left: ${({ synth }) => synth.getUnit('@spacing.1')};
  pointer-events: none;
  position: absolute;
  z-index: 5;
`)

const CustomInput = withSynth(styled(Input).attrs(() => ({
  type: 'search',
}))`
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  padding-left: calc(
    ${({ synth }) => synth.getUnit('@fontSizes.6')} +
      ${({ synth }) => synth.getUnit('@spacing.2')}
  );
  z-index: 1;
  width: 200px;

  :focus {
    background-color: ${({ synth }) => synth.getValue('@Porcelain')};
    border-color: ${({ synth }) => synth.getValue('@Porcelain')};
    color: ${({ synth }) => synth.getValue('@BalticSea')};
    outline: 0 none;
    width: 320px;

    & + svg {
      fill: ${({ synth }) => synth.getValue('@BalticSea')};
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
