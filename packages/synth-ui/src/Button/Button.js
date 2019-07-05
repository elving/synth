import styled from 'styled-components'
import { object } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  color,
  fontSize,
  fontFamily,
  padding,
} from '@beatgig/synth-styled-components'

const Component = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${backgroundColor('button')}
  ${border('button')}
  ${borderRadius('button')}
  ${color('button')}
  ${fontFamily('button')}
  ${fontSize('button')}
  ${padding('button')}
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = withSynth(Component)

Button.propTypes = {
  synth: object.isRequired,
}

export { Button }
