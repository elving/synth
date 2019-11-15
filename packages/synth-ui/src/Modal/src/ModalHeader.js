import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { Button } from '../../Button'
import { CloseIcon } from '../../Icons'
import { Flex } from '../../Flex'

import { noop } from '../../utils'

const setMargin = ({ synth }) => {
  const padding = synth.getUnit('space:padding:card')
  return `margin: -${padding} -${padding} 0;`
}

const Container = withSynth(styled(Flex)`
  ${padding('card')}
  ${borderRadius()}
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  ${setMargin}
`)

const setCloseButtonMarginLeft = ({ synth }) =>
  `margin-left: ${synth.getUnit('space:padding:card')};`

const CloseButton = withSynth(styled(Button)`
  ${setCloseButtonMarginLeft}
`)

const ModalHeader = ({
  children,
  className = '',
  close = noop,
  onCloseClick = noop,
}) => {
  const handleCloseClick = () => {
    close()
    onCloseClick()
  }

  return (
    <Container className={className} justifyContent="space-between">
      {children}
      <CloseButton icon={<CloseIcon scale={3} />} onClick={handleCloseClick} />
    </Container>
  )
}

export default ModalHeader
