import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
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
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').SearchIconComponent>}
 */
const StyledSearchIcon = styled(SearchIcon)`
  ${setIconFill()}
  ${setIconPosition()}
  pointer-events: none;
  position: absolute;
  z-index: 5;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').InputComponent>}
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

const SearchInput = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SearchInputProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <SearchInputContainer>
      <StyledInput {...props} className={className} synth={synth} ref={ref} />
      <StyledSearchIcon synth={synth} scale={3} />
    </SearchInputContainer>
  ),
)

SearchInput.propTypes = Input.propTypes
SearchInput.defaultProps = Input.defaultProps
SearchInput.displayName = 'SearchInput'

export default withSynth(SearchInput)
