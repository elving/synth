import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { borderRadius, padding } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Button } from '../Button'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').ButtonComponent>}
 */
const StyledButton = styled(Button)`
  ${borderRadius('rounded')}
  ${padding('@spacing.1')}
`

const IconButton = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').IconProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', synth, ...props }, ref) => (
    <StyledButton {...props} className={className} synth={synth} ref={ref} />
  ),
)

IconButton.propTypes = Button.propTypes
IconButton.defaultProps = Button.defaultProps
IconButton.displayName = 'IconButton'

export default withSynth(IconButton)
