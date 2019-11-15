import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { Flex } from '../../Flex'

const setMargin = ({ synth }) => {
  const padding = synth.getUnit('space:padding:card')
  return `margin: 0 -${padding} -${padding};`
}

const ModalActions = styled(Flex).attrs(() => ({
  alignItems: 'center',
  justifyContent: 'flex-end',
}))`
  ${borderRadius()}
  ${padding('card')}
  border-top: 1px solid ${({ synth }) => synth.getValue('@Mako')};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ${setMargin}
`

export default withSynth(ModalActions)
