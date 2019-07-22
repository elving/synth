import { object } from 'prop-types'
import { border, boxShadow } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { Button } from '../Button'

const SecondaryButton = styled(Button)`
  ${border('input')}
  ${boxShadow('outlineControl')}
  background-color: transparent;
`

SecondaryButton.propTypes = {
  synth: object.isRequired,
}

export default withSynth(SecondaryButton)
