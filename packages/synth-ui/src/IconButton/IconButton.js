import React from 'react'
import styled from 'styled-components'
import { borderRadius, padding } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Button } from '../Button'
import { withForwardedRef } from '../utils'

const StyledButton = styled(Button)`
  ${borderRadius('rounded')}
  ${padding('@spacing')}
`

const SynthButton = withSynth(StyledButton)

const IconButton = ({ className = '', children, ...props }) => (
  <SynthButton {...props} className={className} />
)

IconButton.propTypes = {
  ...Button.propTypes,
}

export default withForwardedRef(IconButton)
