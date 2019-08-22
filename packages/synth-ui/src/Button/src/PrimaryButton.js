import styled from 'styled-components'
import { backgroundColor, color } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import Button from './Button'

const PrimaryButton = styled(Button)`
  ${backgroundColor('@BeatGig')}
  ${color('@BalticSea')}
  ${({ secondary, synth }) =>
    secondary ? `border-color: ${synth.getValue('@BeatGig')};` : ''}
  ${({ secondary }) => (secondary ? 'background-color: transparent;' : '')}
  ${({ secondary, synth }) =>
    secondary ? `color: ${synth.getValue('@BeatGig')};` : ''}

  :hover {
    background-color: ${({ secondary, synth }) =>
      synth.getValue(`@BeatGig.${secondary ? 0 : 1}`)};
    ${({ secondary, synth }) =>
      secondary ? `color: ${synth.getValue('@BalticSea')};` : ''}
  }
`

export default withSynth(PrimaryButton)
