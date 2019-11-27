import styled, { css } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontWeight,
} from '@beatgig/synth-styled-components'

import { setBaseStyles } from '../utils'
import { setBackground, setPadding } from './utils'

const setSelectStyles = () => css`
  ${setBaseStyles()}
  ${border('input')}
  ${backgroundColor('input')}
  ${borderRadius()};
  ${fontWeight('control')}
  ${setBackground()}
  ${setPadding()}
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

const Select = styled.select`
  ${setSelectStyles()}
`

export { setSelectStyles }
export default withSynth(Select)
