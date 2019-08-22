import styled from 'styled-components'
import { bool, object } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  color,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../../utils'

const Button = styled.button.attrs(({ disabled }) => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'inherit',
  type: 'button',
}))`
  ${baseStyles}
  ${backgroundColor('control')}
  ${border('control')}
  ${borderRadius()}
  ${color('control')}
  ${fontWeight('control')}
  ${padding('control')}
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity};
  align-content: center;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  margin: 0;
  transition: all 0.2s ease-in-out 0s;
  text-decoration: none;
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  ${({ secondary, synth }) =>
    secondary
      ? `border-color: ${synth.getValue('color:background:control')};`
      : ''}
  ${({ secondary }) => (secondary ? 'background-color: transparent;' : '')}

  :hover {
    background-color: ${({ secondary, synth }) =>
      synth.getValue(`color:background:control${!secondary ? ':hover' : ''}`)};
    text-decoration: none;
  }

  :focus {
    outline: 0 none;
    text-decoration: none;
  }

  :active {
    ${backgroundColor('control:active')}
    ${({ secondary, synth }) =>
      secondary
        ? `border-color: ${synth.getValue('color:background:control:active')};`
        : ''}
    text-decoration: none;
  }
`

Button.propTypes = {
  disabled: bool,
  secondary: bool,
  synth: object.isRequired,
}

export default withSynth(Button)
