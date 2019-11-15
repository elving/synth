import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

const setMargin = ({ synth }) => {
  const padding = synth.getUnit('space:padding:card')
  return `margin: -${padding} -${padding} 0;`
}

const ModalContent = styled.div`
  ${padding('card')}
  ${borderRadius()}
  ${setMargin}
`

export default withSynth(ModalContent)
