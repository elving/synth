import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Button } from '../Button'

import { setColor } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').ButtonComponent>}
 */
const StyledClickable = styled(Button)`
  &,
  &:hover,
  &:active,
  &:focus {
    ${setColor()}
    background-color: transparent;
    border-color: transparent;
  }
`

const Clickable = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').ClickableProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledClickable {...props} className={className} synth={synth} ref={ref}>
      {children}
    </StyledClickable>
  ),
)

Clickable.propTypes = Button.propTypes
Clickable.defaultProps = Button.defaultProps
Clickable.displayName = 'Clickable'

export default withSynth(Clickable)
