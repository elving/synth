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

import { baseStyles } from '../utils'

const Button = styled.button.attrs(({ disabled = false }) => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.65 : 1,
  pointerEvents: disabled ? 'none' : 'inherit',
  type: 'button',
}))`
  ${baseStyles}
  ${backgroundColor('control')}
  ${border()}
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
  transition: all 0.25s ease;
  pointer-events: ${({ pointerEvents }) => pointerEvents};

  :hover {
    ${backgroundColor('control:hover')}
  }

  :focus {
    outline: 0 none;
  }

  :active {
    ${backgroundColor('control:active')}
  }
`

Button.propTypes = {
  disabled: bool,
  synth: object.isRequired,
}

export default withSynth(Button)
